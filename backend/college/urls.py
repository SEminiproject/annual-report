from django.urls import path
from .views import *

urlpatterns = [
    # display all colleges
    path('',AllCollege.as_view(),name='allcollegeview'),
    # path('add/',AddCollege.as_view(),name='addcollegeview'),
    # path('edit/',EditCollege.as_view(),name = 'editcollegeview'),
    # path('delete/',DeleteCollege.as_view(),name = 'deletecollegeview'),
]
