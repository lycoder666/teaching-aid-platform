import { request } from 'umi';

const changeProblemLabelsByProblemID = async (problemID: number, newLabels: API.TLabel[]) => {
  return request<boolean>(`/api/changeProblemLabelsByProblemID/${problemID}/`, {
    method: 'POST',
    data: {
      newLabels: newLabels,
    },
  });
};

export default changeProblemLabelsByProblemID;
