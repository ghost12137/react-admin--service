const jsonwebtoken = require('jsonwebtoken');
const {
  secretKey
} = require('../constants/common');

const checkToken = async (ctx, next) => {
  const url = ctx.request.url;
  if (url === '/api/login') {
    await next();
  } else {
    // 规定token写在header中的'sec_token'
    try {
      const token = ctx.request.headers['sec_token'];
      await jsonwebtoken.verify(token, secretKey, (err) => {
        if (err) {
          throw err;
        }
      });
      await next();
    } catch (error) {
      let status = 400;
      let message = '';
      switch (error.name) {
        case 'JsonWebTokenError':
          message = '无效的token';
          break;
        case 'TokenExpiredError':
          status = 401;
          message = '登录状态已过期，请重新登录';

      }
      ctx.status = status;
      ctx.body = {
        status: status,
        message: message
      };
      // await next();
    }
  }
};

module.exports = checkToken;