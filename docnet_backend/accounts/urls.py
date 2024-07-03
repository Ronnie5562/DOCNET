"""
URL mapping for users App APIs.
"""
from django.urls import path
from accounts import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

app_name = 'accounts'

urlpatterns = [
    path('', views.ListCreateUserView.as_view(), name='list-create'),
    path('<int:pk>/', views.DetailUserView.as_view(), name='user'),
    path('profile/', views.ManageProfileView.as_view(), name='profile'),
    path(
        'activate/<uidb64>/<token>/',
        views.ActivateAccountAPIView.as_view(),
        name='activate'
    ),

    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
