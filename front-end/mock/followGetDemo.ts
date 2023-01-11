import { Request, Response } from 'express';

const getDemo = (req: Request, res: Response) => {
  res.json({
    data: [
      {
        message: 'this is official style',
      },
    ],
  });
};

export default {
  'GET /api/getDemo': getDemo,
};
