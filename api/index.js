Object.defineProperty(exports, '__esModule', { value: true });
function handler(req, res) {
  res.status(200).json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  });
}
exports.default = handler;
