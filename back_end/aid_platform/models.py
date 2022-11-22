from django.db import models

# Create your models here.


class AccountInfo(models.Model):
    AUTHORITY_CHOICES = (
        (0, 'admin'),
        (1, 'teacher'),
        (2, 'student')
    )
    user_account = models.CharField(min_length=8, max_length=16, verbose_name='account')
    account_pwd = models.CharField(null=True, verbose_name='password')
    user_name = models.CharField(null=True, verbose_name='user_name')
    user_email = models.CharField(null=True, verbose_name='user_email')
    user_mobile = models.CharField(null=True, verbose_name='user_mobile')
    # nustuNo = models.CharField(verbose_name='user_number')
    user_authority = models.IntegerField(verbose_name='user_authority')

