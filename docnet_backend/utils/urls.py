from django.urls import path
from .views import (
    TimezoneListView,
    CountryListView
)

urlpatterns = [
    path('timezones/', TimezoneListView.as_view(), name='timezone-list'),
    path('countries/', CountryListView.as_view(), name='country-list'),
]
