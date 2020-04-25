/*
 * @Author: nebulas
 * @Date: 2020-04-25 14:44:16
 * @LastEditTime: 2020-04-25 17:15:55
 * @Description: 实现Books数据模型
 * @FilePath: /bff/models/Books.js
 */

/**
 * @description: Books的类 获取后台图书相关数据的类
 */ 
class Books {
  /**
   * @param {object} app koa2的执行上下文 
   */
  constructor(app){
    this.app = app;
  }
  /**
   * @description: 获取后台全部图书列表的接口
   * @param {*} options 配置项 
   */
  getData(options){ 
    return Promise.resolve("数据请求成功");
  }
}

module.exports = Books;