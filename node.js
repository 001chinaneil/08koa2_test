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
* 3.重点是app.use(async(ctx) => {
*   //从request中获取GET请求
    let request =ctx.request;
    let req_query = request.query;
    let req_querystring = request.querystring;

    //从上下文中直接获取
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;

    ctx.body={
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
* });
* */

//第四节 POST请求的接收(1)
/*
* 1.获取POST请求参数的步骤
*   a.解析上下文ctx中的原生node.js对象req。
*   b.将post表单数据解析成query string--字符串形式。
*   c.再把字符串形式解析成JSON格式。
* 2.ctx.request 和 ctx.req的区别
*   a.ctx.request是Koa2封装好的解析参数的方法，更简单。
*   b.ctx.req是原生node.js http对象，里面的信息更全，方便深度编程。
* 3.ctx.method可以得到请求的类型是GET还是POST。
* */

//第五节 POST请求的接收(2)(学不下去了，先把潜在需求处理下，去掉一个心病。)(需要细致的理解编码一遍)
/*
* 1.
* */

//第六节 koa-bodyparser中间件
/*
* 1.koa-bodyparser中间件可以把koa2的formData数据解析到ctx.request.body。
* 2.在文件头部引入koa-bodyparser，
* 3.并使用: app.use(bodyparser());
* 4.Koa是一个基于Node平台的后端框架
* */

//第七节 Koa2原生路由的实现
/*
* 1.ctx.request.url可以获得访问路径
* 2.根据请求的url获取本地文件，再把文件返回给浏览器。
* 3.用到了fs文件系统 fs.readFile("文件路径","binary",function(){}); //binary代表二进制数据格式
* */

