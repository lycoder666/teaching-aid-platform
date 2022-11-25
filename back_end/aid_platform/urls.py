from django.conf.urls import url
from aid_platform import views


urlpatterns = [
    # url(r'', views),
    url(r'^check_username/$', views.CheckUsernameView.as_view()),
    url(r'^regist/$', views.UserRegView.as_view({'post': 'create'})),

]