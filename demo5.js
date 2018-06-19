const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

//把浏览器url转换为本地的文件地址
async function router(url){
    let page = '404.html';
    switch(url) {
        case '/':
            page = 'index.html';
            break;
        case '/index':
            page = 'index.html';
            break;
        case '/todo':
            page = 'todo.html';
            break;
        case '/404':
            page = '404.html';
            break;
        default:
            break;
    }

    let html = render(page);
    return html;

}

//根据本地文件地址读取文件并返回
function render(page) {
    return new Promise((resolve,reject)=>{
        let pageUrl = `./pages/${page}`;
        fs.readFile(pageUrl,'binary',(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}

app.use(async (ctx)=>{
    let url = ctx.request.url;
    let html = await router(url);
    console.log(html);
    ctx.response.type = 'html';
    ctx.response.body = html; //返回给浏览器客户端
});

app.listen(3014,()=>{
    console.log("[demo] coding running at port 3014");
});