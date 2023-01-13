// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/rule': (req: Request, res: Response) => {
    res.status(200).send({
      data: [
        {
          key: 86,
          disabled: false,
          href: 'https://github.com/umijs/dumi',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          name: '邓娜',
          owner: 'Hall',
          desc: '广下装指形装带员领共用养毛能期支式。',
          callNo: 84,
          status: 61,
          updatedAt: '4mWESWB',
          createdAt: '(exo',
          progress: 84,
        },
        {
          key: 75,
          disabled: true,
          href: 'https://preview.pro.ant.design/dashboard/analysis',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          name: '梁艳',
          owner: 'Garcia',
          desc: '建意大接中断存机南体国治如走你。',
          callNo: 79,
          status: 87,
          updatedAt: 'q*ef',
          createdAt: 'fr5(xw',
          progress: 83,
        },
        {
          key: 79,
          disabled: true,
          href: '',
          avatar: 'https://avatars0.githubusercontent.com/u/507615?s=40&v=4',
          name: '马杰',
          owner: 'Jackson',
          desc: '他又题这可装引应按非特议。',
          callNo: 75,
          status: 93,
          updatedAt: 'hoCh',
          createdAt: '%t@lKk',
          progress: 81,
        },
      ],
      total: 81,
      success: true,
    });
  },
};
