import { Tabs } from 'antd';
import ProblemDescription from '@/pages/course/components/ProblemDescription/index';
const { TabPane } = Tabs;

const ProblemDetails: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1" size="middle">
      <TabPane tab="Problem" key="1">
        <ProblemDescription />
      </TabPane>
      <TabPane tab="Solution" key="2">
        <p>Solution</p>
      </TabPane>
    </Tabs>
  );
};

export default ProblemDetails;
