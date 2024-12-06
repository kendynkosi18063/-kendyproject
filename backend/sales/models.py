from django.db import models

# Create your models here.
class product(models.Model):
    ProductName= models.CharField(max_length=200)
    Description= models.TextField()
    Price=models.DecimalField(max_digits=65, decimal_places=2)
    Stocklevel=models.IntegerField()
    Category=models.TextField()
    
    def __str__ (self):
        return self.ProductName
    

