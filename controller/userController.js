//controller层处理来自用户的输入数据，返回给业务层service处理后返回。
const user = require('../service/user')

async function checkLogin(ctx, next) {
    let { username, password } = ctx.request.body
    let data = await user.checkUser(username, password)
    return ctx.response.body = data
}

module.exports = {
    checkLogin
}