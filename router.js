const Router = require('koa-router');
const AdminUsersController = require('./controller/admin/users');

const router = new Router();

module.exports = app => {
  router.get('/api/admin/users', AdminUsersController.getUsers);
  router.post('/api/admin/users', AdminUsersController.createUser);
  router.put('/api/admin/users', AdminUsersController.updateUser);
  router.delete('/api/admin/users', AdminUsersController.deleteUser);
  app.use(router.routes())
    .use(router.allowedMethods());
};