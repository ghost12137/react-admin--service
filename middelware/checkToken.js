const jsonwebtoken = require('jsonwebtoken');
const {
  secretKey
} = require('../controller/login/login');

const checkToken = async (ctx, next) => {
  const url = ctx.request.url;
  if (url === '/api/login') {
    await next();
  } else {
    // 规定token写在header中的'sec_token'
    try {
      const token = ctx.request.headers['sec_token'];
      const payload = jsonwebtoken.verify(token, secretKey);
      await next();
    } catch (error) {
      ctx.status = 401;
      ctx.body = {
        status: 401,
        message: '登录状态已过期，请重新登录'
      };
    }
  }
};

module.exports = checkToken;