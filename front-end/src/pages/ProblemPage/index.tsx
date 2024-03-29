import { Tabs } from 'antd';
import ProblemList from '@/pages/course/components/ProblemList/index';
import OCRComponet from '../components/OCR/index';
import SubmitComponent from '../components/Submit/index';
import { getCourseLabelsRead } from '@/services/ant-design-pro/getCourseLabels';
import { Typography } from 'antd';
import { ProCard } from '@ant-design/pro-components';
import { useLocation } from 'umi';
// import { useRequest } from '@@/plugin-request/request';
import { useRequest } from 'umi';
import { request } from 'umi';

const { TabPane } = Tabs;
const { Title } = Typography;

const ProblemsPage: React.FC = () => {
  const location = useLocation();
  const courseId = location?.state?.courseId;

  //获取课程所对应的标签
  const getCourseLabelsTest = async (id: number) => {
    const data = await request<API.CourseLabelList>(`/api/getCourseLabels/${id}/`, {
      method: 'GET'
    });
    console.log('inner getCourseLabels', data);
    return data;
  };
  const { data, error, loading } = useRequest<API.CourseLabelList>(() => {
    return getCourseLabelsTest(courseId);
  });

  // const { labels, setLabels } = useModel('CourseLabels');
  // setLabels(data.label);
  if (data === undefined) {
    return <div>loading</div>;
  }
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
        <SubmitComponent flag={1} />
      </ProCard>
    </>
  );
};

export default ProblemsPage;
