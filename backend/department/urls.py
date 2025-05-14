from django.urls import path
from .views import AllDeprtment, AddDepartment, EditDepartment, DetailDepartment

urlpatterns = [
    path('', AllDeprtment.as_view(), name='all_departments'),
    path('add/<uuid:college_id>/', AddDepartment.as_view(), name='add_department'),
    path('detail/<uuid:id>/', DetailDepartment.as_view(), name='detail_department'),
    path('edit/<uuid:id>/', EditDepartment.as_view(), name='edit_department'),
]
