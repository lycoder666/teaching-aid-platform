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
# class UserRegView(ModelViewSet):
class UserRegView(APIView):
    # queryset = UserInfo.objects.all()
    # serializer_class = UserRegModelSerializer

    def post(self, request):
        # username = request.data['username']
        # password = request.data['password']
        # email = request.data['email']
        # user = self.get_object()
        data = request.data
        serializer = UserRegModelSerializer(data=data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(True)


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
    authentication_classes = [MyJSONWebTokenAuthentication]
    queryset = CourseInfo.objects.all()
    serializer_class = CourseProblemListSerializer


class ProblemDetailView(ModelViewSet):
    authentication_classes = [MyJSONWebTokenAuthentication]
    queryset = ProblemInfo.objects.all()
    serializer_class = ProblemPartialDetailSerializer


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
    authentication_classes = [MyJSONWebTokenAuthentication]
    queryset = ProblemInfo.objects.all()
    serializer_class = ProblemSolutionListSerializer


class LabelListView(ModelViewSet):
    authentication_classes = [MyJSONWebTokenAuthentication]
    queryset = CourseInfo.objects.all()
    serializer_class = CourseLabelListSerializer


class ProblemLabelListView(ModelViewSet):
    authentication_classes = [MyJSONWebTokenAuthentication]
    queryset = LabelInfo.objects.all()
    serializer_class = LabelProblemListDetailSerializer


class ProblemLikeView(APIView):
    authentication_classes = [MyJSONWebTokenAuthentication]
    # queryset = LikeUser2Solution.objects.all()
    # serializer_class = LikeSerializer
    def get(self, request):
        myauth = MyJSONWebTokenAuthentication()
        auth = myauth.authenticate(request)
        user_id = auth[0]['id']
        solution_id = request.data['solution_id']
        is_liked = LikeUser2Solution.objects.filter(user_id=user_id, solution_id=solution_id).first()
        likes = LikeUser2Solution.objects.filter(solution_id=solution_id).count()
        if is_liked:
            return Response({'is_liked': True, 'likes': likes})
        else:
            return Response({'is_liked': False, 'likes': likes})
    def post(self,request):
        myauth = MyJSONWebTokenAuthentication()
        auth = myauth.authenticate(request)
        user_id = auth[0]['id']
        # print(user_id)
        solution_id = request.data['solution_id']
        is_liked = request.data['is_liked']
        if is_liked:
            # print('////// 111111///////////')
            LikeUser2Solution.objects.filter(user=user_id, solution=solution_id).delete()
            return Response(True)
        else:
            # print('*****   1   *******')
            data = {'user': user_id, 'solution': solution_id}
            # data = request.data
            # print(user_id)
            # print(data)
            serializer = LikeSerializer(data=data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(True)


class ProblemCollectView(APIView):
    authentication_classes = [MyJSONWebTokenAuthentication]
    # queryset = LikeUser2Solution.objects.all()
    # serializer_class = LikeSerializer
    def get(self, request):
        myauth = MyJSONWebTokenAuthentication()
        auth = myauth.authenticate(request)
        user_id = auth[0]['id']
        solution_id = request.data['solution_id']
        is_stared = CollectionUser2Solution.objects.filter(user_id=user_id, solution_id=solution_id).first()
        stars = CollectionUser2Solution.objects.filter(solution_id=solution_id).count()
        if is_stared:
            return Response({'is_stared': True, 'stars': stars})
        else:
            return Response({'is_stared': False, 'stars': stars})
    def post(self,request):
        myauth = MyJSONWebTokenAuthentication()
        auth = myauth.authenticate(request)
        user_id = auth[0]['id']
        # print(user_id)
        solution_id = request.data['solution_id']
        is_stared = request.data['is_stared']
        if is_stared:
            # print('////// 111111///////////')
            CollectionUser2Solution.objects.filter(user=user_id, solution=solution_id).delete()
            return Response(True)
        else:
            # print('*****   1   *******')
            data = {'user': user_id, 'solution': solution_id}
            # data = request.data
            # print(user_id)
            # print(data)
            serializer = CollectionSerializer(data=data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(True)


class SolutionCommentView(APIView):
    authentication_classes = [MyJSONWebTokenAuthentication]

    def get(self, request):
        myauth = MyJSONWebTokenAuthentication()
        auth = myauth.authenticate(request)
        solution_id = request.data['solution_id']
        comments = CommentUser2Solution.objects.filter(solution_id=solution_id)
        serializer = CommentSerializer(instance=comments, many=True)
        return Response(serializer.data)


class AddProblemView(APIView):
    authentication_classes = [MyJSONWebTokenAuthentication]

    def post(self, request):
        myauth = MyJSONWebTokenAuthentication()
        auth = myauth.authenticate(request)

        problem_name = request.data['title']
        tags = request.data['tags']
        problem_content = request.data['description']
        course_id = request.data['course_id']
        data_problem = {'problemName': problem_name, 'problemContent': problem_content, 'course': course_id, 'mark': tags}
        print(data_problem)
        serializer_problem = ProblemInfoSerializer(data=data_problem)
        serializer_problem.is_valid(raise_exception=True)
        problem = serializer_problem.save()  # add problem
        problem_ser = ProblemInfoSerializer(instance=problem)
        problem_id = problem_ser.data['id']  # get id of new problem
        # print(pro_ser.data)
        # print(pro_ser.data['id'])
        # print(type(pro_ser))
        for tag in tags:  # add relation mark
            data_label = {'label': tag, 'problem': problem_id, 'course': course_id}
            serializer = MarkSerializer(data=data_label)
            serializer.is_valid(raise_exception=True)
            serializer.save()
        # problem_new = ProblemInfo.objects.filter(id=problem_id).all()
        # serializer = ProblemInfoSerializer(instance=problem_new, many=True)
        # return Response(serializer.data)
        return Response(True)


class AddSolutionView(APIView):
    authentication_classes = [MyJSONWebTokenAuthentication]

    def post(self, request):
        myauth = MyJSONWebTokenAuthentication()
        auth = myauth.authenticate(request)
        user_id = auth[0]['id']

        solution_name = request.data['title']
        solution_content = request.data['description']
        problem_id = request.data['problem_id']
        data = {'user': user_id, 'solutionName': solution_name, 'solutionContent': solution_content, 'problem': problem_id}
        serializer = SolutionInfoSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(True)


class AddCommentView(APIView):
    authentication_classes = [MyJSONWebTokenAuthentication]

    def post(self, request):
        myauth = MyJSONWebTokenAuthentication()
        auth = myauth.authenticate(request)
        user_id = auth[0]['id']

        solution_id = request.data['solutionId']
        comment_content = request.data['content']
        data = {'user': user_id, 'solution': solution_id, 'commentContent': comment_content}
        serializer = CommentSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(True)

"""
TODO: label： list √
      like:create destroy count √
      comment:create count
      collect:create destroy count retrieve list 
"""

