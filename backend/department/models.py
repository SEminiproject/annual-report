from django.db import models
from college.models import College
import uuid



class Department(models.Model):
    
    id = models.UUIDField(default=uuid.uuid4,primary_key=True,null=False,blank=False)
    name = models.CharField(max_length=100,blank=False,null=False)
    college_id = models.ForeignKey(College,on_delete=models.CASCADE,related_name='dept_college')
    
    
    def __str__(self):
        return self.name