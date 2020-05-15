const errorHandler = {
  error(app, logger) {
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