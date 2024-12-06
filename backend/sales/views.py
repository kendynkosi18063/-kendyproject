from django.shortcuts import render,get_object_or_404
from.models import product
# Create your views here.
def products(request):
      products=product.objects.all()
      context = {
          'products': products
     }
      return render(request,'sales/product_list.html',context)