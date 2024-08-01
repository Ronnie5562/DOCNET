import logging
from appointments.models import Appointment
from rest_framework import generics, permissions
from utils.permissions import IsUserInvolvedOrAdmin
from appointments.serializers import AppointmentSerializer
from datetime import timedelta


logger = logging.getLogger(__name__)


class AppointmentsListCreateView(generics.ListCreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        patient = self.request.user.profile
        start_datetime = serializer.validated_data.get("start_datetime")
        end_datetime = start_datetime + timedelta(minutes=30)

        serializer.save(patient=patient, end_datetime=end_datetime)


class AppointmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [permissions.IsAuthenticated, IsUserInvolvedOrAdmin]
