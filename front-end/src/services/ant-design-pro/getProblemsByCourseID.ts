import { request } from 'umi';

const getProblemsByCourseID = async (courseID: number) => {
  return request<>(`/api/getProblemsByCourseID/${courseID}/`, {
    method: 'GET',
  });
};

export default getProblemsByCourseID;
