const {
  userMessage,
  roleList
} = require('../../datas/admin/users');

module.exports = {
  checkLogin: async (body) => {
    const {
      name,
      password
    } = body;
    let loginMsg = '用户名不存在';
    let loginStatus = 400;
    let userData;
    userMessage.forEach(user => {
      if (user.name === name) {
        if (user.password === password) {
          loginMsg = '登陆成功';
          loginStatus = 200;
          userData = user
        } else {
          loginMsg = '密码错误';
        }
      }
    });
    return {
      status: loginStatus,
      message: loginMsg,
      data: userData
    };
  },
};