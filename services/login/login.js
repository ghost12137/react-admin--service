const {
  userMessage,
  roleList
} = require('../../datas/admin/users');

const {
  getUserByName,
} = require('../../lib/action/user');

module.exports = {
  checkLogin: async (body) => {
    const {
      name,
      password
    } = body;
    let loginMsg = '用户名不存在';
    let loginStatus = 400;
    let userData;
    const user = await getUserByName(name);

    if (user) {
      const userValue = user.dataValues;
      if (userValue.password === password) {
        loginMsg = '登陆成功';
        loginStatus = 200;
        userData = userValue;
      } else {
        loginMsg = '密码错误';
      }
    }
    return {
      status: loginStatus,
      message: loginMsg,
      data: userData
    };
  },
};