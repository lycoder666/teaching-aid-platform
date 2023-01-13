// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /getUserCourses/(\\d+)': (req: Request, res: Response) => {
    res.send({
      id: 1,
      study: [
        {
          courseId: 1,
          courseName: '算法',
        },
        {
          courseId: 2,
          courseName: '生物',
        },
        {
          courseId: 3,
          courseName: '物理',
        },
        {
          courseId: 4,
          courseName: '数学',
        },
        {
          courseId: 5,
          courseName: '化学',
        },
        {
          courseId: 6,
          courseName: '地理',
        },
        {
          courseId: 7,
          courseName: '分高爬',
        },
      ],
    });
  },
};
