// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /login/': (req: Request, res: Response) => {
    res.send({
      statecode: 0,
      user: {id: 1, username: 'andy6', authority: 2, email:'123234@163.com', mobile: 1236783456}, token: 'feoihafgoghnorjffdsfadffgregrhgrtj'
    });
  },
};
