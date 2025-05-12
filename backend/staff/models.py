from django.db import models
from department.models import Department
from uuid import uuid4


class Staff(models.Model):
    id = models.UUIDField(default = uuid4,primary_key=True,blank=False,null=False)
    department = models.ForeignKey(Department,related_name='staff_member',on_delete=models.CASCADE,blank=False,null=False)


class Designation(models.Model):
    DESIGNATION_CHOICES = [
        ('HOD', 'Head of Department'),
        ('PhD', 'PhD Holder'),
        ('Professor', 'Professor'),
        ('Asst. Professor', 'Assistant Professor'),
    ]
    staff_designation = models.CharField(max_length=100, choices=DESIGNATION_CHOICES)

    def __str__(self):
        return self.get_title_display()
