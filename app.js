const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();


// response


app.use(router.routes())
  .use(router.allowedMethods());

app.use(ctx => {
  if (ctx.body == null) {
    ctx.body = 'Hello Koa';
  }
});

app.listen(1337);
console.log("listening on localhost:1337")
