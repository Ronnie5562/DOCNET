# Generated by Django 4.2 on 2024-07-07 13:51

from django.db import migrations
import timezone_field.fields


class Migration(migrations.Migration):
    dependencies = [
        ("patient_profiles", "0006_alter_patient_country"),
    ]

    operations = [
        migrations.AddField(
            model_name="patient",
            name="timezone",
            field=timezone_field.fields.TimeZoneField(
                choices_display="WITH_GMT_OFFSET", default="UTC", use_pytz=True
            ),
        ),
    ]
