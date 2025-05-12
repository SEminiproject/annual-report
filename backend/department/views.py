from rest_framework import generics
from .models import Department
from .serializer import *


# view for getting all the departments
class AllDeprtment(generics.ListAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer_admin

# view to add a department
class AddDepartment(generics.CreateAPIView):
    pass 


# view for editing a department
class EditDepartment(generics.UpdateAPIView):
    pass

# view for deleting a department
class DeleteDepartment(generics.DestroyAPIView):
    pass