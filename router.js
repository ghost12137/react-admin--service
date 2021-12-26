const Router = require('koa-router');
const UploadController = require('./controller/admin/upload');
const AdminUsersController = require('./controller/admin/users');
const LoginController = require('./controller/login/login');
const checkToken = require('./middelware/checkToken');

const router = new Router();

module.exports = app => {
  app.use(checkToken);
  router.post('/api/login', LoginController.userLogin);
  router.post('/api/admin/uploadPic', UploadController.uploadPic);
  router.get('/api/admin/roleList', AdminUsersController.getRoleList);
  router.get('/api/admin/users', AdminUsersController.getUsers);
  router.post('/api/admin/users', AdminUsersController.createUser);
  router.put('/api/admin/users', AdminUsersController.updateUser);
  router.delete('/api/admin/users', AdminUsersController.deleteUser);
  app.use(router.routes())
    .use(router.allowedMethods());
};