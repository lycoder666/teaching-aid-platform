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
    # url(r'api/getUserCourses/(?P<pk>\d+)/$', views.CourseListView.as_view({'get': 'retrieve', 'delete': 'destroy'})),
    url(r'api/getUserCourses/(?P<pk>\d+)/$', views.CourseListView.as_view({'get': 'retrieve'})),
    url(r'api/deleteUserCourses/(?P<pk>\d+)/$', views.CourseListView.as_view({'delete': 'destroy'})),

    # url(r'api/course/$', views.CourseListView.as_view()),
    # url(r'api/getCourseDetail/$', views.CourseDetailView.as_view({'get': 'list','post': 'create'})),
    url(r'api/getCourseDetail/$', views.CourseDetailView.as_view({'get': 'list'})),
    url(r'api/addCourseDetail/$', views.CourseDetailView.as_view({'post': 'create'})),

    # url(r'api/getCourseDetail/(?P<pk>\d+)/$', views.CourseDetailView.as_view({'get': 'retrieve', 'delete': 'destroy'})),
    url(r'api/getCourseDetail/(?P<pk>\d+)/$', views.CourseDetailView.as_view({'get': 'retrieve'})),
    url(r'api/deleteCourseDetail/(?P<pk>\d+)/$', views.CourseDetailView.as_view({'delete': 'destroy'})),

    # url(r'api/getProblemDetail/(?P<pk>\d+)/$', views.ProblemDetailView.as_view({'get': 'retrieve', 'delete': 'destroy'})),
    url(r'api/getProblemDetail/(?P<pk>\d+)/$',views.ProblemDetailView.as_view({'get': 'retrieve'})),
    url(r'api/deleteProblemDetail/(?P<pk>\d+)/$',views.ProblemDetailView.as_view({'delete': 'destroy'})),

    # getCourseDetail 内instructor还是id形式
    url(r'api/getCourseProblems/(?P<pk>\d+)/$', views.ProblemListView.as_view({'get': 'retrieve'})),
    # url(r'api/solution_list/$', views.SolutionListView.as_view()),
    url(r'api/getProblemSolutions/(?P<pk>\d+)/$', views.SolutionListView.as_view({'get': 'retrieve'})),
    url(r'api/getCourseLabels/(?P<pk>\d+)/$', views.LabelListView.as_view({'get': 'retrieve'})),
    url(r'api/getLabelProblems/(?P<pk>\d+)/$', views.ProblemLabelListView.as_view({'get': 'retrieve'})),
    url(r'api/likes/$', views.ProblemLikeView.as_view()),
    url(r'api/stars/$', views.ProblemCollectView.as_view()),
    url(r'api/getSolutionComments/$', views.SolutionCommentView.as_view()),

    url(r'api/addProblem/$', views.AddProblemView.as_view()),  # 1
    url(r'api/addSolution/$', views.AddSolutionView.as_view()),  # 2
    url(r'api/addComment/$', views.AddCommentView.as_view()),  # 3
    url(r'api/getProblemDescriptionByProblemID/$', views.GetProblemDescriptionByProblemIDView.as_view()),  # 5
    url(r'api/getSolutionsPublishedByUser/$', views.GetSolutionsPublishedByUserView.as_view()),
    url(r'api/getUnreviewdProblemByClassIDAndUserID/$', views.GetUnreviewdProblemByClassIDAndUserIDView.as_view()),
    url(r'api/getProblemLablesByProblemID/$', views.GetProblemLablesByProblemIDView.as_view()),
    url(r'api/getProblemStatus/$', views.GetProblemStatusView.as_view()),
    url(r'api/changeProblemStatus/$', views.ChangeProblemStatusView.as_view()),  # 9
    url(r'api/changeUserNameByUserID/$', views.ChangeUserNameByUserIDView.as_view()),  # 10
    url(r'api/changeUserPhoneByUserID/$', views.ChangeUserPhoneByUserIDView.as_view()),
    url(r'api/changeUserPriorityByUserID/$', views.ChangeUserPriorityByUserIDView.as_view()),
    url(r'api/changeUserEmailByUserID/$', views.ChangeUserEmailByUserIDView.as_view()),
    url(r'api/getUserLastLoginTimeByID/$', views.GetUserLastLoginTimeByIDView.as_view()),
    url(r'api/getProblemCreatedAtByID/$', views.GetProblemCreatedAtByIDView.as_view()),
    url(r'api/getProblemUpdatedAtByID/$', views.GetProblemUpdatedAtByIDView.as_view()),
    url(r'api/changeProblemNameByProblemID/$', views.ChangeProblemNameByProblemIDView.as_view()),
    # not test
    url(r'api/changeProblemLablesByID/$', views.ChangeProblemlabelsByProblemIDView.as_view()),
    url(r'api/changeProblemDescriptionByID/$', views.ChangeProblemDescriptionByIDView.as_view()),
    url(r'api/addLabel/$', views.AddLabelView.as_view()),
    url(r'api/deleteLabelbyID/$', views.DeleteLabelbyIDView.as_view()),
    url(r'api/deleteUserByID/$', views.DeleteUserByIDView.as_view()),
    url(r'api/deleteProblemByID/$', views.DeleteProblemByIDView.as_view()),
    url(r'api/deleteSolutionByID/$', views.DeleteSolutionByIDView.as_view()),
    url(r'api/deleteCommentByID/$', views.DeleteCommentByIDView.as_view()),
    url(r'api/getInstructorCourseByID/$', views.GetInstructorCourseByIDView.as_view()),
    url(r'api/changeSolutionStatus/$', views.ChangeSolutionStatusView.as_view()),  # 9

]