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

