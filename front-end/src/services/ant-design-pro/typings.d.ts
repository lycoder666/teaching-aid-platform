declare namespace API {
  type CourseInfo = {
    /** ID */
    courseId: number;
    /** Course name */
    courseName: string;
    /** Course instructor */
    // instructor?: number;
  };

  type CourseLabelList = {
    /** ID */
    id?: number;
    labels?: LabelCourseLabelList[];
  };

  type TProblemList = {
    /** ID */
    id?: number;
    problemList?: ProblemList[];
  };

  type getCourseDetailDeleteParams = {
    /** A unique integer value identifying this course info. */
    id: number;
  };

  type getCourseDetailReadParams = {
    /** A unique integer value identifying this course info. */
    id: number;
  };

  type getCourseLabelsReadParams = {
    /** A unique integer value identifying this course info. */
    id: number;
  };

  type getCourseProblemsReadParams = {
    /** A unique integer value identifying this course info. */
    id: number;
  };

  type getLabelProblemsReadParams = {
    /** A unique integer value identifying this label info. */
    labelId: number;
  };

  type getProblemSolutionsReadParams = {
    /** A unique integer value identifying this problem info. */
    problemId: number;
  };

  type getUserCoursesDeleteParams = {
    /** A unique integer value identifying this user info. */
    id: number;
  };

  type getUserCoursesReadParams = {
    /** A unique integer value identifying this user info. */
    id: number;
  };

  type LabelCourseLabelList = {
    /** ID */
    id?: number;
    /** Label name */
    labelName: string;
  };

  type LabelProblemListDetail = {
    /** ID */
    id?: number;
    markProblem?: ProblemListRelationship[];
  };

  type LabelProblemListInfo = {
    /** ID */
    id?: number;
    /** Label name */
    labelName: string;
  };

  type ProblemList = {
    /** ID */
    id?: number;
    mark?: LabelProblemListInfo[];
    /** Problem name */
    problemName: string;
    /** CreatedAt */
    createdAt?: number;
    /** ChangedAt */
    changedAt?: number;
    /** Is solved or not */
    isSolved?: boolean;
  };

  type ProblemListRelationship = {
    /** ID */
    id?: number;
    /** Problem name */
    problemName: string;
    /** Is solved or not */
    isSolved?: boolean;
    /** ChangedAt */
    changedAt?: number;
    /** CreatedAt */
    createdAt?: number;
  };

  type ProblemSolutionList = {
    /** ID */
    id?: number;
    solution_list?: SolutionDetail[];
  };

  type SolutionDetail = {
    /** ID */
    id?: number;
    /** Solution name */
    solutionName: string;
    /** Solution is checked or not */
    isChecked?: boolean;
    /** CreatedAt */
    createdAt?: number;
    /** ChangedAt */
    changedAt?: number;
  };

  type UserCourseList = {
    /** ID */
    id?: number;
    study?: CourseInfo[];
  };

  type CurrentUser = {
    id?: number;
    username?: string;
    email?: string;
    realName?: string;
    mobile?: string;
    authority?: number;
    token?: string;
  };

  type RegistInfo = {
    /** Account */
    username: string;
    /** Password */
    password: string;
    confirm: string;
    /** Email of user */
    mail?: string;
    /** Last login */
  };

  /*登录参数*/
  type LoginParams = {
    username?: string;
    password?: string;
  };

  /*登录返回结果*/
  type LoginResult = {
    statecode?: number;
    user?: CurrentUser;
    token?: string;
  };

  type Likes = {
    likes: number;
    isLiked: boolean;
  };

  type Stared = {
    stars: number;
    isStared: boolean;
  };

  type ProblemDescription = {
    description: string;
  };

  type ProblemID = {
    id: number;
  };

  type SolutionID = {
    id: number;
  };

  type SolutionDescription = {
    description: string;
  };

  type TLastLoginTime = {
    lastLoginTime: number;
  };

  type TUserCreatedTime = {
    createdTime: number;
  };

  type TProblemUpdatedAt = {
    updatedTime: number;
  };

  type TLabel = {
    id: number;
    name: string;
  };
}
