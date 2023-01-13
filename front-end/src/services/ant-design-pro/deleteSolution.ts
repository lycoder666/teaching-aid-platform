import { request } from 'umi';

const deleteSolution = async (solutionID: number) => {
  return request<boolean>(`/api/deleteSolution/${solutionID}/`, {
    method: 'POST',
  });
};

export default deleteSolution;
