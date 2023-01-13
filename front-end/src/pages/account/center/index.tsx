import {
  PlusOutlined,
  HomeOutlined,
  ContactsOutlined,
  ClusterOutlined,
  UserOutlined,
  MobileOutlined
} from '@ant-design/icons';
import { Avatar, Card, Col, Divider, Input, Row, Tag } from 'antd';
import React, { useState, useRef } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Link, useRequest } from 'umi';
import type { RouteChildrenProps } from 'react-router';
import ReleaseSolution from "./components/releaseSolution";
import Stared from './components/stared';
import Liked from "./components/liked";
import type { tabKeyType } from './data.d';
import styles from './Center.less';
import {useModel} from "@@/plugin-model/useModel";


const Center: React.FC<RouteChildrenProps> = () => {

  const operationTabList = [
    {
      key: 'releaseSolution',
      tab: (
        <span>
        发布的题解 <span style={{ fontSize: 14 }}>(8)</span>
      </span>
      ),
    },
    {
      key: 'liked',
      tab: (
        <span>
        点赞内容 <span style={{ fontSize: 14 }}>(8)</span>
      </span>
      ),
    },
    {
      key: 'stared',
      tab: (
        <span>
        收藏 <span style={{ fontSize: 14 }}>(8)</span>
      </span>
      ),
    },
  ];

  const {initialState, loading} = useModel('@@initialState')

  // @ts-ignore
  const currentUser = initialState.currentUser;
  const [tabKey, setTabKey] = useState<tabKeyType>('releaseSolution');

  //  渲染用户信息
  const renderUserInfo = () => {
    return (
      <div className={styles.detail}>
        {currentUser.realName? (<p>
          <UserOutlined
            style={{
              marginRight: 8,
            }}
          />
          {currentUser.realName}
        </p>):''}
        {currentUser.email?(<p>
           <ContactsOutlined
            style={{
              marginRight: 8,
            }}
          />
          {currentUser.email}
        </p>): ''}
        {currentUser.mobile?(<p>
            <MobileOutlined
              style={{
                marginRight: 8,
              }}
            />
            {currentUser.mobile}
          </p>): ''}
      </div>
    );
  };

  // 渲染tab切换
  const renderChildrenByTabKey = (tabValue: tabKeyType) => {
    if (tabValue === 'releaseSolution') {
      return <ReleaseSolution />
    }
    if (tabValue === 'liked') {

      return <Liked />;
    }
    if (tabValue === 'stared') {
      return <Stared />;
    }
    return null;
  };

  return (
    <GridContent>
      <Row gutter={24}>
        <Col lg={7} md={24}>
          <Card bordered={false} style={{ marginBottom: 24 }} loading={loading}>
            {!loading && currentUser && (
              <div>
                <div className={styles.avatarHolder}>
                  <img alt="" src={'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'} />
                  <div className={styles.name}>{currentUser.username}</div>
                </div>
                {renderUserInfo()}
                <Divider dashed />
                <Divider style={{ marginTop: 16 }} dashed />
              </div>
            )}
          </Card>
        </Col>

        <Col lg={17} md={24}>
          <Card
            className={styles.tabsCard}
            bordered={false}
            tabList={operationTabList}
            activeTabKey={tabKey}
            onTabChange={(_tabKey: string) => {
              setTabKey(_tabKey as tabKeyType);
            }}
          >
            {renderChildrenByTabKey(tabKey)}
          </Card>
        </Col>
      </Row>
    </GridContent>
  );
};
export default Center;
