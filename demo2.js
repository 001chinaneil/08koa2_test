const Koa = require('koa');
const app = new Koa();

function parsePostData(ctx){
    return new Promise((resolve,reject)=>{
        try{
            let postdata = "";
            ctx.req.on('data',(data)=>{ //重点: ctx.req.on接收数据
               postdata += data;
            });
            ctx.req.addListener('end',function(){ //重点: xtx.req.addListener监听接收数据结束
                let parseData = parseQueryStr( postdata );
                resolve(parseData);
            });
        }catch(error){
            reject(error);
        }
    });
}

function parseQueryStr(queryStr){
    let queryData={};
    let queryStrList = queryStr.split('&');
    console.log(queryStrList);
    for( let [index,queryStr] of queryStrList.entries() ){
        let itemList = queryStr.split('=');
        console.log(itemList);
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData
}


app.use(async(ctx)=>{

    if(ctx.url === "/" && ctx.method === "GET"){
        let html = `
        <h1>Koa2 request post demo</h1>
            <form method="POST"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>age</p>
                <input name="age" /> <br/>
                <p>webSite</p>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
    }else if(ctx.url === "/" && ctx.method === "POST"){
        let postData = await parsePostData(ctx);
        ctx.body = postData;
    }else{
        ctx.body = `<h1>404!</h1>`;
    }

});

app.listen(3004,()=>{
    console.log("[demo] server is start at port 3004");
});