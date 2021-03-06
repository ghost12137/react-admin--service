const Koa = require('koa');
const path = require('path');
const staticFiles = require('koa-static');
const cors = require('koa2-cors');
const router = require('./router');
const { whiteList } = require('./ipWhiteList');
const { env } = require("./config");

const app = new Koa();

app.use(staticFiles(path.join(__dirname + '/public/')));
app.use(
  cors({
    origin: (ctx) => { //设置允许来自指定域名请求
      if (/^\/test/.test(ctx.url)) {
        return '*'; // 允许来自所有域名请求
      }

      if (ctx.header.referer) {
        const urlOrigin = new URL(ctx.header.referer).origin;
        if (whiteList.includes(urlOrigin)) {
          return urlOrigin;
        }
      }

      return 'http://localhost:3000'; //只允许http://localhost:3000这个域名的请求
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'sec_token'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
  })
);
router(app);

const port = (env === 'development' ? 9000 : 10004);
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});

module.exports = app;