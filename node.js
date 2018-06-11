//Koa2 基于Node平台的Web框架 20180610

//第一节 Hello Koa2
/*
* 1.Node类似于Apache/Nginx，是http服务运行环境；
*   MongoDB(非关系型数据库，noSQL)类似于MySQL，是数据库；
*   JS类似于PHP/C#，是后端编程语言；
* 2.监听端口的http服务:
*   a.require('koa');
*   b.new xxx();
*   c.app.use( async(ctx) => {
*       ctx.body = 'hello koa2';
*   });
*   d.app.listen(3000);  //监听端口
* */

//第二节 async/await的使用方法
/*
* 1.async是声明一个方法是异步的，await是等待异步方法完成。
* 2.await一般在等待async方法执行完毕，但是其实await等待的是一个表达式，这个表达式既可以是Promise对象，
*   也可以是普通表达式。
* */

//第三节 GET请求的接收
/*
* 1.可以从上下文ctx接收，也可以从request中接收。
* 2.接收之后返回分2种形式: query(json格式) 和 querystring(字符串格式)；
* 3.重点是app.use(async(ctx) => {});
* */

