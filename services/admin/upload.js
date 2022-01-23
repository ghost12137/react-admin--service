const mime = require('mime-types');
const path = require('path');
const fs = require('fs');

module.exports = {
  uploadPic: (ctx) => {
    const imgFileList = ctx.request.files.imgFileList;
    console.log(imgFileList)
    if (imgFileList) {
      return {
        status: 200,
        data: '上传成功'
      };
    } else {
      return {
        status: 400,
        message: '上传失败'
      };
    }
  },
  getPics: async (ctx, next) => {

    // 返回图片buffer
    //#region 
    const baseDir = __dirname.split(/[/|\\]/);
    baseDir.pop();
    baseDir.pop();
    const filePath = baseDir.join('/') + '/public/images/school-2.jpg';
    let file = null;
    try {
      file = fs.readFileSync(filePath);
    } catch (error) {
      return {
        status: 400,
        message: '未找到该图片'
      };
    }
    let mimeType = mime.lookup(filePath);
    return {
      status: 200,
      mimeType,
      data: file
    };
    //#endregion
  },
};