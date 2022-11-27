from django.db import models

# Create your models here.


class UserInfo(models.Model):
    AUTHORITY_CHOICES = (
        (0, 'admin'),
        (1, 'teacher'),
        (2, 'student')
    )
    username = models.CharField(max_length=16, verbose_name='account')
    password = models.CharField(max_length=16, verbose_name='password')
    act_name = models.CharField(max_length=20, null=True, verbose_name='actual name of user')
    email = models.CharField(null=True, max_length=30, verbose_name='email of user')
    mobile = models.CharField(null=True, max_length=11, verbose_name='mobile of user')
    # nustuNo = models.CharField(verbose_name='user_number')
    authority = models.IntegerField(verbose_name='user authority',default=0)

    class Meta:
        db_table = "users"


class CourseInfo(models.Model):
    course_name = models.CharField(max_length=30, verbose_name='course name')
    instructor = models.CharField(max_length=60, verbose_name='course instructor')

    class Meta:
        db_table = "courses"


class ProblemInfo(models.Model):
    problem_name = models.CharField(max_length=40, verbose_name="problem name")
    problem_content = models.TextField(verbose_name="problem content")
    solution_count = models.IntegerField(default=0, verbose_name="solution count")

    class Meta:
        db_table = "Problem"


class SolutionInfo(models.Model):
    solution_name = models.CharField(max_length=20,verbose_name="solution name")
    solution_content = models.TextField(verbose_name='solution content')
    like = models.IntegerField(default=0, verbose_name='like count')

    class Meta:
        db_table = 'solution'
