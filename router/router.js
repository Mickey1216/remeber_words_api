//总路由（Router 主要用来描述请求 URL 和具体承担执行动作的 Controller 的对应关系。）
const Router = require("koa-router")
const user = require("./userRoute")

let router = new Router()
router.use(user.routes())

module.exports = router
