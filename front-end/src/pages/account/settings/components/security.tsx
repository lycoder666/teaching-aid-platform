import React from 'react';
import {List, message} from 'antd';
import {ProForm} from "@ant-design/pro-components";
import {ProFormText} from "@ant-design/pro-form";

type Unpacked<T> = T extends (infer U)[] ? U : T;

const passwordStrength = {
  strong: <span className="strong">强</span>,
  medium: <span className="medium">中</span>,
  weak: <span className="weak">弱 Weak</span>,
};

const SecurityView: React.FC = () => {

  const handleFinish = async () => {
    message.success('更新基本信息成功');
  };

  // const checkPassword = (_: any, value: string) => {
  //   const promise = Promise;
  //   if (/*TO do */true) {
  //     return promise.reject('密码错误');
  //   }
  //   return promise.resolve();
  // }

  return (
    <>
      <ProForm
      layout='vertical'
      onFinish={handleFinish}
      submitter={{
        searchConfig: {
          submitText: '修改密码',
        },
        render: (_, dom) => dom[1],
      }}>

        <ProFormText
          width="md"
          name="originpwd"
          label="原密码"
          rules={[
            {

              required: true,
              message: '请输入您的原密码!',
            },
            {
              // {
              //   validator: checkPassword
              // }
            }
          ]}
        />
        <ProFormText
          width="md"
          name="newpwd"
          label="新密码"
          rules={[
            {

              required: true,
              message: '请输入新密码!',
            },
          ]}
        />
        <ProFormText
          width="md"
          name="repwd"
          label="确认新密码"
          rules={[
            {

              required: true,
              message: '请再次输入新密码!',
            },
          ]}
        />

      </ProForm>

    </>
  );
};

export default SecurityView;
