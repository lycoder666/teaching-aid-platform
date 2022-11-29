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
    authority = models.IntegerField(verbose_name='user authority', default=0)
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
    course_name = models.CharField(max_length=30, verbose_name='course name')
    instructor = models.CharField(max_length=60, verbose_name='course instructor')

    class Meta:
        db_table = "courses"

    def __str__(self):
        return self.course_name


class ProblemInfo(models.Model):
    problem_name = models.CharField(max_length=40, verbose_name="problem name")
    problem_content = models.TextField(verbose_name="problem content")
    solution_count = models.IntegerField(default=0, verbose_name="solution count")
    course = models.ForeignKey(CourseInfo, default=1, on_delete=models.CASCADE, verbose_name='belong course')
    # foreignkey course value default is 0
    mark = models.ManyToManyField(to='LabelInfo', through='MarkProblem2Label',
                                  through_fields=('problem', 'label'), related_name='mark')

    class Meta:
        db_table = "Problem"

    def __str__(self):
        return self.problem_name


class SolutionInfo(models.Model):
    solution_name = models.CharField(max_length=20, verbose_name="solution name")
    solution_content = models.TextField(verbose_name='solution content')
    is_checked = models.BooleanField(default=False, verbose_name='solution is checked or not')
    user = models.ForeignKey(UserInfo, default=1, on_delete=models.CASCADE, verbose_name='publisher id')
    # like = models.IntegerField(default=0, verbose_name='like count')
    problem = models.ForeignKey(ProblemInfo, default=1, on_delete=models.CASCADE, verbose_name='solution belong')

    class Meta:
        db_table = 'solution'

    def __str__(self):
        return self.solution_name


class LabelInfo(models.Model):
    label_name = models.CharField(max_length=8, verbose_name='label name')
    course = models.ForeignKey(CourseInfo, default=1, on_delete=models.CASCADE, verbose_name='label belong')

    class Meta:
        db_table = 'label'


class CommentUser2Solution(models.Model):
    user = models.ForeignKey(to=UserInfo, on_delete=models.CASCADE)
    solution = models.ForeignKey(to=SolutionInfo, on_delete=models.CASCADE)
    comment_content = models.TextField(null=True, verbose_name='comment content')

    class Meta:
        db_table = 'comment'


class CollectionUser2Solution(models.Model):
    user = models.ForeignKey(to=UserInfo, on_delete=models.CASCADE)
    solution = models.ForeignKey(to=SolutionInfo, on_delete=models.CASCADE)

    class Meta:
        db_table = 'collection'


class LikeUser2Solution(models.Model):
    user = models.ForeignKey(to=UserInfo, on_delete=models.CASCADE)
    solution = models.ForeignKey(to=SolutionInfo, on_delete=models.CASCADE)

    class Meta:
        db_table = 'like'


class MarkProblem2Label(models.Model):
    problem = models.ForeignKey(to=ProblemInfo, on_delete=models.CASCADE)
    label = models.ForeignKey(to=LabelInfo, on_delete=models.CASCADE)

    class Meta:
        db_table = 'mark'


class StudyUser2Course(models.Model):
    user = models.ForeignKey(to=UserInfo, on_delete=models.CASCADE)
    course = models.ForeignKey(to=CourseInfo, on_delete=models.CASCADE)

    class Meta:
        db_table = 'study'



