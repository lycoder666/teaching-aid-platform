# app_auth.py
from aid_platform.models import UserInfo
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_jwt.authentication import get_authorization_header,jwt_get_username_from_payload
from rest_framework_jwt.authentication import jwt_decode_handler
import jwt


class MyJSONWebTokenAuthentication(BaseAuthentication):
    def authenticate(self, request):
        jwt_value = get_authorization_header(request)

        if not jwt_value:
            raise AuthenticationFailed('Authorization 字段是必须的')
        try:
            payload = jwt_decode_handler(jwt_value)
        except jwt.ExpiredSignature:
            raise AuthenticationFailed('签名过期')
        except jwt.InvalidTokenError:
            raise AuthenticationFailed('非法用户')
        username = jwt_get_username_from_payload(payload)
        print(username)
        user = UserInfo.objects.filter(username=username).first()
        print(user)

        return user, jwt_value
