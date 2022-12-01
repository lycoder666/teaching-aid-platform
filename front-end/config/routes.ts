export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        name: 'register',
        path: '/user/register',
        component: './user/register'
      },
      {
        component: './404',
      },
    ],
  },
  // account routes
  {
    name: 'account',
    icon: 'user',
    path: '/account',
    routes: [
      // used for personal info
      {
        name: 'personal info',
        path: '/account/personal-info',
      },
      // used for change settings
      {
        name: 'preferences',
        path: '/account/preferences',
      },
      {
        component: './404',
      },
    ],
  },
  //control panel
  {
    name: '控制面板',
    path: '/control-panel',
    icon: 'appstore'
  },
  // course route
  {
    path: '/course-student',
    name: '课程',
    icon: 'book',
    access: 'canStudent',
  },
  {
    path: '/course-teacher',
    name: 'course',
    icon: 'book',
    access: 'canTeacher',
  },
  // management for teacher
  {
    path: '/management-teacher',
    name: 'management',
    icon: 'SmileOutlined',
    access: 'canTeacher',
    routes: [
      {
        name: 'course1',
        path: '/management-teacher/course1',
      },
      {
        name: 'course2',
        path: '/management-teacher/course2',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/management-admin',
    name: 'management',
    access: 'canAdmin',
    icon: 'CrownOutlined',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  // default redirect
  {
    path: '/',
    redirect: '/lesson',
  },

  {
    name: '题解',
    path: '/course/solution',
    component: './course/solution'
  },
  // default redirect
  {
    component: './404',
  },
];
