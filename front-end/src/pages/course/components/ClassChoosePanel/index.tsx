import React from 'react';
import {ProCard} from "@ant-design/pro-components";
import { Card, Col, Row } from 'antd';
import { Link } from 'umi';

const Classes: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: '0 10px', width: 550 }}>
      <Link to="/course/problems">
        <ProCard title="算法" description="This is card 1" bordered style={{ width: 250, height: 250,  marginBottom: 50, borderRadius: 5}}/>
      </Link>
      <ProCard title="数学" description="This is card 2" bordered style={{ width: 250, height: 250,  marginBottom: 50, borderRadius: 5}}/>
      <ProCard title="物理" description="This is card 3" bordered style={{ width: 250, height: 250,  marginBottom: 50, borderRadius: 5}}/>
      <ProCard title="化学" description="This is card 4" bordered style={{ width: 250, height: 250,  marginBottom: 50, borderRadius: 5}}/>
    </div>
  );
};

export default Classes;
