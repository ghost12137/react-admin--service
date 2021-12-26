const UploadService = require('../../services/admin/upload');

const { uploads } = require('../../utils/upload');

const imgUpload = uploads('/uploads/images', 8 * 1024 * 500, 4);

module.exports = {
  uploadPic: async (ctx, next) => {
    const error = await imgUpload.fields([{
      name: 'imgFileList', maxCount: 4
    }])(ctx, next)
      .then(res => res)
      .catch(err => err);

    if (error) {
      console.log(error);
      ctx.status = 500;
      ctx.response.body = {
        status: 500,
        message: '服务器upload 中间件错误'
      };
    } else {
      const result = await UploadService.uploadPic(ctx);
      ctx.status = result.status;
      ctx.response.body = result;
    }
  },
};