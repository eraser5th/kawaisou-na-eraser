import { VercelRequest, VercelResponse } from '@vercel/node';
import Twitter from 'twitter';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const apiKey = process.env['api-key'];
  if (apiKey === undefined) {
    console.log('apiKey is undefined だよーん');
    res.status(502);
    return;
  }
  const apiSecret = process.env['api-key-secret'];
  if (apiSecret === undefined) {
    console.log('apiKey is undefined だよーん');
    res.status(502);
    return;
  }
  const accessToken = process.env['access-token'];
  if (accessToken === undefined) {
    console.log('apiKey is undefined だよーん');
    res.status(502);
    return;
  }
  const accessTokenSecret = process.env['access-token-secret'];
  if (accessTokenSecret === undefined) {
    console.log('apiKey is undefined だよーん');
    res.status(502);
    return;
  }
  const client = new Twitter({
    consumer_key: apiKey,
    consumer_secret: apiSecret,
    access_token_key: accessToken,
    access_token_secret: accessTokenSecret,
  });
  client.post('statuses/update', { status: 'Hello World from Node' }, (error, rs, rq) => {
    if (error) {
      console.log(error);
      console.log('tweetに失敗しちゃったよーん');
      res.status(502);
    } else {
      console.log('tweetでけた!!!');
      console.log(rs, rq);
    }
  });
  res.status(200).json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  });
}