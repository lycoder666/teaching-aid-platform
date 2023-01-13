import { request } from 'umi';

const changeUserPhoneByUserID = async (userID: number, newPhone: string) => {
  return request<boolean>(`/api/changeUserPhoneByUserID/${userID}/`, {
    method: 'POST',
    data: {
      newPhone: newPhone,
    },
  });
};

export default changeUserPhoneByUserID;
