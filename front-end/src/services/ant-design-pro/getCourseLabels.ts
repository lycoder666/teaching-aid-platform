// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /getCourseLabels/${param0}/ */
export async function getCourseLabelsRead(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCourseLabelsReadParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CourseLabelList>(`/getCourseLabels/${param0}/`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
