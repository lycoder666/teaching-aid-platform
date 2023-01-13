import { request } from 'umi';

//修改点赞信息
export async function modifyLikes(token: string, isLiked: boolean) {
  return request('/api/modifyLikes/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: { token: token, isLiked: isLiked },
  });
}

//修改收藏信息
export async function modifyStared(token: string, isStared: boolean) {
  return request('/api/modifyStared', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: { token: token, isStared: isStared },
  });
}
