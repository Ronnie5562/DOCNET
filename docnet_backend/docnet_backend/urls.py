from django.contrib import admin
from django.urls import path, include


from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include('rest_framework.urls')),
    path("api/users/", include("accounts.urls")),
    path("api/utils/", include("utils.urls")),
    path("api/doctors/", include("doctor_profiles.urls")),
    path("api/patients/", include("patient_profiles.urls")),
    path("api/appointments/", include("appointments.urls")),
    path("api/medical_records/", include("medical_records.urls")),
    path(
        "api/docs/schema/",
        SpectacularAPIView.as_view(),
        name="api-schema"
    ),
    path(
        "api/docs/swagger/",
        SpectacularSwaggerView.as_view(url_name="api-schema"),
        name="api-docs"
    ),
    path(
        "api/docs/redoc/",
        SpectacularRedocView.as_view(url_name="api-schema"),
        name="api-docs"
    )
]
