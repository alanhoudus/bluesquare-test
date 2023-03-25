from django.urls import path
from users.views.register import register
from users.views.csrf import get_csrf
from users.views.login import login
from users.views.get_user import get_user

app_name = "users"

urlpatterns = [
    path('register/', register, name='register'),
    path('csrf/', get_csrf, name='csrf'),
    path('login/', login, name='login'),
    path('get/', get_user, name='get-user')
]
