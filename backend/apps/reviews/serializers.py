from .models import Review
from rest_framework import serializers
from apps.items.models import Item

class ReviewSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Item
        fields = '__all__'
