// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /getCourseDetail/ */
export async function getCourseDetailList(options?: { [key: string]: any }) {
  return request<API.CourseInfo[]>('/getCourseDetail/', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /getCourseDetail/ */
export async function getCourseDetailCreate(
  body: API.CourseInfo,
  options?: { [key: string]: any },
) {
  return request<any>('/getCourseDetail/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /getCourseDetail/${param0}/ */
export async function getCourseDetailRead(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCourseDetailReadParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CourseInfo>(`/getCourseDetail/${param0}/`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /getCourseDetail/${param0}/ */
export async function getCourseDetailDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCourseDetailDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/getCourseDetail/${param0}/`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
