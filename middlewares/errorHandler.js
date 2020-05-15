const errorHandler = {
  error(app, logger) {
    //处理异常
    app.use(async (ctx, next) => {
      try{
        await next();
      }catch(err){
        logger.error(err);
        // console.log('----------------------'+ctx.status)
        ctx.status = ctx.status || 500;
        ctx.body = "500请求啦 😭";
      }
    });

    //专门处理404
    app.use(async (ctx, next) => {
      await next();
      if(404 !== ctx.status){
        return
      }
      ctx.status = 200;//网站经常404，百度收录 会降权
      ctx.body = `<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>`
    });
  },
};
module.exports = errorHandler;
