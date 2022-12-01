import {login} from '@/services/ant-design-pro/api';
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormText,
} from '@ant-design/pro-components';
import {Alert, message} from 'antd';
import React, {useState} from 'react';
import {FormattedMessage, history, Link, SelectLang, useIntl, useModel} from 'umi';
import styles from './index.less';

const LoginMessage: React.FC<{
  content: string;
}> = ({content}) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  // const [type, setType] = useState<string>('account');
  const {initialState, setInitialState} = useModel('@@initialState');

  const intl = useIntl();


  const handleSubmit = async (values: API.LoginParams) => {
    // 登录
    const msg = await login({...values});
    if (msg.statecode === 0) {//登录成功
      const defaultLoginSuccessMessage = intl.formatMessage({
        id: 'pages.login.success',
        defaultMessage: '登录成功！',
      });
      message.success(defaultLoginSuccessMessage);
      await setInitialState((s) => ({
        ...s,
        currentUser: {...msg.user, token: msg.token}
      }));
      console.log(initialState.currentUser);
      //To do: 根据不同身份跳转到不同的页面
      // @ts-ignore
      switch (msg.user.authority) {
        //管理员
        case 0:
          history.push('/');
          break;
        //老师
        case 1:
          history.push('/');
          break;
        //学生
        case 2:
          history.push('/course/solution');
          break;
        case undefined:
        {
          throw new Error('Not implemented yet: undefined case');
        }
          break;
        default:
          break;
      }
      return;
    } else if (msg.statecode === 1) {//登录失败
      const defaultLoginSuccessMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: '登录失败，请重试！',
      });
      message.error(defaultLoginSuccessMessage);
      setUserLoginState(msg);
    }
    // console.log(msg);
  };
  const {statecode} = userLoginState;

  return (
    <div className={styles.container}>
      <div className={styles.lang} data-lang>
        {SelectLang && <SelectLang/>}
      </div>
      <div className={styles.content}>
        <LoginForm
          logo={<img alt="logo" src="/logo.svg"/>}
          title="教学辅助平台"
          // subTitle={intl.formatMessage({ id: 'pages.layouts.userLayout.title' })}
          // initialValues={{
          //   autoLogin: true,
          // }}

          onFinish={async (values) => {
            await handleSubmit(values as API.LoginParams);
          }}
        >
          <br/>

          {statecode === 1 && (
            <LoginMessage
              content={intl.formatMessage({
                id: 'pages.login.accountLogin.errorMessage',
                defaultMessage: '账户或密码错误(admin/ant.design)',
              })}
            />
          )}

          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={styles.prefixIcon}/>,
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.username.placeholder',
                defaultMessage: '用户名: admin or user',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.username.required"
                      defaultMessage="请输入用户名!"
                    />
                  ),
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={styles.prefixIcon}/>,
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.password.placeholder',
                defaultMessage: '密码: ant.design',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.password.required"
                      defaultMessage="请输入密码！"
                    />
                  ),
                },
              ]}
            />
          </>

          <div
            style={{
              marginBottom: 24,
            }}
          >

            <Link to="/user/register"
                  style={{
                    float: 'left',
                  }}
            >
              <FormattedMessage id="pages.login.registerAccount" defaultMessage="注册"/>
            </Link>
            <a
              style={{
                float: 'right',
              }}
            >
              <FormattedMessage id="pages.login.forgotPassword" defaultMessage="忘记密码"/>
            </a>
          </div>
        </LoginForm>
      </div>
    </div>
  );
};

export default Login;
