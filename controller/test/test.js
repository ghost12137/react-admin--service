module.exports = {
  helloWorld: async (ctx, next) => {
    ctx.status = 200;
    ctx.response.body = {
      status: 200,
      data: 'hello world'
    };
  },
};