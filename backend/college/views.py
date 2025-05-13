from rest_framework import generics
from rest_framework.permissions import IsAdminUser,IsAuthenticated
from .models import College
from .serializer import CollegeSerializer

class AllCollege(generics.ListAPIView):
    queryset = College.objects.all()
    # permission_classes = [IsAdminUser]
    
    serializer_class = CollegeSerializer
