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
    title = models.CharField(max_length=50, choices=DESIGNATION_CHOICES, unique=True)

    def __str__(self):
        return self.get_title_display()
