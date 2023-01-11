import { useModel } from 'umi';

export default () => {
  const { labels, setLabels } = useModel('CourseLabels');
  console.log('labels', labels);
  setLabels([
    { id: 1, labelName: 'test' },
    { id: 2, labelName: 'test2' },
  ]);

  return (
    <>
      <div>{JSON.stringify(labels)}</div>
    </>
  );
};
