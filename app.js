const Koa = require("koa")
//处理post请求
const bodyParser = require("koa-body")
const router = require("./router/router")

const app = new Koa()
app.use(bodyParser())
app.use(router.routes())

app.listen(3000)
console.log("项目启动http://127.0.0.1:3000")
