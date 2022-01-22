### React-admin的node后端
#### 技术
* koa---------------------koa
* koa-router--------------路由中间件
* koa-bodyparser----------解析body中间件(已替换为koa-body)
* koa2-cors---------------cors跨域中间件
* uuid--------------------生成唯一的id
* koa-static--------------静态资源中间件 
* @koa/multer & multer----文件上传中间件

#### 注意
1. 该后端服务需要连接mysql数据库，所以确保运行环境中有mysql。
2. 运行前先将当前项目根目录的config.js中的数据库相关配置改为本地mysql配置
3. 运行使用`yarn start` or `npm run start`