import { useModel } from 'umi';

export default () => {
  const { initialState } = useModel('@@initialState');
  const { testInfo, changeInfo } = useModel('TestModel');
  const { labels, setLabels } = useModel('CourseLabels');
  console.log(labels);
  console.log(testInfo);
  console.log(initialState);
  changeInfo('test');
  return <>{testInfo}</>;
};
