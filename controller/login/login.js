const LoginService = require('../../services/login/login');
const jsonwebtoken = require('jsonwebtoken');

const secretKey = 'token';
const expiresTime = 1000 * 60 * 2;

module.exports = {
  secretKey,
  userLogin: async (ctx, next) => {
    const loginData = ctx.request.body;
    const result = await LoginService.checkLogin(loginData);
    let token = '';
    if (result.status === 200) {
      token = jsonwebtoken.sign(
        result.data,
        secretKey, {
          expiresIn: expiresTime
        });
    }
    ctx.status = result.status;
    ctx.response.body = {
      status: result.status,
      data: {
        token,
        ...result.data
      },
    };
  }
};