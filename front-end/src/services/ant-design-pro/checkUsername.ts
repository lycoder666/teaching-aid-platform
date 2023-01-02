// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** :param :'username'

:return :{
        'statecode'(0:failed,1:succeed),
        'exist'(true:exist same name in db,false:no same name in db)
        } GET /check_username/ */
export async function checkUsername(username: string, options?: { [key: string]: any }) {
  return request<any>('/check_username/', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    data: username,
    ...(options || {}),
  });
}
