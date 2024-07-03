from django.contrib import admin
from django.utils.translation import gettext as _
from doctor_profiles.models import Doctor


@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ['user', 'first_name', 'last_name', 'speciality',
                    'years_of_experience', 'license_number']
    search_fields = ['first_name', 'last_name',
                     'speciality', 'years_of_experience',]
    readonly_fields = ['id', 'user', 'created_at', 'updated_at']

    fieldsets = (
        (
            None,
            {
                'fields': (
                    'id',
                    'user',
                )
            }
        ),
        (
            _('Personal Information'),
            {
                'fields': (
                    'first_name',
                    'last_name',
                    'bio',
                    'gender',
                    'address',
                    'zip_code',
                    'city',
                    'country',
                    'phone_number',
                    'picture',
                    'languages',
                )
            }
        ),
        (
            _('Professional Information'),
            {
                'fields': (
                    'speciality',
                    'years_of_experience',
                    'license_number',
                    'education',
                    'certifications',
                    'awards',
                    'professional_statement',
                )
            }
        ),
        (
            _('Important Dates'),
            {
                'fields': (
                    'created_at',
                    'updated_at',
                )
            }
        )
    )

    add_fieldsets = (
        (
            None,
            {
                'classes': ('wide',),
                'fields': (
                    'id',
                    'user',
                )
            }
        ),
        (
            _('Personal Information'),
            {
                'classes': ('wide',),
                'fields': (
                    'first_name',
                    'last_name',
                    'bio',
                    'gender',
                    'address',
                    'zip_code',
                    'city',
                    'country',
                    'phone_number',
                    'picture',
                    'languages',
                )
            }
        ),
        (
            _('Professional Information'),
            {
                'classes': ('wide',),
                'fields': (
                    'speciality',
                    'years_of_experience',
                    'license_number',
                    'education',
                    'certifications',
                    'awards',
                    'professional_statement',
                )
            }
        ),
    )
