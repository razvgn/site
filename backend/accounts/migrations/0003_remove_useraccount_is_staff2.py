# Generated by Django 5.0 on 2023-12-21 10:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_useraccount_is_staff2'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='useraccount',
            name='is_staff2',
        ),
    ]
