const Router = require('koa-router');
const AdminUsersController = require('./controller/admin/users');

const router = new Router();

module.exports = app => {
  router.get('/api/admin/users', AdminUsersController.getUsers);
  app.use(router.routes())
    .use(router.allowedMethods());
};