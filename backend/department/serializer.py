from rest_framework import serializers
from .models import Department



class DepartmentSerializer_admin(serializers.ModelSerializer):
    # adding a extra field

    class Meta:
        model = Department
        fields = ['id', 'name', 'college_id']
    



class DepartmentSerializer_add(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['name']