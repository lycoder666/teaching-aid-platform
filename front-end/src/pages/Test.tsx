import { useModel } from 'umi';
import { request } from 'umi';
import { useRequest } from '@umijs/hooks';
export default () => {
  const getCourseLabels = async (id: number) => {
    const data = await request<API.CourseLabelList>(`/api/getCourseLabels/${id}/`, {
      method: 'GET',
    });
    console.log('inner getCourseLabels', data);
    return data;
  };
  //获取课程所对应的标签
  const { data, error, loading } = useRequest<API.CourseLabelList>(() => {
    return getCourseLabels(1);
  });
  console.log('test page data', data);

  return (
    <>
      <div>test</div>
    </>
  );
};
