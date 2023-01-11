import { request } from 'umi';

const changeUserEmailByUserID = async (userID: number, newEmail: string) => {
  return request<boolean>(`changeUserEmailByUserID/${userID}/`, {
    method: 'POST',
    data: {
      newEmail: newEmail,
    },
  });
};

export default changeUserEmailByUserID;
