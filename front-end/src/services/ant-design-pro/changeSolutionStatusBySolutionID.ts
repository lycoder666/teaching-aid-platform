import { request } from 'umi';

const changeSolutionStatusBySolutionID = async (solutionID: number, newStatus: number) => {
  return request<boolean>(`/api/changeSolutionStatusBySolutionID/${solutionID}`, {
    method: 'POST',
    newStatus: newStatus,
  });
};

export default changeSolutionStatusBySolutionID;
