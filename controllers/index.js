const router = require('koa-simple-router');
const BooksController = require("@controllers/BooksController");
const booksController = new BooksController();
const IndexController = require("@controllers/IndexController");
const indexController = new IndexController();
module.exports = (app) => {
  app.use(
    router((_) => {
      _.get('/', indexController.actionIndex);
      _.get('/books/list', booksController.actionIndex);
    })
  );
};
