// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /regist/': (req: Request, res: Response) => {
    res.send(true);
  },
};
