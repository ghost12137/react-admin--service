const UploadService = require('../../services/admin/upload');

module.exports = {
  uploadPic: async (ctx, next) => {
    const result = await UploadService.uploadPic(ctx);
    ctx.status = result.status;
    ctx.response.body = result;
  },
  getPics: async (ctx, next) => {
    const result = await UploadService.getPics();
    ctx.status = result.status;
    ctx.response.body = result;
  },
};