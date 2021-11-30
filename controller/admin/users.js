const AdminUsersService = require('../../services/admin/users');

module.exports = {
  getUsers: async (ctx, next) => {
    const data = await AdminUsersService.getUserList(ctx.request.query);
    ctx.response.body = data;
  },
  createUser: async (ctx, next) => {
    const body = ctx.request.body;
    const result = await AdminUsersService.createUser(body);
    ctx.status = result.status;
    ctx.response.body = result;
  },
  updateUser: async (ctx, next) => {
    const body = ctx.request.body;
    const result = await AdminUsersService.updateUser(body);
    ctx.status = result.status;
    ctx.response.body = result;
  },
  deleteUser: async (ctx, next) => {
    const body = ctx.request.body;
    const result = await AdminUsersService.deleteUser(body);
    if (result.data === 'no-user') {
      ctx.status = 400;
      ctx.body = {
        code: 400,
        message: '未找到该用户'
      };
    } else {
      ctx.response.body = result;
    }
  },
};