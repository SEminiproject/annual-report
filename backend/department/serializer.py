from rest_framework import serializers
from .models import Department



class DepartmentSerializer_admin(serializers.ModelSerializer):
    staff_count = serializers.SerializerMethodField()

    class Meta:
        model = Department
        fields = ['id', 'name', 'college', 'staff_count']

    def get_staff_count(self, obj):
        print(obj.staff_member.count())
        return obj.staff_member.count()
