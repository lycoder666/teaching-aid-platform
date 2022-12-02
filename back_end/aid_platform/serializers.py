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


class UserInfoSerializer(serializers.ModelSerializer):
    # token = serializers.Charfield(write_only=True)
    class Meta:
        model = models.UserInfo
        fields = '__all__'


class CourseInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseInfo
        fields = '__all__'


# class CourseListSerializer(serializers.ModelSerializer):
#     user = UserInfoModelSerializer(many=True)
#
#     class Meta:
#         model = models.CourseInfo
#         fields = '__all__'

# class UserCoursePartialModelSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = models.UserInfo
#         fields = ['id', 'username', 'act_name', 'authority']



class StudyRelationshipSerializer(serializers.ModelSerializer):
    course = CourseInfoSerializer(source='studies', read_only=True, many=True)
    # course = CourseInfoSerializer(many=True)
    # course = serializers.ManyRelatedField()
    # course_set = serializers.ManyRelatedField(CourseInfoSerializer(many=True),queryset=models.UserInfo.objects.all())
    class Meta:
        model = models.StudyUser2Course
        fields = '__all__'


class StudySerializer(serializers.ModelSerializer):
    study = CourseInfoSerializer(read_only=True, many=True)
    # studies = StudyRelationshipSerializer(source="study", read_only=True, many=True)
    class Meta:
        model = models.UserInfo
        fields = '__all__'


# class UserCourseSerializer(serializers.ModelSerializer):
#     def to_representation(self, instance):
#         representation = super(UserCourseSerializer, self).to_representation(instance)
#         representation['members'] = []
#         for i in CourseInfoSerializer(instance.study, many=True).data:
#             reason = MembershipSerializers(instance.membership_set.get(group=instance.id, person=i['id'])).data[
#                 'invite_reason']
#             i['invite_reason'] = reason
#             representation['members'].append(i)
#         return representation
#
#     class Meta:
#         model = models.UserInfo
#         fields = '__all__'



