# Generated by Django 3.1.6 on 2021-11-02 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('valineupsapi', '0003_auto_20210513_0326'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lineup',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
