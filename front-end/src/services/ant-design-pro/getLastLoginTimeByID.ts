import { request } from 'umi';

const getLastLoginTimeByID = (id: number) => {
  return request<API.TLastLoginTime>(`/api/getLastLoginTimeByID/${id}`, {
    method: 'GET',
  });
};

export default getLastLoginTimeByID;
