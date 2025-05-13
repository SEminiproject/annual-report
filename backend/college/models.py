from django.db import models
from uuid import uuid4

class College(models.Model):
    id = models.UUIDField(default=uuid4,primary_key=True,blank=False,null=False)
    name = models.CharField(max_length=200,blank=False,null=False)
    
    def __str__(self):
        return self.name