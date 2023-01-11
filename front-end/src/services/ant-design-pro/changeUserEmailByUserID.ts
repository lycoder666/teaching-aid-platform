import { request } from 'umi';

const changeUserEmailByUserID = async (userID: number, newEmail: string) => {
  return request<boolean>(`/api/changeUserEmailByUserID/${userID}/`, {
    method: 'POST',
    data: {
      newEmail: newEmail,
    },
  });
};

export default changeUserEmailByUserID;
