from django.contrib import admin
from django.utils.translation import gettext as _
from prescriptions.models import Medication, Prescription


@admin.register(Medication)
class MedicationAdmin(admin.ModelAdmin):
    list_display = ('name', 'manufacturer', 'milligrams')
    search_fields = ('name', 'manufacturer')
    list_filter = ('manufacturer', 'milligrams')
    readonly_fields = ('id', 'added_at', 'modified_at')

    fieldsets = (
        (
            None,
            {
                'fields': ('id', 'name', 'manufacturer', 'milligrams')
            }
        ),
        (
            _('Medication Details'),
            {
                'fields': ('precautions', 'description')
            }
        ),
        (
            _('Important Dates'),
            {
                'fields': ('added_at', 'modified_at')
            }
        )
    )

    add_fieldsets = (
        (
            None,
            {
                'fields': ('name', 'manufacturer', 'milligrams')
            }
        ),
        (
            _('Medication Details'),
            {
                'fields': ('precautions', 'description')
            }
        )
    )


@admin.register(Prescription)
class PrescriptionAdmin(admin.ModelAdmin):
    list_display = ('appointment', 'issued_date', 'modified_date')
    search_fields = (
        'appointment__patient__user__email',
        'appointment__doctor__user__email'
    )
    list_filter = ('issued_date', 'modified_date')
    readonly_fields = ('id', 'issued_date', 'modified_date')

    fieldsets = (
        (
            None,
            {
                'fields': ('id', 'appointment')
            }
        ),
        (
            _('Prescription Details'),
            {
                'fields': ('prescription', 'medications', 'instructions')
            }
        ),
        (
            _('Important Dates'),
            {
                'fields': ('issued_date', 'modified_date')
            }
        )
    )

    add_fieldsets = (
        (
            None,
            {
                'fields': (
                    'appointment',
                    'prescription',
                    'medications',
                    'instructions'
                )
            }
        )
    )
