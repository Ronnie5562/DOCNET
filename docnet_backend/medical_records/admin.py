from django.contrib import admin
from django.utils.translation import gettext as _
from medical_records.models import MedicalRecord


@admin.register(MedicalRecord)
class MedicalRecordAdmin(admin.ModelAdmin):
    list_display = ['id', 'appointment',]
    search_fields = [
        'appointment', 'diagnosis', 'symptoms', 'treatment', 'notes']
    readonly_fields = ['id', 'issued_date', 'modified_date']

    fieldsets = (
        (
            None, {
                'fields': (
                    'id',
                    'appointment',
                )
            }
        ),
        (
            _('Medical Record Details'), {
                'fields': (
                    'diagnosis',
                    'symptoms',
                    'treatment',
                    'notes',
                )
            }
        ),
        (
            _('Important Dates'), {
                'fields': (
                    'issued_date',
                    'modified_date',
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
                    'appointment',
                    'diagnosis',
                    'symptoms',
                    'treatment',
                    'notes'
                )
            }
        )
    )
