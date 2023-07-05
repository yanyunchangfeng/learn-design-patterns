/**
 * 正向代理和反向代理
 *
 * 正向代理 是内网访问外网
 * 反向代理 是外网访问内网
 */
export {};
let http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();
let server = http.createServer(function (req: any, res: any) {
  //跨域代理
  proxy.web(req, res, {
    target: 'http://127.0.0.1:9999'
  });
});
server.listen(8888, () => console.log('8888'));
