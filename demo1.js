const Koa = require('koa');
const app = new Koa();

app.use(async( ctx ) => {
    let url = ctx.url;

    //从request中获取GET请求
    let request = ctx.request;
    let req_query = request.query;
    let req_string = request.querystring;

    //从上下文获取
    let ctx_query = ctx.query;
    let ctx_string = ctx.querystring;

    ctx.body = {
        url,
        req_query,
        req_string,
        ctx_query,
        ctx_string
    }
});

app.listen(3001,()=>{
    console.log("[demo] 监听3000端口");
});