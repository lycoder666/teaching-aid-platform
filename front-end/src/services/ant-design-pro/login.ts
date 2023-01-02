// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** :param POST /login/ */
export async function loginCreate(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/login/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    data: body,
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}
