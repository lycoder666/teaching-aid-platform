import { request } from 'umi';

/** 此处后端没有提供注释 GET /getUserCreatedTimeByUserID/${param0}/ */
const getUserCreatedTimeByUserID = async (userID: number) => {
  return request<API.TUserCreatedTime>(`/api/getUserCreatedTimeByUserID/${userID}/`, {
    method: 'GET',
  });
};

export default getUserCreatedTimeByUserID;
