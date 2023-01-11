import { request } from 'umi';

const changeUserPriorityByUserID = async (userID: number, newPriority: number) => {
  return request<boolean>(`changeUserPriorityByUserID/${userID}/`, {
    method: 'POST',
    data: {
      newPriority: newPriority,
    },
  });
};

export default changeUserPriorityByUserID;
