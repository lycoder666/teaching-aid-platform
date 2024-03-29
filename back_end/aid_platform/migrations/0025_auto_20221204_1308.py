# Generated by Django 2.2 on 2022-12-04 05:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aid_platform', '0024_auto_20221204_1301'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userinfo',
            old_name='userName',
            new_name='username',
        ),
        migrations.AlterField(
            model_name='collectionuser2solution',
            name='savedAt',
            field=models.BigIntegerField(default=1670130516647),
        ),
        migrations.AlterField(
            model_name='commentuser2solution',
            name='changedAt',
            field=models.BigIntegerField(default=1670130516647),
        ),
        migrations.AlterField(
            model_name='commentuser2solution',
            name='commentAt',
            field=models.BigIntegerField(default=1670130516647),
        ),
        migrations.AlterField(
            model_name='likeuser2solution',
            name='likedAt',
            field=models.BigIntegerField(default=1670130516648),
        ),
        migrations.AlterField(
            model_name='probleminfo',
            name='changedAt',
            field=models.BigIntegerField(default=1670130516646),
        ),
        migrations.AlterField(
            model_name='probleminfo',
            name='createdAt',
            field=models.BigIntegerField(default=1670130516646),
        ),
        migrations.AlterField(
            model_name='solutioninfo',
            name='changedAt',
            field=models.BigIntegerField(default=1670130516646),
        ),
        migrations.AlterField(
            model_name='solutioninfo',
            name='createdAt',
            field=models.BigIntegerField(default=1670130516646),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='loggedAt',
            field=models.BigIntegerField(default=1670130516644, verbose_name='last login time'),
        ),
    ]
