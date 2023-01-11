// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

const getCourseLabelsRead = async (id: number) => {
  return request<API.CourseLabelList>(`/api/getCourseLabels/${id}/`, {
    method: 'get',
  });
};

export default getCourseLabelsRead;
