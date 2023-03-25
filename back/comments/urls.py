from django.urls import path

from comments.views.new import new_comment
from comments.views.get_all_comments import get_all_comments


app_name = "comments"

urlpatterns = [
    path('new/', new_comment, name='new-comment'),
    path('all/', get_all_comments, name='get-all-comments')
]
