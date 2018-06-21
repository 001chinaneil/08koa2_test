const Koa = require('koa');
const Router = require("koa-router");
const Views = require('koa-views');
const Path = require('path');

const app = new Koa();

app.use(Views(Path.join(__dirname,'./view'),{
    extension: "ejs"
}));

app.use( async(ctx)=>{
    let title = "hello koa2"
    await ctx.render('index',{
        title
    });
});

app.listen(3054,()=>{
    console.log("[demo] koa running at port 3054");
});