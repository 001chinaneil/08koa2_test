const Koa = require('koa');
const app = new Koa();

app.use( async ( ctx ) => {
    let url = ctx.request.url;
    ctx.body = url;
});

app.listen(3006,()=>{
    console.log("[demo] coding runing at port 3006");
});