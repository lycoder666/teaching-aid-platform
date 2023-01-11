// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /getUserCourses/${param0}/ */
export async function getUserCoursesRead(id: number | undefined) {
  // const url = '/getUserCourses/' + String(id) + '/';
  return request<API.UserCourseList>(`/getUserCourses/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/** 此处后端没有提供注释 DELETE /getUserCourses/${param0}/ */
// export async function getUserCoursesDelete(
//   // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
//   params: API.getUserCoursesDeleteParams,
//   options?: { [key: string]: any },
// ) {
//   const { id: param0, ...queryParams } = params;
//   return request<any>(`/getUserCourses/${param0}/`, {
//     method: 'DELETE',
//     params: { ...queryParams },
//     ...(options || {}),
//   });
// }
