const AdminUsersService = require('../../services/admin/users');

module.exports = {
  getUsers: async (ctx, next) => {
    const data = await AdminUsersService.getUserList(ctx.request.query);
    ctx.response.body = data;
  },
};