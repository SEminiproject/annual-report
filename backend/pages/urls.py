from django.urls import path,include
from .views import CustomUserView

urlpatterns = [
    path('department/',include('department.urls'),name='dept'),
    path('college/',include('college.urls'),name='collegeurls'),
    path('user/',include('user.urls'),name="user"),
    path('dashboard/',CustomUserView.as_view(),name="dashboard"),
]
