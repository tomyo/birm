import {birmsMock} from './birms_mock'

export default (req, res) => {
  if (req.method === 'GET') {
    res.statusCode = 200;
    res.json(birmsMock);
  } else {
    res.statusCode = 405;
  }
  res.end()
};
