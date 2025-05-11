from rest_framework import generics
from .models import Deparment
from .serializer import *


# view for getting all the departments
class AllDeprtment(generics.ListAPIView):
    pass

# view to add a department
class AddDepartment(generics.CreateAPIView):
    pass 


# view for editing a department
class EditDepartment(generics.UpdateAPIView):
    pass

# view for deleting a department
class DeleteDepartment(generics.DestroyAPIView):
    pass