import { Tabs } from 'antd';
import ProblemList from '@/pages/course/components/ProblemList/index';
import OCRComponet from '../components/OCR/index';
import SubmitComponent from '../components/Submit/index';
import { getCourseLabelsRead } from '@/services/ant-design-pro/getCourseLabels';
import { Typography } from 'antd';
import { ProCard } from '@ant-design/pro-components';
import { useLocation } from 'umi';
import { useRequest } from '@@/plugin-request/request';
import { useModel } from 'umi';

const { TabPane } = Tabs;
const { Title } = Typography;

const ProblemsPage: React.FC = () => {
  const location = useLocation();
  const courseId = location?.state?.courseId;

  //获取课程所对应的标签
  const { data, error, loading } = useRequest<API.CourseLabelList>(() => {
    console.log('courseId', courseId);
    console.log('getCourseLabelsRead inside hook', getCourseLabelsRead(courseId));
    return getCourseLabelsRead(courseId);
  });
  console.log('getCourseLabelsRead', data);
  if (data === undefined) {
    return <div>loading</div>;
  }
  const { labels, setLabels } = useModel('CourseLabels');
  setLabels(data.label);

  return (
    <>
      <Tabs defaultActiveKey="1" size="middle">
        {data.label.map((l) => (
          <TabPane tab={l.labelName} key={l.id}>
            <ProblemList labelId={l.id} />
          </TabPane>
        ))}
      </Tabs>
      <Title level={3}>OCR</Title>
      <OCRComponet />
      <Title level={3}>发布题目</Title>
      <ProCard style={{ borderRadius: 5 }}>
        <SubmitComponent />
      </ProCard>
    </>
  );
};

export default ProblemsPage;
