import type { FC } from 'react';
import { useEffect } from 'react';
import { Form, Button, Input, message } from 'antd';
import type { Store } from 'antd/es/form/interface';
import { Link, useRequest, history } from 'umi';
import type { StateType } from './service';
import { fakeRegister } from './service';
// import CryptoJs from 'crypto-js';

import styles from './style.less';

const FormItem = Form.Item;
const CryptoJs = require('crypto-js');

const Register: FC = () => {
  let interval: number | undefined;
  const [form] = Form.useForm();

  useEffect(
    () => () => {
      clearInterval(interval);
    },
    [interval],
  );

  const { loading: submitting, run: register } = useRequest<{ data: StateType }>(fakeRegister, {
    manual: true,
    onSuccess: (data, params) => {
      if (data.status === 'ok') {
        message.success('注册成功！');
        history.push({
          pathname: '/user/login',
          state: {
            account: params.email,
          },
        });
      }
    },
  });

  //提交表单
  const onFinish = (values: Store) => {
    //MD5加密密码
    const password = values['password'];
    const cryptoPwd = CryptoJs.MD5(password).toString();
    values['password'] = cryptoPwd;

    const repassword = values['confirm'];
    const cryptoPwd1 = CryptoJs.MD5(repassword).toString();
    values['confirm'] = cryptoPwd1;

    register(values);
  };


  const checkConfirm = (_: any, value: string) => {
    const promise = Promise;
    if (value && value !== form.getFieldValue('password')) {
      return promise.reject('两次输入的密码不匹配!');
    }
    return promise.resolve();
  };

  // const checkUsername = (_: any, value: string) => {
  //   const promise = Promise;
  //   if (/*TO do */true) {
  //     return promise.reject('用户名已存在');
  //   }
  //   return promise.resolve();
  // }

  return (
    <div className={styles.main}>
      <div className={styles.content} >
        <h2>注册</h2>
        <Form form={form} name="UserRegister" onFinish={onFinish}>
          <FormItem name="username"
                    validateTrigger='onChange'
                    rules={[
                      {required: true,
                       message: '请输入用户名'
                      },
                      {
                        pattern: /^\w[a-zA-Z\d]{7,15}$/,
                        message: '用户名格式错误'
                      },
                      // {
                      //   validator: checkUsername
                      // }
                    ]}>
            <Input size="middle" placeholder="用户名" />
          </FormItem>

          <FormItem
            name="password"
            className={
              form.getFieldValue('password') &&
              form.getFieldValue('password').length > 0 &&
              styles.password
            }
            rules={[
              {required: true,
                message: '请输入密码'
              },

              {
                pattern: /^[a-zA-Z\d]{8,16}$/,
                message: '输入密码格式不对'
              }
            ]}
          >
            <Input.Password size="large" type="password" placeholder="至少6位密码，包含字母和数字" />
          </FormItem>
        <FormItem
          name="confirm"
          rules={[
            {
              required: true,
              message: '确认密码',
            },
            {
              validator: checkConfirm,
            },
          ]}
          dependencies={['password']}
        >
          <Input.Password size="large" type="password" placeholder="确认密码" />
        </FormItem>

          <FormItem
            name="mail"
            rules={[
              {
                required: true,
                message: '请输入邮箱地址!',
              },
              {
                type: 'email',
                message: '邮箱地址格式错误!',
              },
            ]}
          >
            <Input size="middle" placeholder="邮箱" />
          </FormItem>

        <FormItem>
          <Button
            size="large"
            loading={submitting}
            className={styles.submit}
            type="primary"
            htmlType="submit"
          >
            <span>注册</span>
          </Button>
          <Link className={styles.login} to="/user/login">
            <span>使用已有账户登录</span>
          </Link>
        </FormItem>
      </Form>
      </div>

    </div>
  );
};
export default Register;
