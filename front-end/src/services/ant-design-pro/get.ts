import { request } from 'umi';

//获得点赞信息
export async function getLikes(id?: number, token: string) {
  return request<API.Likes>('/api/getLikes/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    data: { id: id, token: token },
  });
}

//获得收藏信息
export async function getStared(id?: number, token: string) {
  return request<API.Stared>('/api/getStared/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    data: { id: id, token: token },
  });
}

//获得评论数
export async function getComments(id?: number) {
  return request('/api/getStared/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    data: { id: id },
  });
}
