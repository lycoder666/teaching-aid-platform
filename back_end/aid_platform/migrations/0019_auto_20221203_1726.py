# Generated by Django 2.2 on 2022-12-03 09:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aid_platform', '0018_auto_20221203_1633'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userinfo',
            old_name='act_name',
            new_name='realName',
        ),
        migrations.RenameField(
            model_name='userinfo',
            old_name='username',
            new_name='userName',
        ),
        migrations.RemoveField(
            model_name='userinfo',
            name='last_login',
        ),
        migrations.AddField(
            model_name='userinfo',
            name='loggedAt',
            field=models.BigIntegerField(default=1670059562061, verbose_name='last login time'),
        ),
    ]
