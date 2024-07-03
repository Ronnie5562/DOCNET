from django.urls import path
from doctor_profiles.views import (
    ProfileListView,
    DetailProfileView,
    ManageProfileView
)


urlpatterns = [
    path("", ProfileListView.as_view(), name="profile-list"),
    path("me/", ManageProfileView.as_view(), name="manage-profile"),
    path("<str:pk>/", DetailProfileView.as_view(), name="profile-detail"),
]
