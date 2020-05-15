const moduleAlias = require('module-alias');
moduleAlias.addAliases({
  '@root': __dirname,
  '@controllers': __dirname + '/controllers',
  '@models': __dirname + '/models',
});

const Koa = require('koa');
const render = require('koa-swig');
const { port, viewDir, staticDir } = require('./config');

const co = require('co');
const log4js = require('log4js');
const app = new Koa();
const serverStatic = require('koa-static');
const errorHandler = require('./middlewares/errorHandler.js');
// const historyApiFallback = require('koa-history-api-fallback');

// console.log(staticDir);

//log4js
log4js.configure({
  appenders: {
    cheese: {
      type: 'file',
      filename: './logs/yd.log',
    },
  },
  categories: {
    default: {
      appenders: ['cheese'],
      level: 'error',
    },
  },
});

const logger = log4js.getLogger('cheese');
logger.error('错误日志监听成功')

//静态资源
app.use(serverStatic(staticDir));

// app.use(historyApiFallback({ index: '/', whiteList: ['/api'] }));

// koa-swig 模版引擎渲染
app.context.render = co.wrap(
  render({
    root: viewDir,
    autoescape: true,
    cache: process.env.NODE_ENV == 'development' ? false : 'memory', // disable, set to false
    ext: 'html',
    writeBody: false,
    varControls: ['[[', ']]'],
  })
);

errorHandler.error(app, logger);
//路由注册中心
require('./controllers')(app);

app.listen(port, () => {
  console.log(`server starting at:${port}`);
});
