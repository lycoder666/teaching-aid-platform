import { request } from 'umi';

const getProblemCreatedAtByProblemID = async (problemID: number) => {
  return request<number>(`/api/getProblemCreatedAtByProblemID/${problemID}/`);
};

export default getProblemCreatedAtByProblemID;
