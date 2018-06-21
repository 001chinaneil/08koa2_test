const Koa = require('koa');
const Path = require('path');
const Static = require('koa-static');

const app = new Koa();
const staticPublic = './static';

app.use(Static(
    Path.join(__dirname,staticPublic)
));

console.log(__dirname);
console.log(Path.join(__dirname,staticPublic));

app.use(async (ctx)=>{
    ctx.body = "hello world";
});

app.listen(3059,()=>{
    console.log("[demo] coding running at port 3059");
});