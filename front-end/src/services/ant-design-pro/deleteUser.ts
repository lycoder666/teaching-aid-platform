import { request } from 'umi';

const deleteUser = async (userID: number) => {
  return request<boolean>(`/api/deleteUser/${userID}/`, {
    method: 'POST',
  });
};

export default deleteUser;
