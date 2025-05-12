from django.urls import path
from .views import *


urlpatterns = [
    
    path('',AllDeprtment.as_view(),name="all_dept"),
]
