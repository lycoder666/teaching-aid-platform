import { request } from 'umi';

export interface StateType {
  status?: 'ok' | 'error';
  currentAuthority?: 'user' | 'guest' | 'admin';
}

export interface UserRegisterParams {
  username: string;
  password: string;
  confirm: string;
  mail: string;
}

export async function fakeRegister(params: UserRegisterParams) {
  return request<StateType>('/api/register', {
    method: 'POST',
    data: params,

  });
}
