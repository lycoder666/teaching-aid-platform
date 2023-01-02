// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /regist/ */
export async function registCreate(body: API.RegistInfo, options?: { [key: string]: any }) {
  return request<boolean>('/regist/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: body,
    ...(options || {}),
  });

}
