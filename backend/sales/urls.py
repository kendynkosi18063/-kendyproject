from django.urls import path
from . import views
print(views)

urlpatterns =[
    
    path ('sales/',views.products,name='product')
]