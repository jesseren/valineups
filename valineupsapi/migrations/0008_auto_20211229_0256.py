# Generated by Django 3.1.6 on 2021-12-29 02:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('valineupsapi', '0007_auto_20211229_0254'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lineup',
            name='agentX',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='lineup',
            name='agentY',
            field=models.FloatField(default=0),
        ),
    ]
