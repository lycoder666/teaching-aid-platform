// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/currentUser': (req: Request, res: Response) => {
    res.status(200).send({
      name: '彭刚',
      avatar: 'https://avatars0.githubusercontent.com/u/507615?s=40&v=4',
      userid: 'fef2Ff37-7769-e0ac-8dDA-aB3fd2F8E9e3',
      email: 'z.brxoekp@vauynu.af',
      signature: '十数党此高条导必料青地组从。',
      title: '美通种什实相容是造其支到群量京。',
      group: '创新科技组',
      tags: [
        { key: 1, label: '专注设计' },
        { key: 2, label: '爱好广泛' },
        { key: 3, label: 'IT 互联网' },
      ],
      notifyCount: 95,
      unreadCount: 88,
      country: '英国',
      access: '约看属特飞步花以两线今见回局每。',
      geographic: { province: { label: '福建省', key: 4 }, city: { label: '新竹市', key: 5 } },
      address: '宁夏回族自治区 石嘴山市 惠农区',
      phone: '11109986446',
    });
  },
};
