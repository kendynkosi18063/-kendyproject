from django.shortcuts import render, get_object_or_404,redirect
from django.http import HttpResponse
from django.contrib import messages
from.models import Post 
from.forms import postform
# Create your views here.
# def Post_list(request):
#      posts=Post.objects.all().ordered_by('created_date')
#      return render(request,'blog/post_list.html',{'posts':posts})

def home(request):
     return render(request,'blog/index.html')
 
def post(request):
      posts =Post.objects.all()
      context = {
          'posts': posts
     }
      return render(request,'blog/post_list.html',context)

def post_create(request):
         if request.method =='POST':
            form= postform(request.POST)
            if form.is_valid():
                  post = form.save(commit=False)
                  post.author = request.user

                  post.save()
                  messages.success(request,'Post created successfully')
                  return redirect ('post_detail',pk=post.pk)
            else:                                                                                                                                                                                                                                                         
              form =postform()
            return render(request,'blog/post_form.html',{'form':form})

def post_update(request,pk):
      post=get_object_or_404(Post,pk=pk)
      if request.method=='POST':
         form = postform(request .POST, instance=post)
      if form.is_valid():
                  post =form.save(commit=False)
                  post.author =request.user
                  post.save()
                  messages.success(request,'Post updated successfully!')
                  return redirect ('post_detail',pk=post.pk)
      else:
            form =postform(instance=post)
      return render (request,'blog/post_form.html',{'form':form})   

def post_delete(request,pk):
    post = get_object_or_404(Post,pk=pk)
    if request.method =='POST':
          post.delete()
          messages.success(request,'Post deleted succesfully! ')
          return  redirect('post_list')
    return render(request,'blog/post_confirm_delete.html',{'post':post})