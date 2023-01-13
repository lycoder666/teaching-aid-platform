// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /init/ */
export async function initList(options?: { [key: string]: any }) {
  return request<any>('/api/init/', {
    method: 'GET',
    ...(options || {}),
  });
}
