from django.urls import path
from appointments.views import (
    AppointmentDetailView,
    AppointmentsListCreateView
)


urlpatterns = [
    path(
        '',
        AppointmentsListCreateView.as_view(),
        name='appointments'
    ),
    path(
        '<str:id>', AppointmentDetailView.as_view(),
        name='appointment-details'
    ),
]
