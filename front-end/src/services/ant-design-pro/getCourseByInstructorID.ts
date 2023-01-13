import { request } from 'umi';

const getCourseByInstructorID = async (instructorID: number) => {
  return request<number[]>(`/api/getCourseByInstructorID/${instructorID}/`);
};

export default getCourseByInstructorID;
