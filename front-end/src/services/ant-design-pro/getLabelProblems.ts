// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /getLabelProblems/${param0}/ */
export async function getLabelProblemsRead(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getLabelProblemsReadParams,
  options?: { [key: string]: any },
) {
  const { labelId: param0, ...queryParams } = params;
  return request<API.TProblemList>(`/getLabelProblems/${param0}/`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
