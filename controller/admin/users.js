const AdminUsersService = require('../../services/admin/users');

module.exports = {
  getRoleList: async (ctx, next) => {
    const result = AdminUsersService.getRoleList();
    ctx.status = result.status;
    ctx.response.body = result;
  },
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
    ctx.status = result.status;
    ctx.response.body = result;
  },
};