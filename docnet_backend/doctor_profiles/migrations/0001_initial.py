# Generated by Django 4.2 on 2024-06-27 14:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import phonenumber_field.modelfields
import uuid


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Doctor",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("first_name", models.CharField(blank=True, max_length=50, null=True)),
                ("last_name", models.CharField(blank=True, max_length=50, null=True)),
                ("bio", models.TextField(blank=True, null=True)),
                ("date_of_birth", models.DateField(blank=True, null=True)),
                (
                    "gender",
                    models.CharField(
                        blank=True,
                        choices=[
                            ("male", "Male"),
                            ("female", "Female"),
                            ("non_binary", "Non Binary"),
                            ("nil", "Prefer not to say"),
                        ],
                        max_length=20,
                        null=True,
                    ),
                ),
                ("address", models.CharField(blank=True, max_length=255, null=True)),
                ("zip_code", models.CharField(blank=True, max_length=10, null=True)),
                ("city", models.CharField(blank=True, max_length=50, null=True)),
                ("country", models.CharField(blank=True, max_length=50, null=True)),
                (
                    "phone_number",
                    phonenumber_field.modelfields.PhoneNumberField(
                        blank=True, max_length=128, region=None
                    ),
                ),
                (
                    "picture",
                    models.ImageField(blank=True, null=True, upload_to="profile_pics/"),
                ),
                ("languages", models.JSONField(blank=True, default=list, null=True)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                ("specialty", models.CharField(blank=True, max_length=255, null=True)),
                (
                    "license_number",
                    models.CharField(blank=True, max_length=255, null=True),
                ),
                (
                    "years_of_experience",
                    models.PositiveIntegerField(blank=True, null=True),
                ),
                ("education", models.TextField(blank=True, null=True)),
                ("certifications", models.TextField(blank=True, null=True)),
                ("awards", models.TextField(blank=True, null=True)),
                ("professional_statement", models.TextField(blank=True, null=True)),
                (
                    "user",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "verbose_name": "Doctor",
                "verbose_name_plural": "Doctors",
            },
        ),
    ]
