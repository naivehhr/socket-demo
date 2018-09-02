const Koa = require("koa");
const app = new Koa();
const server = require("http").Server(app.callback());
const io = require("socket.io")(server);
app.use(ctx => {
  ctx.body = "Hello Koa";
  ctx.set("Access-Control-Allow-Origin", "http://localhost:3003");
  ctx.set("Access-Control-Allow-Credentials", "true");
});

let id = 0;
io.on("connection", socket => {
  console.log("connection");
  setInterval(()=>{
    socket.emit("Msg", `${id++}`);
  }, 1000)
});
server.listen(3000, () => {
  console.log("listening on *:3000");
});
