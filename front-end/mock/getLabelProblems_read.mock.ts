// @ts-ignore
import { Request, Response } from 'umi';

export default {
  'GET /api/getLabelProblems/(\\d+)': (req: Request, res: Response) => {
    res.status(200).send({
      id: 66,
      markProblem: [
        {
          id: 77,
          problemName: '织放空片管外养山置先被切。',
          isSolved: false,
          changedAt: 93,
          createdAt: 64,
        },
      ],
    });
  },
};
