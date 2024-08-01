from django.urls import path
from doctor_profiles.views import (
    DoctorsListView,
    DoctorCardView,
    DetailProfileView,
    ManageProfileView
)


urlpatterns = [
    path("", DoctorsListView.as_view(), name="doctors-list"),
    path("<str:pk>/", DoctorCardView.as_view(), name="doctor-detail"),
    path("me/profile/", ManageProfileView.as_view(), name="manage-profile"),
    path(
        "profile/<str:pk>/",
        DetailProfileView.as_view(), name="profile-detail"
    ),
]
