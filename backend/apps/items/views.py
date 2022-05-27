from rest_framework import generics, filters
from .serializers import ItemSerializer
from django.http import JsonResponse
from .models import Item
from django_filters.rest_framework import DjangoFilterBackend


class ItemList(generics.ListAPIView):
    # Get all posts, limit = 20
    queryset = Item.objects.order_by(
        'created_at').reverse().filter(status='active')
    serializer_class = ItemSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['category']
    search_fields = ['name']
