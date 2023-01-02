// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /getProblemSolutions/${param0}/ */
export async function getProblemSolutionsRead(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProblemSolutionsReadParams,
  options?: { [key: string]: any },
) {
  const { problemId: param0, ...queryParams } = params;
  return request<API.ProblemSolutionList>(`/getProblemSolutions/${param0}/`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
