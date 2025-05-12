from django.urls import path,include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,   # Login (Token obtain)
    TokenRefreshView       # Refresh token
)


urlpatterns = [
    path('',include('department.urls'),name='dept'),
    path('college/',include('college.urls'),name='collegeurls'),
     # Token obtain and refresh URLs
    path('user/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Get access & refresh tokens
    path('user/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Refresh access token

]
