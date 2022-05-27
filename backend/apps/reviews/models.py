from django.db import models
from apps.items.models import Item 

# Create your models here.
class Review(models.Model):
    class Meta(object):
        db_table = 'review'

    item = models.ForeignKey(
        Item, on_delete=models.CASCADE, db_index=True
    )

    name = models.CharField(
        'Name' , blank=True, null=False , max_length=20, db_index=True, 
    )

    body = models.TextField(
        'Body', blank=False, null=False, db_index=True, max_length=100
    )
    like_count = models.IntegerField(
        'like count', blank=False, null=False
    )

    created_at = models.DateTimeField(
        'created at', blank=True, auto_now_add= True
    )

    updated_at= models.DateTimeField(
        'updated at', blank=True , auto_now=True
    )

    def __str__(self):
        return self.name
    
