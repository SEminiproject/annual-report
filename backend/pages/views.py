from rest_framework_simplejwt.views import (
    TokenObtainPairView,  # For login, token creation
    TokenRefreshView      # For refreshing the token
)
from rest_framework import generics,status
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from rest_framework.permissions import AllowAny
from staff.models import Staff
from student.models import Student
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.hashers import check_password




class Login(APIView):
    def post(self,request):
        email = request.data.get("email")
        password = request.data.get("pssword")
        user = None
        user_type = None
        try:
            user = Staff.objects.get(staff_email=email)
            user_type = 'staff'
        except Staff.DoesNotExist:
            try:
                user = Student.objects.get(student_email=email)
                user_type = 'student'
            except Student.DoesNotExist:
                return Response({"detail": "Invalid email or password."}, status=status.HTTP_401_UNAUTHORIZED)
        if not check_password(password, user.password):
            return Response({"detail": "Invalid email or password."}, status=status.HTTP_401_UNAUTHORIZED)
        request.session['user_type'] = user_type
        request.session['user_id'] = str(user.pk)

        return Response({"message": f"Logged in as {user_type}", "user_id": str(user.pk)}, status=200)