import { Tabs } from 'antd';
import ProblemList from '@/pages/course/components/ProblemList/index';
import OCRComponet from '../components/OCR/index';
import SubmitComponent from '../components/Submit/index';
import { Typography } from 'antd';
import {ProCard} from "@ant-design/pro-components";
const { TabPane } = Tabs;
const { Title } = Typography;
const ProblemsPage: React.FC = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" size="middle">
        <TabPane tab="章节 1" key="1">
          <ProblemList />
        </TabPane>
        <TabPane tab="章节 2" key="2">
          <ProblemList />
        </TabPane>
        <TabPane tab="章节 3" key="3">
          <ProblemList />
        </TabPane>
      </Tabs>
      <Title level={3}>OCR</Title>
      <OCRComponet />
      <Title level={3}>发布题目</Title>
      <ProCard  style={{borderRadius: 5}}>
      <SubmitComponent />
      </ProCard>
    </>
  );
};

export default ProblemsPage;
