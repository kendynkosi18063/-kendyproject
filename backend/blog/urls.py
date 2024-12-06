from django.urls import path
from . import views
print(views)

urlpatterns =[
    path ('',views.home, name = 'home'),
    path ('blog/',views.post,name='post'),
    path ('post/new/',views.post_create, name='post_create'),
    path ('post/<int:pk>/edit/',views.post_update ,name='post_update'),
    path ('post/<int:pk/delete/',views.post_delete, name='post_delete'),
]