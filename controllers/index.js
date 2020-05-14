const router = require('koa-simple-router');
// const BooksController = require("@controllers/BooksController");
const IndexController = require("@controllers/IndexController");
const ApiController = require("@controllers/ApiController");
// const booksController = new BooksController();
const indexController = new IndexController();
const apiController = new ApiController();

module.exports = (app) => {
  app.use(
    router((_) => {
      //前端做业务，后端提供数据，中间webpack代理
      _.get('/', indexController.actionIndex);//负责html页面
      _.get('/api/list', apiController.actionIndex);//负责数据
    })
  );
};
