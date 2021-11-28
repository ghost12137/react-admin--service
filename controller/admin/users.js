const AdminUsersService = require('../../services/admin/users');

module.exports = {
  getUsers: async (ctx, next) => {
    const data = await AdminUsersService.getUserList(ctx.request.query);
    ctx.response.body = data;
  },
  deleteUsers: async (ctx, next) => {
    const body = ctx.request.body;
    const result = await AdminUsersService.deleteUser(body);
    ctx.response.body = result;
  },
};