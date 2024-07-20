from rest_framework import permissions, generics
from medical_records.models import MedicalRecord
from medical_records.serializers import MedicalRecordSerializer
from utils.permissions import IsUserInvolvedOrAdmin


class ALLMedicaRecordListView(generics.ListAPIView):
    queryset = MedicalRecord.objects.all()
    serializer_class = MedicalRecordSerializer
    permission_classes = [permissions.IsAdminUser]


class UserMedicalRecordListView(
        ALLMedicaRecordListView, generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.role == 'doctor':
            return self.queryset.filter(
                doctor__user=self.request.user)
        else:
            return self.queryset.filter(
                patient__user=self.request.user)


class MedicalRecordDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MedicalRecord.objects.all()
    serializer_class = MedicalRecordSerializer
    permission_classes = [permissions.IsAuthenticated, IsUserInvolvedOrAdmin]
    lookup_field = 'id'
