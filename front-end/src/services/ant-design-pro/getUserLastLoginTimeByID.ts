import { request } from 'umi';

const getUserLastLoginTimeByID = async (userID: number) => {
  return request<number>(`/api/getUserLastLoginTimeByID/${userID}/`);
};

export default getUserLastLoginTimeByID;
