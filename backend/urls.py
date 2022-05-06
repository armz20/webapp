"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import path, include
from django.views.generic import TemplateView
from django.contrib.auth import views as auth_views
from django import urls
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.urls.conf import include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name = 'index.html')),
    path('admin/', admin.site.urls),
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/registration', include('dj_rest_auth.registration.urls')),
    path('reset_password/',
     auth_views.PasswordResetView.as_view(template_name = 'password_reset.html'),
     name="reset_password"), 
    path('reset_password_sent/', auth_views.PasswordResetDoneView.as_view(template_name = 'password_reset_sent.html'), name="password_reset_done"),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name = 'password_reset_form.html'), name="password_reset_confirm"),
    path('reset_password_complete/', auth_views.PasswordResetCompleteView.as_view(template_name = 'password_reset_done.html'), name="password_reset_complete"),
    path('update_user/',
     TemplateView.as_view(template_name = 'updateuser.html'),
     name="update_user"),
]
urlpatterns += [ re_path(r'^(?:.*)/?$', TemplateView.as_view(template_name="index.html")) ]