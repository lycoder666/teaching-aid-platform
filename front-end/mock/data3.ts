export default {
  'POST /api/loginTest': (req: any, res: any) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') {
      res.send({
        status: 'ok',
        currentAuthority: 'admin',
      });
      return;
    } else {
      res.send({
        status: 'error',
        currentAuthority: 'guest',
      });
      return;
    }
  },
};
