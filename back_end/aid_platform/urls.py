from django.conf.urls import url
from aid_platform import views


urlpatterns = [
    # url(r'', views),
    url('api/init/', views.InitView.as_view()),
    url(r'^api/check_username/$', views.CheckUsernameView.as_view({'get':'list'})),
    url(r'^api/regist/$', views.UserRegView.as_view({'post': 'create'})),
    url(r'^api/login/$', views.UserLoginView.as_view()),


]