from.models import Post

class postform(forms.ModelForm):
    
    class Meta:
        model = Post
        fields = '__al__'
