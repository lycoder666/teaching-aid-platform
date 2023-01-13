from django.db import models
import time
from math import ceil

# Create your models here.
# current_time = ceil(time.time()*1000)
# print(current_time)
# print(type(current_time))

class UserInfo(models.Model):
    AUTHORITY_CHOICES = (
        (0, 'admin'),
        (1, 'teacher'),
        (2, 'student')
    )
    username = models.CharField(max_length=16, verbose_name='account')
    password = models.CharField(max_length=16, verbose_name='password')
    realName = models.CharField(max_length=20, null=True, verbose_name='actual name of user')
    email = models.CharField(null=True, max_length=30, verbose_name='email of user')
    mobile = models.CharField(null=True, max_length=11, verbose_name='mobile of user')
    # nustuNo = models.CharField(verbose_name='user_number')
    authority = models.IntegerField(verbose_name='user authority', default=0)
    loggedAt = models.BigIntegerField(default=ceil(time.time()*1000), verbose_name='last login time')
    comment = models.ManyToManyField(to='SolutionInfo', through='CommentUser2Solution',
                                     through_fields=('user', 'solution'), related_name='comment')
    collection = models.ManyToManyField(to='SolutionInfo', through='CollectionUser2Solution',
                                        through_fields=('user', 'solution'), related_name='collection')
    like = models.ManyToManyField(to='SolutionInfo', through='LikeUser2Solution',
                                  through_fields=('user', 'solution'), related_name='like')
    study = models.ManyToManyField(to='CourseInfo', through='StudyUser2Course',
                                   through_fields=('user', 'course'), related_name='study')

    class Meta:
        db_table = "users"

    def __str__(self):
        return self.username


class CourseInfo(models.Model):
    courseName = models.CharField(max_length=30, verbose_name='course name')
    instructor = models.ForeignKey(UserInfo, on_delete=models.CASCADE, related_name='course',  verbose_name='course instructor')

    class Meta:
        db_table = "courses"

    def __str__(self):
        return self.courseName


class ProblemInfo(models.Model):
    problemName = models.CharField(max_length=40, verbose_name="problem name")
    problemContent = models.TextField(verbose_name="problem content")
    solutionCount = models.IntegerField(default=0, verbose_name="solution count")
    course = models.ForeignKey(CourseInfo, default=1, on_delete=models.CASCADE, related_name='problem', verbose_name='belong course')
    # foreignkey course value default is 1
    mark = models.ManyToManyField(to='LabelInfo', through='MarkProblem2Label',
                                  through_fields=('problem', 'label'), related_name='labelMark')
    createdAt = models.BigIntegerField(default=ceil(time.time() * 1000))
    changedAt = models.BigIntegerField(default=ceil(time.time() * 1000))
    isSolved = models.BooleanField(default=False, verbose_name='is solved or not')

    class Meta:
        db_table = "Problem"

    def __str__(self):
        return self.problemName


class SolutionInfo(models.Model):
    solutionName = models.CharField(max_length=20, verbose_name="solution name")
    solutionContent = models.TextField(verbose_name='solution content')
    isChecked = models.BooleanField(default=False, verbose_name='solution is checked or not')
    user = models.ForeignKey(UserInfo, default=1, on_delete=models.CASCADE, verbose_name='publisher id')
    # like = models.IntegerField(default=0, verbose_name='like count')
    problem = models.ForeignKey(ProblemInfo, related_name='solution', default=1, on_delete=models.CASCADE, verbose_name='solution belong')
    createdAt = models.BigIntegerField(default=ceil(time.time() * 1000))
    changedAt = models.BigIntegerField(default=ceil(time.time() * 1000))

    class Meta:
        db_table = 'solution'

    def __str__(self):
        return self.solutionName


class LabelInfo(models.Model):
    labelName = models.CharField(max_length=8, verbose_name='label name')
    course = models.ForeignKey(CourseInfo, related_name='label', default=1, on_delete=models.CASCADE, verbose_name='label belong')

    class Meta:
        db_table = 'label'


class CommentUser2Solution(models.Model):
    user = models.ForeignKey(to=UserInfo, on_delete=models.CASCADE)
    solution = models.ForeignKey(to=SolutionInfo, on_delete=models.CASCADE)
    commentContent = models.TextField(null=True, verbose_name='comment content')
    commentAt = models.BigIntegerField(default=ceil(time.time() * 1000))
    changedAt = models.BigIntegerField(default=ceil(time.time() * 1000))

    class Meta:
        db_table = 'comment'


class CollectionUser2Solution(models.Model):
    user = models.ForeignKey(related_name='userCollect', to=UserInfo, on_delete=models.CASCADE)
    solution = models.ForeignKey(related_name='solutionCollect', to=SolutionInfo, on_delete=models.CASCADE)
    savedAt = models.BigIntegerField(default=ceil(time.time() * 1000))

    class Meta:
        db_table = 'collection'


class LikeUser2Solution(models.Model):
    user = models.ForeignKey(related_name='userLike', to=UserInfo, on_delete=models.CASCADE)
    solution = models.ForeignKey(related_name='solutionLiked', to=SolutionInfo, on_delete=models.CASCADE)
    likedAt = models.BigIntegerField(default=ceil(time.time() * 1000))

    class Meta:
        db_table = 'like'


class MarkProblem2Label(models.Model):
    problem = models.ForeignKey(to=ProblemInfo, on_delete=models.CASCADE)  # related_name='problemMark',
    label = models.ForeignKey(to=LabelInfo, on_delete=models.CASCADE)  # related_name='markProblem',
    course = models.ForeignKey(to=CourseInfo, on_delete=models.CASCADE)

    class Meta:
        db_table = 'mark'


class StudyUser2Course(models.Model):
    user = models.ForeignKey(to=UserInfo, on_delete=models.CASCADE)
    course = models.ForeignKey(to=CourseInfo, on_delete=models.CASCADE)
    # time = models.DateField

    class Meta:
        db_table = 'study'



