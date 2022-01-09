//service层查询数据库，根据查询结果判断，返回数据到controller
const allSqlAction = require("../lib/mysql")

//检查用户名和密码
async function checkUser(username, password) {
    let sql = `select * from login where username = '${username}' and password = '${password}'`
    console.log(sql);
    
    return allSqlAction.allSqlAction(sql).then(res => {
        if (res.length == 1) {
            return { msg: "登陆成功", code: 200 }
        } else {
            return { msg: "登录失败", code: 201 }
        }
    })
}

module.exports = {
    checkUser
}