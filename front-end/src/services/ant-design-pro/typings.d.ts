declare namespace API {
  /* 当前用户*/
  type CurrentUser = {
    id?: string;
    username?: string;
    email?: string;
    realName?: string;
    mobile?: string;
    authority?: number;
    token?: string;
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

  /*题解*/
  type Solution = {
    solutionId: number;
    title: string;
    content: string;
    likes: number;
    isLiked: boolean;
    isStared: boolean;
    isChecked?: boolean
  };

  /*题解列表*/
  type SolutionList = {
    data: Solution[]
  };

  /*点赞数*/
  type Likes = number;

  /*评论数*/
  type Messages = number;


  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };







  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type ruleParams = {
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  };
}
