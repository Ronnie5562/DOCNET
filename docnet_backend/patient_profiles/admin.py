from django.contrib import admin
from django.utils.translation import gettext as _
from patient_profiles.models import Patient, Document


@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = ['user']
    search_fields = ['user']
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
                    'bio',
                    'gender',
                    'address',
                    'zip_code',
                    'city',
                    'country',
                    'languages',
                )
            }
        ),
        (
            _('Medical Information'),
            {
                'fields': (
                    'medical_history',
                    'allergies',
                    'current_medications',
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
                    'bio',
                    'gender',
                    'address',
                    'zip_code',
                    'city',
                    'country',
                    'languages',
                )
            }
        ),
        (
            _('Medical Information'),
            {
                'classes': ('wide',),
                'fields': (
                    'medical_history',
                    'allergies',
                    'current_medications',
                )
            }
        ),
    )


@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    list_display = ['caption', 'profile']
    search_fields = ['caption', 'profile']
    readonly_fields = ['uploaded_at', 'modified_at']
    fieldsets = (
        (
            None,
            {
                'fields': (
                    'caption',
                    'file',
                    'profile',
                )
            }
        ),
        (
            _('Important Dates'),
            {
                'fields': (
                    'uploaded_at',
                    'modified_at',
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
                    'caption',
                    'file',
                    'profile',
                )
            }
        ),
    )
