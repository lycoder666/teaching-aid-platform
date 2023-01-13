// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /getCourseDetail/{id}/': (req: Request, res: Response) => {
    res
      .status(200)
      .send({ id: 92, courseName: '花向拉油素积头清民温由毛提用型济。', instructor: 81 });
  },
};
