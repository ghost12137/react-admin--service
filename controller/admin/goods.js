const AdminGoodsService = require('../../services/admin/goods');

module.exports = {
  getGoods: async (ctx, next) => {
    const goodList = await AdminGoodsService.getGoodList(ctx.request.query);
    ctx.status = goodList.status;
    ctx.response.body = goodList;
  },
  createGood: async (ctx, next) => {
    const result = await AdminGoodsService.createGood(ctx);
    ctx.status = result.status;
    ctx.response.body = result;
  },
  updateGood: async (ctx, next) => {
    const result = await AdminGoodsService.updateGood(ctx);
    ctx.status = result.status;
    ctx.response.body = result;
  },
  deleteGood: async (ctx, next) => {
    const { id } = ctx.request.body;
    const result = await AdminGoodsService.deleteGood(id);
    ctx.status = result.status;
    ctx.response.body = result;
  },
};