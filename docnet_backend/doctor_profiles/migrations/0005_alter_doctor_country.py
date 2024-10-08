# Generated by Django 4.2 on 2024-07-06 19:52

from django.db import migrations
import django_countries.fields


class Migration(migrations.Migration):
    dependencies = [
        ("doctor_profiles", "0004_rename_specialty_doctor_speciality_document"),
    ]

    operations = [
        migrations.AlterField(
            model_name="doctor",
            name="country",
            field=django_countries.fields.CountryField(
                blank=True, max_length=2, null=True
            ),
        ),
    ]
