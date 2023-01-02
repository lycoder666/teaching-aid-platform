// @ts-ignore
import { Request, Response } from 'express';

export default {
  'PUT /api/rule': (req: Request, res: Response) => {
    res.status(200).send({
      key: 79,
      disabled: false,
      href: 'https://umijs.org/',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      name: '萧静',
      owner: 'Gonzalez',
      desc: '选车照规布型把全元发党同机根。',
      callNo: 65,
      status: 63,
      updatedAt: '5JjFn2',
      createdAt: 'Va&Uz3',
      progress: 91,
    });
  },
};
