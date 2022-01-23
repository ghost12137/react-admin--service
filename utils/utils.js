const path = require('path');
const uuid = require('uuid');
const koaBody = require('koa-body')({
  multipart: true,  // 允许上传多个文件
  strict: false,//设为false 如果启用，则不解析GET，HEAD，DELETE请求，默认为true
  formidable: {
    uploadDir: path.join(__dirname, "/public/"), // 设置文件上传目录
    keepExtensions: true, // 保持文件的后缀
    maxFieldsSize: 8 * 1024 * 500, // 文件上传大小限制
    onFileBegin: (name, file) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      const baseDir = __dirname.split(/[/|\\]/);
      baseDir.pop();
      let fileDir = path.join(baseDir.join('\\'), '/public/files');
      if (isJpgOrPng) {
        fileDir = path.join(baseDir.join('\\'), '/public/images');
      }
      const newFileName = uuid.v1();
      const extname = path.extname(file.name);
      file.name = newFileName + extname;
      file.path = `${fileDir}/${newFileName}${extname}`;
    },
    onError: (error) => {
      app.status = 400;
      console.error(error);
      // 这里可以定义自己的返回内容
      app.body = { code: 400, message: "上传失败", data: {} };
    },
  },
});

module.exports = {
  koaBody
};