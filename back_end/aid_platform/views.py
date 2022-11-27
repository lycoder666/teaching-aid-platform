from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import View,APIView
from rest_framework.response import Response
# Create your views here.
# 可以拥有原生登录基于Model类user对象签发JWT
from rest_framework_jwt.settings import api_settings
from aid_platform.models import UserInfo
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
        return Response({"isLogin": False},status=401)


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
        if user:  # 能查到，登陆成功，手动签发
            payload = jwt_payload_handler(user)
            token = jwt_encode_handler(payload)
            serializer = UserLoginModelSerializer(instance=user)
            return Response({'user': serializer.data, 'statecode': 0, 'token': token})
        else:
            return Response({'statecode': 1, 'token': None})





# class UserRegView():

