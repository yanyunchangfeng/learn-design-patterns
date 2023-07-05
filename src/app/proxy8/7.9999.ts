export {};
let http = require('http');
let server = http.createServer(function (req: any, res: any) {
  res.end('9999');
});
server.listen(9999, () => {
  console.log('9999');
});
