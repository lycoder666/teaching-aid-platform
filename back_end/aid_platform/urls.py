from django.conf.urls import url
from aid_platform import views


urlpatterns = [
    # url(r'', views),
    url('api/init/', views.InitView.as_view()),
    url(r'^api/check_username/$', views.CheckUsernameView.as_view({'get':'list'})),
    # url(r'^api/regist/$', views.UserRegView.as_view({'post': 'create'})),
    url(r'^api/regist/$', views.UserRegView.as_view()),
    url(r'^api/login/$', views.UserLoginView.as_view()),
    # url(r'api/getUserCourses/$', views.CourseListView.as_view({'get': 'list'})),
    url(r'api/getUserCourses/(?P<pk>\d+)/$', views.CourseListView.as_view({'get': 'retrieve', 'delete': 'destroy'})),
    # url(r'api/course/$', views.CourseListView.as_view()),
    url(r'api/getCourseDetail/$', views.CourseDetailView.as_view({'get': 'list','post': 'create'})),
    url(r'api/getCourseDetail/(?P<pk>\d+)/$', views.CourseDetailView.as_view({'get': 'retrieve', 'delete': 'destroy'})),
    url(r'api/getProblemDetail/(?P<pk>\d+)/$', views.ProblemDetailView.as_view({'get': 'retrieve', 'delete': 'destroy'})),
    # getCourseDetail 内instructor还是id形式
    url(r'api/getCourseProblems/(?P<pk>\d+)/$', views.ProblemListView.as_view({'get': 'retrieve'})),
    # url(r'api/solution_list/$', views.SolutionListView.as_view()),
    url(r'api/getProblemSolutions/(?P<pk>\d+)/$', views.SolutionListView.as_view({'get': 'retrieve'})),
    url(r'api/getCourseLabels/(?P<pk>\d+)/$', views.LabelListView.as_view({'get': 'retrieve'})),
    url(r'api/getLabelProblems/(?P<pk>\d+)/$', views.ProblemLabelListView.as_view({'get': 'retrieve'})),
    url(r'api/likes/$', views.ProblemLikeView.as_view()),
    url(r'api/stars/$', views.ProblemCollectView.as_view()),
    url(r'api/getSolutionComments/$', views.SolutionCommentView.as_view()),
    url(r'api/addProblem/$', views.AddProblemView.as_view()),
    url(r'api/addSolution/$', views.AddSolutionView.as_view()),
    url(r'api/addComment/$', views.AddCommentView.as_view()),

]