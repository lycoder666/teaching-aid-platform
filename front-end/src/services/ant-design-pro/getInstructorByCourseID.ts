import { request } from 'umi';

const getInstructorByCourseID = async (courseID: number) => {
  return request<number>(`/api/getInstructorByCourseID/${courseID}/`);
};

export default getInstructorByCourseID;
