import { request } from 'umi';

const addLabel = async (labelName: string) => {
  return request<API.TLabel>('/api/addLabel/', {
    method: 'POST',
    data: {
      labelName: labelName,
    },
  });
};

export default addLabel;
