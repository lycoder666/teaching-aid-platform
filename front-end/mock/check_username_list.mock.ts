// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /check_username/': (req: Request, res: Response) => {
    res.status(200).send(false);
  },
};
