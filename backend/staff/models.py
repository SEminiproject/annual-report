from django.db import models

class Staff(models.Model):
    pass 


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
