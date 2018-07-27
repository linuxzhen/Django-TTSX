# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-07-27 08:37
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AdminUserModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=32, unique=True, verbose_name='用户名')),
                ('password', models.CharField(max_length=256, verbose_name='密码')),
            ],
            options={
                'db_table': 'admin_users',
            },
        ),
        migrations.CreateModel(
            name='UserTicketModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ticket', models.CharField(max_length=256)),
                ('out_time', models.DateTimeField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ttsxAdmin.AdminUserModel')),
            ],
            options={
                'db_table': 'admin_users_ticket',
            },
        ),
    ]
