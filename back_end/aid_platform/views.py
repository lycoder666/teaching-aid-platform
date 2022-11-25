from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import View,APIView
from rest_framework.response import Response
# Create your views here.
# 可以拥有原生登录基于Model类user对象签发JWT
from rest_framework_jwt.settings import api_settings
from aid_platform.models import UserInfo
from aid_platform.serializers import UserRegModelSerializer
import json

# jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
# jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
#
# payload = jwt_payload_handler(UserInfo)
# token = jwt_encode_handler(payload)


# register page/ for checking username
class CheckUsernameView(APIView):
    def get(self, request):
        # data = json.loads(request.body.decode('utf-8'))
        # username = data.get('username')
        username = request.data['username']
        print(username)
        count = UserInfo.objects.filter(username=username).count()
        print(count)
        if count:  # if there is no exist user with same name ,then statecode is set to 1
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






# class UserRegView():

