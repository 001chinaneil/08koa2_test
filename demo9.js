const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app.use(async(ctx)=>{
    if(ctx.url === '/index'){
        ctx.cookies.set("myName233",'neil2');
        ctx.body = "cookie is ok2222222333333";
    }else{
        if( ctx.cookies.get('myName233') ){
            ctx.body = ctx.cookies.get('myName233');
        }else{
            ctx.body = "cookie is none";
        }
    }
});

app.listen(6501,()=>{
    console.log("[demo] koa running at port 6501");
});