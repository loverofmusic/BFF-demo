class IndexController {
  constructor() {}
  // async actionIndex(ctx, next) {
  //   ctx.body = await ctx.render('index',{
  //     data: "zxcc"
  //   });
  // }
  async actionIndex(ctx, next) {
    ctx.body = await ctx.render('index-vue');
  }
}
module.exports = IndexController;
