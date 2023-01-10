import {Tabs, Typography} from 'antd';
import ProblemDescription from '@/pages/course/components/ProblemDescription/index';
import Solutions from "@/pages/course/solution";
import OCRComponet from "@/pages/course/components/OCR";
import {ProCard} from "@ant-design/pro-components";
import SubmitComponent from "@/pages/course/components/Submit";
import {useLocation} from "umi";
const { TabPane } = Tabs;
const { Title } = Typography;

const ProblemDetails: React.FC = () => {

  const location = useLocation();
  const problemId = location?.state?.problemId;
  return (
    <div>
      <Tabs defaultActiveKey="1" size="middle">
        <TabPane tab="题目" key="1">
          <ProblemDescription problemId={problemId}/>
        </TabPane>
        <TabPane tab="题解" key="2">
          {/*<p>Solution</p>*/}
          <Solutions problemId={1}/>
        </TabPane>
      </Tabs>
    </div>



  );
};

export default ProblemDetails;
