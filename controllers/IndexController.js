class IndexController {
  constructor() {}
  async actionIndex(ctx, next) {
    ctx.body = await ctx.render('index',{
      data: "zxcc"
      // data = 》模拟报错
    });
  }

  // mpa + spa（vue）
  // async actionIndex(ctx, next) {
  //   ctx.body = await ctx.render('index-vue');
  // }
}
module.exports = IndexController;
