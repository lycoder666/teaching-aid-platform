# Generated by Django 2.2 on 2022-11-29 10:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('aid_platform', '0004_auto_20221129_1722'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='collectionuser2solution',
            table='collection',
        ),
        migrations.AlterModelTable(
            name='commentuser2solution',
            table='comment',
        ),
        migrations.AlterModelTable(
            name='labelinfo',
            table='label',
        ),
        migrations.AlterModelTable(
            name='likeuser2solution',
            table='like',
        ),
        migrations.AlterModelTable(
            name='markproblem2label',
            table='mark',
        ),
    ]
