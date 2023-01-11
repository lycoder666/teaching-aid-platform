import { request } from 'umi';

const getProblemLabelsByProblemID = async (problemID: number) => {
  return request<number[]>(`/api/getProblemLabelsByProblemID/${problemID}/`);
};

export default getProblemLabelsByProblemID;
