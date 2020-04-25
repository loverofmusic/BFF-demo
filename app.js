const Koa = require('koa');
const { port } = require('./config');
console.log('环境测试', process.env.NODE_ENV);
const app = new Koa();

app.listen(port, () => {
  console.log('服务启动成功');
});
