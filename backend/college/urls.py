from django.urls import path
from .views import *

urlpatterns = [
    # display all colleges
    path('',AllCollege.as_view(),name='allcollegeview'),
    
]
