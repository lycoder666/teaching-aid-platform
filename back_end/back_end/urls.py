"""back_end URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
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
from django.conf.urls import url, include
# from rest_framework_swagger import
from rest_framework.documentation import include_docs_urls
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework.documentation import include_docs_urls
schema_view = get_schema_view(
    openapi.Info(
        title="接口文档平台",  # 必传
        default_version="v1",  # 必传
        description="文档描述",
        terms_of_service="",
        contact=openapi.Contact(email="mhhcode@mhhcode.com"),
        license=openapi.License(name="BSD LICENSE")
    ),
    public=True,
    # permission_classes=(permissions.)  # 权限类
)
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('aid_platform.urls')),
    url(r'^docs/', include_docs_urls(title='aid platform API')),
    path("swagger/", schema_view.with_ui("swagger", cache_timeout=0), name="schema-swagger"),
    path("redoc/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),
]
