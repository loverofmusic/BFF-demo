/*
 * @Author: your name
 * @Date: 2020-04-25 09:55:52
 * @LastEditTime: 2020-04-25 18:41:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /bff/app.js
 */
const moduleAlias = require('module-alias')
moduleAlias.addAliases({
  '@root': __dirname,
  '@controllers': __dirname + '/controllers',
  '@models': __dirname + '/models'

})
const Koa = require('koa');
const { port } = require('./config');
console.log('环境测试', process.env.NODE_ENV);
const app = new Koa();
//路由注册中心
require("./controllers")(app);
app.listen(port, () => {
  console.log('服务启动成功');
});
