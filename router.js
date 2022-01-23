const Router = require('koa-router');
const TestController = require('./controller/test/test');
const UploadController = require('./controller/admin/upload');
const AdminUsersController = require('./controller/admin/users');
const AdminGoodsController = require('./controller/admin/goods');
const LoginController = require('./controller/login/login');
const checkToken = require('./middelware/checkToken');
const { koaBody } = require('./utils/utils');

const router = new Router();

module.exports = app => {
  router.get('/test/hello', TestController.helloWorld);

  app.use(checkToken);
  app.use(koaBody);

  router.post('/api/login', LoginController.userLogin);

  router.post('/api/admin/uploadPic', UploadController.uploadPic);
  router.get('/api/admin/pics', UploadController.getPics);

  router.get('/api/admin/roleList', AdminUsersController.getRoleList);
  router.get('/api/admin/users', AdminUsersController.getUsers);
  router.post('/api/admin/users', AdminUsersController.createUser);
  router.put('/api/admin/users', AdminUsersController.updateUser);
  router.delete('/api/admin/users', AdminUsersController.deleteUser);

  router.get('/api/admin/goods', AdminGoodsController.getGoods);
  router.post('/api/admin/goods', AdminGoodsController.createGood);
  router.put('/api/admin/goods', AdminGoodsController.updateGood);
  router.delete('/api/admin/goods', AdminGoodsController.deleteGood);

  app.use(router.routes())
    .use(router.allowedMethods());
};