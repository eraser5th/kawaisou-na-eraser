export default function handler(req: any, res: any) {
  res.status(200).json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  });
}
