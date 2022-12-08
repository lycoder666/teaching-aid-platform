// eslint-disable-next-line import/no-extraneous-dependencies
import type { Request, Response } from 'express';

export default {
  'POST  /api/login': (_: Request, res: Response) => {
    res.send({
      statecode: 0,
      user: {id: 1, username: 'user', authority: 2, email:'123234@163.com', mobile: 1236783456}, token: 'feoihafgoghnorjffdsfadffgregrhgrtj'
    });
  },
};
