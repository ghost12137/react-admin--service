const multer = require('@koa/multer');
const { extname } = require('path');
const path = require('path');
const uuid = require('uuid');

const defaultFileSize = 8 * 1024 * 1024;

const uploads = (filePath, fileSize, filesCount, fields, fileName) => {
  if (filePath) {
    // 上传文件存放路径、以及文件命名
    const storage = multer.diskStorage({ // multer调用diskStorage可控制磁盘存储引擎
      destination(req, file, cb) {
        const baseDir = __dirname.split('\\');
        baseDir.pop();
        cb(null, path.join(baseDir.join('\\'), filePath));
      },
      filename(req, file, cb) {
        const extName = path.extname(file.originalname);
        const newFileName = fileName ? fileName : uuid.v4();
        cb(null, newFileName + extName);
      },
    });
    const limits = {
      fields: fields ? fields : 10, // 非文件字段的数量
      fileSize: fileSize ? fileSize : defaultFileSize,//文件大小 单位 b
      files: filesCount ? filesCount : Infinity // 	在 multipart 表单中，文件最大数量
    };

    return multer({
      storage,
      limits
    });
  } else {
    throw new Error('上传文件的存放路径未设置');
  }
};

module.exports = {
  uploads
};