from rest_framework import serializers
from aid_platform import models


# user register serializer
class UserRegModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserInfo
        fields = ['username', 'password', 'email']

    # def validate_username(self, attr: str):
    #     if len(attr) > 16 or len(attr) < 8:
    #         raise serializers.ValidationError("the length of user name should between 8-16")
    #     return attr


class UserLoginModelSerializer(serializers.ModelSerializer):
    # token = models.Charefield()
    class Meta:
        model = models.UserInfo
        fields = ['id', 'username', 'act_name', 'email', 'mobile', 'authority']


class UserInfoModelSerializer(serializers.ModelSerializer):
    # token = serializers.Charfield(write_only=True)
    class Meta:
        model = models.UserInfo
        fields = '__all__'


# class CourseInfoSerializer(serializers.ModelSerializer):
#
#     class Meta:
#         model = models.CourseInfo


