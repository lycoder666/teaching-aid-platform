// eslint-disable-next-line import/no-extraneous-dependencies
import type { Request, Response } from 'express';

export default {
  'GET  /api/getLikes': (_: Request, res: Response) => {
    res.send({
      data: 777
    });
  },

  'GET  /api/getMessages': (_: Request, res: Response) => {
    res.send({
      Messages: 6
    });
  },
  'GET /api/getSolutionList': (_: Request, res: Response) => {
    res.send(
      {
        data:[
        {
          solutionId: 1,
          title: '滑动窗口',
          content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), \' +\n' +
            '    \'to help people create their product prototypes beautifully and efficiently. help people create their product prototypes beautifully and efficiently. ' +
            'help people create their product prototypes beautifully and efficiently. help people create their product prototypes beautifully and efficiently.\',',
          likes: 6,
          isLiked: true,
          isStared: false,
          isChecked: true
        },
        {
          solutionId: 2,
          title: 'buffers2',
          content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), \' +\n' +
            '    \'to help people create their product prototypes beautifully and efficiently. help people create their product prototypes beautifully and efficiently. ' +
            'help people create their product prototypes beautifully and efficiently. help people create their product prototypes beautifully and efficiently.\',',
          likes: 7,
          isLiked: true,
          isStared: true,
          isChecked: false
        },
        {
          solutionId: 3,
          title: '无重复字符串',
          content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), \' +\n' +
            '    \'to help people create their product prototypes beautifully and efficiently. help people create their product prototypes beautifully and efficiently. ' +
            'help people create their product prototypes beautifully and efficiently. help people create their product prototypes beautifully and efficiently.\',',
          likes: 67,
          isLiked: false,
          isStared: false,
          isChecked: true
        },
          {
            solutionId: 4,
            title: 'buffers4',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), \' +\n' +
              '    \'to help people create their product prototypes beautifully and efficiently. help people create their product prototypes beautifully and efficiently. ' +
              'help people create their product prototypes beautifully and efficiently. help people create their product prototypes beautifully and efficiently.\',',
            likes: 44,
            isLiked: false,
            isStared: true,
            isChecked: false
          },
          {
            solutionId: 5,
            title: 'buffers5',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), \' +\n' +
              '    \'to help people create their product prototypes beautifully and efficiently. help people create their product prototypes beautifully and efficiently. ' +
              'help people create their product prototypes beautifully and efficiently. help people create their product prototypes beautifully and efficiently.\',',
            likes: 55,
            isLiked: true,
            isStared: false,
            isChecked: true
          },
      ]});
  }
}
