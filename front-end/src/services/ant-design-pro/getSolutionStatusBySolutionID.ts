import { request } from 'umi';

const getSolutionStatusBySolutionID = async (solutionID: number) => {
  return request<number>(`/api/getSolutionStatusBySolutionID/${solutionID}/`);
};

export default getSolutionStatusBySolutionID;
