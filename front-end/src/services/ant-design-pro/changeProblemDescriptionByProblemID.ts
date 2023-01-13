import { request } from 'umi';

const changeProblemDescriptionByProblemID = async (problemID: number, newDescription: string) => {
  return request<boolean>(`/api/changeProblemDescriptionByProblemID/${problemID}/`, {
    method: 'POST',
    data: {
      newDescription: newDescription,
    },
  });
};

export default changeProblemDescriptionByProblemID;
