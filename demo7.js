const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
// const router = new Router({
//     prefix: "/neil"
// });

const home = new Router();
home.get('/',function(ctx,next){
    ctx.body = 'home World';
})
    .get('/todo',function(ctx,next){
    ctx.body = 'home todo page';
});

const page = new Router();
page.get('/',function(ctx,next){
    ctx.body = 'page World';
})
    .get('/todo',function(ctx,next){
        ctx.body = 'page todo page';
    });

//装载所有子路由 (在此加入了层级)
const router = new Router();
router.use("/home",home.routes(),home.allowedMethods());
router.use("/page",page.routes(),page.allowedMethods());

//装载路由中间件
app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3018,function(){
    console.log('[demo] koa router demo running at port 3018');
});