const Koa = require('koa');
const router = require('./router')

const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = 'Hello World';
  next()
});



app.use(router.routes());
app.use(router.allowedMethods());


app.on('error', err => {
    console.error('server error', err)
});

app.listen(3002, function () {
    console.log(`服务已启动: http://localhost:3002`)
});
