// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

const getCourseProblems = async (courseID: number) => {
  return request<number[]>(`/api/getCourseProblems/${courseID}/`);
};

/** 此处后端没有提供注释 GET /getCourseProblems/${param0}/ */
// export async function getCourseProblemsRead(
//   // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
//   params: API.getCourseProblemsReadParams,
//   options?: { [key: string]: any },
// ) {
//   const { id: param0, ...queryParams } = params;
//   return request<API.TProblemList>(`/getCourseProblems/${param0}/`, {
//     method: 'GET',
//     params: { ...queryParams },
//     ...(options || {}),
//   });
// }
export default getCourseProblems;
