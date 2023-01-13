import { request } from 'umi';

const deleteComment = async (commentID: number) => {
  return request<boolean>(`/api/deleteComment/${commentID}/`, {
    method: 'POST',
  });
};

export default deleteComment;
