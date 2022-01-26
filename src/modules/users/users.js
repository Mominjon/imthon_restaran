const model = require("./model")
const {
    signUser,
    verifyUser
} = require("../../lib/jwt")
module.exports = {
    New_user: async (req, res) => {
        try {
            const {username, userpassword} = req.body

            const rows = await model.New_User(username, userpassword)
            if(rows) {
                res.send(signUser(JSON.stringify([rows, "user"])))
            }else {
                res.send("error")
            }
        }catch (e) {
            console.log(e)
        }
    },
    Users: async(req, res) => {
        try {
            const {token} = req.body
            const user = verifyUser(token) 
            if(user[0] == "admin") {
                const rows = await model.Users()
                res.send(rows)
            }else {
                res.send("not admin")
            }
        }catch (e) {
            console.log(e)
        }
    },
    Login_user: async(req, res) => {
        try {
                const {username, userpassword} = req.body
                const rows = await model.Login_user(username, userpassword)
                if(rows) {
                    res.send(signUser(rows,"user"))
                }else {
                    const admin = await model.Login_admin(username, userpassword)
                    if(admin) {
                        res.send(signUser(rows, "admin"))
                    }else {
                        res.send("user not found")
                    }
                }
        }catch (e) {
            console.log(e)
        }
    }
}