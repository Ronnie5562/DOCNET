"""
URL mapping for users App APIs.
"""
from django.urls import path
from accounts import views
from rest_framework_simplejwt.views import (
    TokenVerifyView,
)

app_name = 'accounts'

urlpatterns = [
    path('', views.ListCreateUserView.as_view(), name='list-create'),
    path('<uuid:id>/', views.DetailUserView.as_view(), name='user'),
    path('me/', views.ManageProfileView.as_view(), name='account'),
    path(
        'activate/<str:uidb64>/<str:token>/',
        views.ActivateAccountAPIView.as_view(),
        name='activate'
    ),

    path('token/', views.JWTCookieTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('token/refresh/', views.JWTCookieTokenRefreshView.as_view(),
         name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('logout/', views.LogOutAPIView.as_view(), name='token_verify'),
]
