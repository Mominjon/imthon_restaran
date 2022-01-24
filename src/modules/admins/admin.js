const req = require("express/lib/request")
const { verifyUser } = require("../../lib/jwt")
const model = require("./model")

module.exports ={ 
    New_admin: async (req, res) => {
        try {
            const {token} = req.body
            const user = verifyUser(token)
            if(user[1] == "admin"){
                const {admin_name, admin_password} = req.body
                const rows = await model.New_admin(admin_name, admin_password)
                if(rows) {
                    res.send("ok")
                }else{
                    res.send("error")
                }
            }
        }catch (e) {
            console.log(e)
        }
    },
    admins: async (req, res) => {
        try {
            const {token} = req.body

            const user = verifyUser(token)
            if(user[1] == "admin"){
                const rows = await model.Admin()
                res.send(rows)
            }else {
                res.send("not admin")
            }
        }
        catch (e) {
            console.log(e)
        }
    },
    delete_admin: async (req, res) => {
        try {
            const {token, admin_id} = req.body
            const user = verifyUser(token)
            if(user[1] == "admin"){
                const rows = await model.Delete_admin(admin_id)
                res.send("ok")
            }else {
                res.send("not admin")
            }
        }
        catch (e) {
            console.log(e)
        }
    }
}