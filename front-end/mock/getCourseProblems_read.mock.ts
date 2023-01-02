// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /getCourseProblems/{id}/': (req: Request, res: Response) => {
    res.status(200).send({
      id: 67,
      problemList: [
        {
          id: 92,
          mark: [
            { id: 84, labelName: '指向一标连设须与受所来地也组易不。' },
            { id: 80, labelName: '程一难根两行情等油着层去长型带事置路。' },
          ],
          problemName: '什六化比海青青一层查一或离知。',
          createdAt: 90,
          changedAt: 96,
          isSolved: true,
        },
        {
          id: 92,
          mark: [
            { id: 72, labelName: '影展想题研少值同式年流条住界。' },
            { id: 87, labelName: '四观断会局建是必层委少满位路矿志表。' },
          ],
          problemName: '酸具然长即而九认青党积认满专。',
          createdAt: 69,
          changedAt: 96,
          isSolved: true,
        },
        {
          id: 96,
          mark: [
            { id: 71, labelName: '话叫县一深经确则观加要思华务象品。' },
            { id: 79, labelName: '就解装四后要观连总约由为心设难间。' },
          ],
          problemName: '压阶同管器要员人并示器力想。',
          createdAt: 74,
          changedAt: 94,
          isSolved: true,
        },
        {
          id: 75,
          mark: [
            { id: 99, labelName: '放具地张构却了期活名听感段设。' },
            { id: 92, labelName: '太学题数情主列区上争度时身命指数从界。' },
          ],
          problemName: '亲常公中提体中常然志关华品经达张从得。',
          createdAt: 86,
          changedAt: 70,
          isSolved: true,
        },
      ],
    });
  },
};
