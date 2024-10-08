# Generated by Django 4.2 on 2024-07-10 00:24

import cloudinary.models
from django.db import migrations, models
import phonenumber_field.modelfields
import timezone_field.fields


class Migration(migrations.Migration):
    dependencies = [
        ("accounts", "0002_alter_user_email"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="first_name",
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name="user",
            name="last_name",
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name="user",
            name="phone_number",
            field=phonenumber_field.modelfields.PhoneNumberField(
                blank=True, max_length=128, region=None
            ),
        ),
        migrations.AddField(
            model_name="user",
            name="picture",
            field=cloudinary.models.CloudinaryField(
                blank=True, max_length=255, null=True, verbose_name="image"
            ),
        ),
        migrations.AddField(
            model_name="user",
            name="timezone",
            field=timezone_field.fields.TimeZoneField(
                choices_display="WITH_GMT_OFFSET", default="UTC", use_pytz=True
            ),
        ),
    ]
