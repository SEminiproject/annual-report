from rest_framework import serializers
from .models import Deparment



class DepartmentSerializer_admin(serializers.ModelSerializer):
    
    staff_count = serializers.S
    class Meta:
        model = Deparment
        fields = ['*']
        