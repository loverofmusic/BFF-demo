class IndexController {
  constructor(){

  }
  async actionIndex(ctx, next){
    ctx.body = {
      "data": "index页"
    }
  }
}
module.exports = IndexController;