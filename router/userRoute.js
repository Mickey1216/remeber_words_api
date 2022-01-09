//用户（登录）路由--通过userRoute.js把路由更加细化，把用户相关的对应的请求分流到不同的controller内
const Router =require("koa-router")
const userController = require("../controller/userController")

const router = new Router()
router.post("/api/user/login", userController.checkLogin)

module.exports = router