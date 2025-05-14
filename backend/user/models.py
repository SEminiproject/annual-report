from django.db import models
from django.contrib.auth.models import AbstractUser
from college.models import College
from department.models import Department
from uuid import uuid4



class CustomUser(AbstractUser):
    Choices = {
        "STAFF":"STAFF",
        "STUDENT":"STUDENT",
        "ADMIN":"ADMIN",
    }
    id = models.UUIDField(default=uuid4,primary_key=True)
    type = models.CharField(choices=Choices,null=True,blank=True)
    colled_id = models.ForeignKey(College,on_delete=models.CASCADE,null=True,blank=True)
    department_id = models.ForeignKey(Department,on_delete=models.CASCADE,blank=True,null=True)
    
    def __str__(self):
        return self.username