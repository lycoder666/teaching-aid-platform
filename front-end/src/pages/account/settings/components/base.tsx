import React from 'react';
import { message } from 'antd';
import ProForm, {
  ProFormText,
} from '@ant-design/pro-form';
import { useRequest } from 'umi';
import { queryCurrent } from '../service';

import styles from './BaseView.less';
import {useModel} from "@@/plugin-model/useModel";



const BaseView: React.FC = () => {
  const {initialState, loading} = useModel('@@initialState')

  //处理提交表单
  const handleFinish = async () => {
    message.success('更新基本信息成功');
  };
  return (
    <div className={styles.baseView}>
      {loading ? null : (
        <>
          <div className={styles.left}>
            <ProForm
              layout="vertical"
              onFinish={handleFinish}
              submitter={{
                searchConfig: {
                  submitText: '更新基本信息',
                },
                render: (_, dom) => dom[1],
              }}
              //显示用户基本信息
              initialValues={
              {
                email: initialState.currentUser.email? initialState.currentUser.email:'',
                realName: initialState.currentUser.realName? initialState.currentUser.realName:'',
                mobile: initialState.currentUser.mobile? initialState.currentUser.mobile:'',
                useMode: 'chapter',
              }
            }
              hideRequiredMark
            >
              <ProFormText
                width="md"
                name="email"
                label="邮箱"
                rules={[
                  {

                    required: true,
                    message: '请输入您的邮箱!',
                  },
                ]}
              />
              <ProFormText
                width="md"
                name="realName"
                label="姓名"
              />
              <ProFormText
                name="mobile"
                label="手机号"
                rules={[
                  {
                    pattern: /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
                    message: '手机号错误'
                  },
                ]}
              />
            </ProForm>
          </div>
        </>
      )}
    </div>
  );
};

export default BaseView;
