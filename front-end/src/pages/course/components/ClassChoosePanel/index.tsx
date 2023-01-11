import React, { useState } from 'react';
import { ProCard } from '@ant-design/pro-components';
import { Card, Col, Row } from 'antd';
import { Link } from 'umi';
import { getUserCoursesRead } from '@/services/ant-design-pro/getUserCourses';
import { useModel } from '@@/plugin-model/useModel';
import { useRequest } from 'umi';

// const {initialState} = useModel('@@initialState')
// let courses;
// const s = async () => {
//     const data = await getUserCoursesRead(initialState.currentUser.id);
//     courses = data.study;
// }

const Classes: React.FC = () => {
  // let courses: API.CourseInfo[] | undefined;
  const { initialState } = useModel('@@initialState');
  // const [CourseLabelList, setCourseLabelList] = useState<API.UserCourseList>()
  const uid = initialState?.currentUser?.id;
  const { data, error, loading } = useRequest(() => {
    return getUserCoursesRead(uid);
  });
  // const d = async () =>{
  //   await getUserCoursesRead(uid).then((d1) => {
  //     // console.log(d1)
  //     courses = d1.study});
  // }
  // const courses = data.study;
  if (error) {
    return <div>Error info</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  // const s = async () => {
  //   const data = await getUserCoursesRead(uid);
  //   // console.log('data', data);
  //   setCourseLabelList(data)
  // }
  // const d = s();
  // console.log('courses', courses)
  // d();
  // console.log('fdsfd', typeof courses)
  if (data === undefined) {
    return <div>loading</div>;
  }
  const courses = data.study;
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: '0 10px',
        width: 550,
      }}
    >
      {courses.map((course) => (
        <Link to={{ pathname: '/course/problems', state: { courseId: course.courseId } }}>
          <ProCard
            title={course.courseName}
            bordered
            style={{ width: 250, height: 250, marginBottom: 50, borderRadius: 5 }}
          />
        </Link>
      ))}
    </div>
  );
};

export default Classes;
