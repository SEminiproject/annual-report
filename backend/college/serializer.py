from rest_framework import serializers
from .models import College
from department.serializer import DepartmentSerializer_admin


class CollegeSerializer(serializers.ModelSerializer):
    dept_college = DepartmentSerializer_admin(many=True,read_only=True)
    class Meta:
        model = College
        fields = ['id','name','dept_college']

