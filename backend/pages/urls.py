from django.urls import path,include


urlpatterns = [
    path('',include('department.urls'),name='dept'),
]
