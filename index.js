//1
// const Koa = require('koa');
// const app = new Koa();
//
// app.use( async(ctx) => {
//     ctx.body = 'hello koa2';
// });
//
// app.listen(3000);
// console.log("start-quick is starting at port 3000");

//2
// async function test(){
//     return "hello koa";
// }
//
// function something(){
//     return 'something';
// }
//
// async function test_await(){
//     let v1 = test();
//     let v2 = something();
//     console.log(v1,v2);
// }
//
// test_await();

//3
function takeLongTime(){
    return new Promise(resolve => {
        setTimeout(() => resolve("long time out "),1000);
    });
}

async function test_async_await(){
    let v = await takeLongTime();
    console.log(v);
}

test_async_await();