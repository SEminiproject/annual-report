from rest_framework_simplejwt.views import (
    TokenObtainPairView,  # For login, token creation
    TokenRefreshView      # For refreshing the token
)
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from rest_framework.permissions import AllowAny


