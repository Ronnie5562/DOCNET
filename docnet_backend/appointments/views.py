from appointments.models import Appointment
from rest_framework import generics, permissions
from utils.permissions import IsUserInvolvedOrAdmin
from appointments.serializers import AppointmentSerializer


class AppointmentsListCreateView(generics.ListCreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [permissions.IsAuthenticated]


class AppointmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [permissions.IsAuthenticated, IsUserInvolvedOrAdmin]
