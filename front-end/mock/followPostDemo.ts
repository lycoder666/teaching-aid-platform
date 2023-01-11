import { Request, Response } from 'umi';

const postDemo = (req: Request, res: Response) => {
  const body = req.body;
  const { username, password } = body;
  if (username === 'admin' && password === 'admin') {
    res.send({
      id: 0,
      username: 'admin',
      status: 'ok',
      currentAuthority: 'admin',
    });
  } else if (username === 'alex' && password === '123') {
    res.send({
      id: 1,
      username: 'alex',
      status: 'ok',
      currentAuthority: 'user',
    });
  } else {
    res.send({
      id: -1,
      status: 'error',
      currentAuthority: 'guest',
    });
  }
};

export default {
  'POST /api/postDemo': postDemo,
};
