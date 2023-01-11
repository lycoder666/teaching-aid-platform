import { request } from 'umi';

const changeProblemNameByProblemID = async (problemID: number, newName: string) => {
  return request<boolean>(`/api/changeProblemNameByProblemID/${problemID}/`, {
    method: 'POST',
    data: {
      newName: newName,
    },
  });
};

export default changeProblemNameByProblemID;
