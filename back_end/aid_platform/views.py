from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import View, APIView
from rest_framework.response import Response
# Create your views here.
# 可以拥有原生登录基于Model类user对象签发JWT
from rest_framework_jwt.settings import api_settings
from aid_platform.models import *
# from aid_platform.serializers import UserRegModelSerializer
from aid_platform.serializers import *
import json

# jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
# jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
#
# payload = jwt_payload_handler(UserInfo)
# token = jwt_encode_handler(payload)

from aid_platform.app_auth import MyJSONWebTokenAuthentication
authentication_classes = [MyJSONWebTokenAuthentication]
# myauth = MyJSONWebTokenAuthentication()  claim authenticate
# user = myauth.authenticate(request)


# register page/ for checking username
class InitView(APIView):
    def get(self, request):
        return Response({"isLogin": False}, status=401)


class CheckUsernameView(ModelViewSet):
    """
    list:
    :param :'username'

    :return :{
            'statecode'(0:failed,1:succeed),
            'exist'(true:exist same name in db,false:no same name in db)
            }
    """
    queryset = UserInfo.objects.all()
    serializer_class = UserRegModelSerializer
    # authentication_classes = [MyJSONWebTokenAuthentication]

    def list(self, request, *args, **kwargs):
        # data = json.loads(request.body.decode('utf-8'))
        # username = data.get('username')
        username = request.data['username']
        count = UserInfo.objects.filter(username=username).count()
        # print(count)
        if count:  # if there is no exist user with same name ,then statecode is set to 1
            # return Response({"user": user, 'statecode': 0, 'exist': True})
            return Response({'statecode': 0, 'exist': True})
        else:
            return Response({'statecode': 1, 'exist': False})


# register page/ for user registing
class UserRegView(ModelViewSet):
    queryset = UserInfo.objects.all()
    serializer_class = UserRegModelSerializer
    # def post(self, request):
    #     # username = request.data['username']
    #     # password = request.data['password']
    #     # email = request.data['email']
    #     user = self.get_object()
    #     data = request.data
    #     return Response()


from rest_framework_jwt.settings import api_settings
jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


class UserLoginView(APIView):
    """
    :param

    """
    authentication_classes = []
    # authentication_classes = [MyJSONWebTokenAuthentication]
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = UserInfo.objects.filter(username=username, password=password).first()
        print(user)
        user_update = {'loggedAt': ceil(time.time() * 1000)}
        if user:  # 能查到，登陆成功，手动签发
            payload = jwt_payload_handler(user)
            token = jwt_encode_handler(payload)
            serializer = UserLoginModelSerializer(instance=user, data=user_update, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            print(serializer.data)
            # print(serializer)
            return Response({'user': serializer.data, 'statecode': 0, 'token': token})
        else:
            return Response({'statecode': 1, 'token': None})


class CourseListView(ModelViewSet):  # easy way
    authentication_classes = [MyJSONWebTokenAuthentication]
    queryset = UserInfo.objects.all()
    serializer_class = UserCourseListSerializer


class CourseDetailView(ModelViewSet):  # easy way
    authentication_classes = [MyJSONWebTokenAuthentication]
    queryset = CourseInfo.objects.all()
    serializer_class = CourseInfoSerializer

# class CourseListView(APIView):
#     # authentication_classes = [MyJSONWebTokenAuthentication]
#     # queryset = models.CourseInfo.objects.all()
#     # serializer_class = StudySerializer
#
#     def get(self, request):
#         user_id = request.data.get('id')
#         # myauth = MyJSONWebTokenAuthentication()
#         # auth = myauth.authenticate(request)
#         # user_id = auth[0]['id']
#         user = UserInfo.objects.filter(id=user_id).first()
#         # user = UserInfo.objects.filter(id=user).first()
#         # user = UserInfo.objects.all()
#         print('/////////')
#         # print('*****', user)
#         # course = user.study.all()
#         # print(course)
#         # print(user[0])
#         if user:
#             # course = user.study.all().first()  # foreignkey study
#             # print(course.instructor)
#             serializer = StudySerializer(instance=user)
#             print(serializer.data)
#
#             return Response(serializer.data)
# ******   dont delete   ******
# class CourseListView(ModelViewSet):  # 显示全部用户，study为课程详细信息
#     queryset = UserInfo.objects.all()
#     serializer_class = StudySerializer


# class ProblemListView(APIView):
#     authentication_classes = [MyJSONWebTokenAuthentication]
#
#     def get(self, request):
#         myauth = MyJSONWebTokenAuthentication()
#         auth = myauth.authenticate(request)
#         token = auth[1]
#         print(token)
#         course_id = request.data.get('course_id')
#         course = CourseInfo.objects.filter(id=course_id).first()
#         print(course_id)
#         # print(course.problem.all())
#         problem_set = course.problem.all()
#         # serializer = ProblemInfoSerializer(instance=problem_set, many=True)
#         serializer = CourseProblemListSerializer(instance=course)
#         # return Response({'problem_list': serializer.data, 'token': token})
#         return Response(serializer.data)
#         # {"id":"course_id","problem_list":[{"problem_id",...,"mark"},...,{...}],...}


class ProblemListView(ModelViewSet):
    queryset = CourseInfo.objects.all()
    serializer_class = CourseProblemListSerializer


# class SolutionListView(APIView):
#     def get(self, request):
#         myauth = MyJSONWebTokenAuthentication()
#         auth = myauth.authenticate(request)
#         token = auth[1]
#         problem_id = request.data.get('problem_id')
#         problem = ProblemInfo.objects.filter(id=problem_id).first()
#         serializer = ProblemSolutionListSerializer(instance=problem)
#         return Response(serializer.data)
#         # {"id":"problem_id","solution_list":[{"solution_id",...,"problem"},...,{...}],...}


class SolutionListView(ModelViewSet):
    queryset = ProblemInfo.objects.all()
    serializer_class = ProblemSolutionListSerializer


class LabelListView(ModelViewSet):
    queryset = CourseInfo.objects.all()
    serializer_class = CourseLabelListSerializer


class ProblemLabelListView(ModelViewSet):
    queryset = LabelInfo.objects.all()
    serializer_class = LabelProblemListDetailSerializer


"""
TODO: label： list √
      like:create destroy count
      comment:create count
      collect:create destroy count retrieve list
"""

