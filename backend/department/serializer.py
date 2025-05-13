from rest_framework import serializers
from .models import Department



class DepartmentSerializer_admin(serializers.ModelSerializer):
    # adding a extra field
    staff_count = serializers.SerializerMethodField()

    class Meta:
        model = Department
        fields = ['id', 'name', 'college_id', 'staff_count']
    
    # any method with get_starting is looked for 
    def get_staff_count(self, obj):
        return obj.staff_member.count()


class DepartmentSerializer_add(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['name']