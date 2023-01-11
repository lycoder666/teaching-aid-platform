import { request } from 'umi';

const deleteProblem = async (problemID: number) => {
  return request<boolean>(`/api/deleteProblem/${problemID}/`, {
    method: 'POST',
  });
};

export default deleteProblem;
