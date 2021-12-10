const LoginService = require('../../services/login/login');
const jsonwebtoken = require('jsonwebtoken');
const {
  secretKey,
  expiresTime
} = require('../../constants/common');
module.exports = {
  userLogin: async (ctx, next) => {
    const loginData = ctx.request.body;
    const result = await LoginService.checkLogin(loginData);
    let token = '';
    if (result.status === 200) {
      token = jsonwebtoken.sign({
          ...result.data,
        },
        secretKey, {
          expiresIn: expiresTime
        });
    }
    ctx.status = result.status;
    ctx.body = {
      ...result,
      data: result.status !== 200 ? null : {
        token,
        ...result.data
      },
    };
  }
};