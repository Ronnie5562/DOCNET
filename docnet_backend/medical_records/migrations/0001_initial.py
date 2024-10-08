# Generated by Django 4.2 on 2024-06-27 14:42

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("appointments", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="MedicalRecord",
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
                ("diagnosis", models.TextField()),
                ("symptoms", models.TextField()),
                ("treatment", models.TextField()),
                ("notes", models.TextField()),
                ("issued_date", models.DateTimeField(auto_now_add=True)),
                ("modified_date", models.DateTimeField(auto_now=True)),
                (
                    "appointment",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="appointments.appointment",
                    ),
                ),
            ],
        ),
    ]
