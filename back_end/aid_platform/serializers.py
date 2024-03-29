from rest_framework import serializers
from aid_platform import models


# user register
class UserRegModelSerializer(serializers.ModelSerializer):
    # loggedAt = serializers.IntegerField(write_only=True)
    class Meta:
        model = models.UserInfo
        fields = ['username', 'password', 'email', 'loggedAt']
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


class UserCourseListPartialSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseInfo
        fields = ['id', 'courseName']


class UserCourseListSerializer(serializers.ModelSerializer):
    study = UserCourseListPartialSerializer(many=True, read_only=True)

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


class ProblemPartialDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProblemInfo
        fields = ['id', 'problemName', 'problemContent']


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
    mark = LabelProblemListInfoSerializer(many=True, read_only=True)

    class Meta:
        model = models.ProblemInfo
        fields = ['id', 'problemName', 'mark', 'isSolved', 'changedAt', 'createdAt']


class LabelProblemListDetailSerializer(serializers.ModelSerializer):
    markProblem = ProblemListRelationshipSerializer(source='labelMark', many=True, read_only=True)

    class Meta:
        model = models.LabelInfo
        fields = ['id', 'markProblem']


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.LikeUser2Solution
        fields = '__all__'


class CollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CollectionUser2Solution
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CommentUser2Solution
        fields = '__all__'


class MarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.MarkProblem2Label
        fields = '__all__'


# GetSolutionsPublishedByUser
class GetSolutionsPublishedByUserSolutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SolutionInfo
        fields = ['id', 'solutionName', 'createdAt', 'changedAt']


class GetProblemLablesByProblemIDSerializer(serializers.ModelSerializer):
    mark = LabelCourseLabelListSerializer(many=True, read_only=True)

    class Meta:
        model = models.ProblemInfo
        fields = ['id', 'mark']


class GetInstructorCourseByIDSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseInfo
        exclude = ['instructor']


class GetUnreviewdSolutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SolutionInfo
        fields = ['id', 'solutionName', 'createdAt']