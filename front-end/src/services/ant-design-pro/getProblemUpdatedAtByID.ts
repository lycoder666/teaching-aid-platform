import { request } from 'umi';

const getProblemUpdatedAtByID = async (problemID: number) => {
  return request<API.TProblemUpdatedAt>(`/api/getProblemUpdatedAtByID/${problemID}/`, {
    method: 'GET',
  });
};

export default getProblemUpdatedAtByID;
