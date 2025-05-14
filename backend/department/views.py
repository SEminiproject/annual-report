from rest_framework import generics
from .models import Department
from .serializer import *
from rest_framework import serializers
from django.shortcuts import get_object_or_404
from college.models import College


# view for getting all the departments
class AllDeprtment(generics.ListAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer_admin


# view to add a department
class AddDepartment(generics.CreateAPIView):
    queryset = Department
    serializer_class = DepartmentSerializer_add
    def perform_create(self,serializer):
        college_id  = self.kwargs.get('college_id')
        college = get_object_or_404(College,id= college_id)
        serializer.save(college_id = college)

# view for editing a department
class EditDepartment(generics.UpdateAPIView):
    pass


class DetailDepartment(generics.RetrieveAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer_add
    lookup_field = 'id'
    