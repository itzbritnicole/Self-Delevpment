from django.shortcuts import render
from .models import Cart
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import generics, filters
from rest_framework.response import Response
from apps.cart.serializers import CartSerializer, CartAddSerializer

class CartList(generics.ListAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    filter_backends=[DjangoFilterBackend]
    filterset_fields =['user_id']

class CartAdd(generics.CreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartAddSerializer

class CartDelete(generics.DestroyAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    def delete(self, request, *args, **kwargs):
        cart=Cart.objects.get(pk=self.kwargs['pk'])
        return self.destroy(request, *args, **kwargs)

class CartUpdate(generics.UpdateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    def update(self, request, *args, **kwargs):
        cart = Cart.objects.get(pk=self.kwargs['pk'])
        cart.quantity = request.data['quantity']
        cart.save()
        serializer = CartSerializer([cart], many=True)
        return Response(serializer.data[0])










