from django.contrib import admin
from appointments.models import Appointment
from django.utils.translation import gettext as _


@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ['patient', 'doctor', 'start_datetime', 'status']
    search_fields = ['patient', 'doctor', 'status']
    readonly_fields = ['id', 'date_booked', 'date_modified']

    fieldsets = (
        (
            None,
            {
                'fields': (
                    'id',
                    'patient',
                    'doctor',
                )
            }
        ),
        (
            _('Appointment Details'),
            {
                'fields': (
                    'start_datetime',
                    'end_datetime',
                    'status',
                    'reason_for_visit',
                    'notes',
                )
            }
        ),
        (
            _('Important Dates'),
            {
                'fields': (
                    'date_booked',
                    'date_modified',
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
                    'patient',
                    'doctor',
                    'start_datetime',
                    'end_datetime',
                    'reason_for_visit',
                    'notes'
                )
            }
        ),
    )