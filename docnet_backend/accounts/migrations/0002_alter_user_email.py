# Generated by Django 4.2 on 2024-06-29 18:56

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("accounts", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="email",
            field=models.EmailField(
                max_length=255,
                unique=True,
                validators=[django.core.validators.EmailValidator()],
            ),
        ),
    ]