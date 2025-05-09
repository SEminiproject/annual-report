from django.db import models
from ..college.models import College
from ..staff.models import Staff
import uuid



class Deparment(models.Model):
    
    id = models.UUIDField(default=uuid.uuid4,primary_key=True,null=False,blank=False)
    name = models.CharField(max_length=100,null=False,null=False)
    college = models.ForeignKey(College,on_delete=models.CASCADE,related_name='dept_college')
    hod = models.ForeignKey(Staff,blank=True,null=True)
    