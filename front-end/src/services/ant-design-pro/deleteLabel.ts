import { request } from 'umi';

const deleteLabel = async (labelID: number) => {
  return request<boolean>(`/api/deleteLabel/${labelID}/`, {
    method: 'POST',
  });
};

export default deleteLabel;
