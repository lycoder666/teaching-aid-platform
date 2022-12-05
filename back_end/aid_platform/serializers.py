from rest_framework import serializers
from aid_platform import models


# user register
class UserRegModelSerializer(serializers.ModelSerializer):
    last_login = serializers.IntegerField(write_only=True)
    class Meta:
        model = models.UserInfo
        fields = ['username', 'password', 'email', 'last_login']
    # def validate_username(self, attr: str):
    #     if len(attr) > 16 or len(attr) < 8:
    #         raise serializers.ValidationError("the length of user name should between 8-16")
    #     return attr


# user login
class UserLoginModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserInfo
        fields = ['id', 'username', 'authority', 'loggedAt']


class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserInfo
        fields = '__all__'


class CourseInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseInfo
        fields = '__all__'


class UserCourseListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserInfo
        fields = ['id', 'study']


# class CourseProblemListSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = models.CourseInfo
#         fields = ['id', 'problem']


# class UserCoursePartialModelSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = models.UserInfo
#         fields = ['id', 'username', 'act_name', 'authority']


# course list
class StudyRelationshipSerializer(serializers.ModelSerializer):
    course = CourseInfoSerializer(source='studies', read_only=True, many=True)
    # course = CourseInfoSerializer(many=True)
    # course = serializers.ManyRelatedField()
    # course_set = serializers.ManyRelatedField(CourseInfoSerializer(many=True),queryset=models.UserInfo.objects.all())

    class Meta:
        model = models.StudyUser2Course
        fields = '__all__'


class StudySerializer(serializers.ModelSerializer):
    # study = CourseInfoSerializer(read_only=True, many=True)
    # study detail is not need
    class Meta:
        model = models.UserInfo
        fields = ['id', 'study']


# problem list
class LabelInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.LabelInfo
        fields = '__all__'


class LabelProblemListInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.LabelInfo
        fields = ['id', 'labelName']


class ProblemInfoSerializer(serializers.ModelSerializer):
    mark = LabelInfoSerializer(many=True, read_only=True)

    class Meta:
        model = models.ProblemInfo
        fields = '__all__'


class ProblemListSerializer(serializers.ModelSerializer):
    mark = LabelProblemListInfoSerializer(many=True, read_only=True)

    class Meta:
        model = models.ProblemInfo
        exclude = ['problemContent', 'solutionCount', 'course']


class CourseProblemListSerializer(serializers.ModelSerializer):
    # problem_set = ProblemInfoSerializer(many=True, read_only=True)
    problemList = ProblemListSerializer(source='problem', many=True, read_only=True)
    class Meta:
        model = models.CourseInfo
        fields = ['id', 'problemList']


# solution list
class SolutionInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SolutionInfo
        fields = '__all__'


class SolutionDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SolutionInfo
        exclude = ['user', 'problem', 'solutionContent']


class ProblemSolutionListSerializer(serializers.ModelSerializer):
    solution_list = SolutionDetailSerializer(source='solution', many=True, read_only=True)
    # mark = LabelInfoSerializer(many=True, read_only=True)

    class Meta:
        model = models.ProblemInfo
        fields = ['id', 'solution_list']
        # fields = '__all__'


class LabelCourseLabelListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.LabelInfo
        fields = ['id', 'labelName']


class CourseLabelListSerializer(serializers.ModelSerializer):
    label = LabelCourseLabelListSerializer(many=True, read_only=True)

    class Meta:
        model = models.CourseInfo
        fields = ['id', 'label']


class ProblemListRelationshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProblemInfo
        fields = ['id', 'problemName', 'isSolved', 'changedAt', 'createdAt']


class LabelProblemListDetailSerializer(serializers.ModelSerializer):
    markProblem = ProblemListRelationshipSerializer(source='labelMark', many=True,read_only=True)

    class Meta:
        model = models.LabelInfo
        fields = ['id', 'markProblem']