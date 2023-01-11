import { request } from 'umi';

const getUnreviewedProblemByClassID = async (classID: number) => {
  return request<number[]>(`/api/getUnreviewedProblemByClassID/${classID}/`);
};

export default getUnreviewedProblemByClassID;
