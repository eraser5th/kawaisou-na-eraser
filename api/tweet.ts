import { VercelRequest, VercelResponse } from '@vercel/node';
import TwitterApi from 'twitter-api-v2';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const apiKey = process.env.API_KEY;
  if (apiKey === undefined) {
    console.log('apiKey is undefined だよーん');
    res.status(502);
    return;
  }
  const apiSecret = process.env.API_KEY_SECRET;
  if (apiSecret === undefined) {
    console.log('api-key-secret is undefined だよーん');
    res.status(502);
    return;
  }
  const accessToken = process.env.ACCESS_TOKEN;
  if (accessToken === undefined) {
    console.log('access-token is undefined だよーん');
    res.status(502);
    return;
  }
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
  if (accessTokenSecret === undefined) {
    console.log('access-token-secret is undefined だよーん');
    res.status(502);
    return;
  }
  const bearerToken = process.env.BEARER_TOKEN;
  if (bearerToken === undefined) {
    console.log('bearer token is undefined');
    res.status(502);
    return;
  }
  const twitterClient = new TwitterApi({
    appKey: apiKey,
    appSecret: apiSecret,
    accessSecret: accessTokenSecret,
    accessToken,
  });
  const tweetRes = await twitterClient.v2.tweet('まつもとせんぱーーーい(Made from ERASER)');
  console.log(tweetRes);
  res.status(200).json({
    body: tweetRes,
    query: req.query,
    cookies: req.cookies,
  });
}
