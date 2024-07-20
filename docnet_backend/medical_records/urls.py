from django.urls import path
from medical_records.views import (
    ALLMedicaRecordListView,
    UserMedicalRecordListView,
    MedicalRecordDetailView
)


urlpatterns = [
    path(
        "",
        ALLMedicaRecordListView.as_view(),
        name="all-medical-records"
    ),
    path(
        "me/",
        UserMedicalRecordListView.as_view(),
        name="user-medical-records"
    ),
    path(
        "<uuid:id>/",
        MedicalRecordDetailView.as_view(),
        name="medical-record-detail"
    )
]
