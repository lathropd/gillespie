const Koa = require('koa');
const app = new Koa();

// response

app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(1337);
console.log("listening on localhost:1337")
