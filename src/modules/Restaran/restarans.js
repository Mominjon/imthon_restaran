const model = require("./model")
const {verifyUser, signUser } = require("../../lib/jwt")
console.log(signUser(JSON.stringify([
    {
      "user_id": "1",
      "user_name": "Mominjon",
      "user_password": "@Mom2004"
    },
    "admin"
  ])))
module.exports = {
    New_restaran: async(req, res) => {
        try {
            const {token} = req.body

            const user = verifyUser(token)
            if(user[1] == "admin"){
                const {
                    restaran_name,
                    restaran_photo,
                    restaran_type
                } = req.body
                const rows = await model.New_Restaran(restaran_name,
                    restaran_photo,
                    restaran_type)
                if(rows) {
                    res.send("Ok")
                }else {
                    res.send("error")
                }
            }else {
                res.send("not admin")
            }
            
        }catch (e) {
            console.log(e)
        }
    },
    Restarans : async (req, res) => {
        try {
            const rows = await model.Restarans()
            res.send(rows)
        }catch (e) {
            console.log(e)
        }
    },
    Delete_restaran: async (req, res) => {
        try {
            const {token, restaran_id} = req.body

            const user = verifyUser(token)
            if(user[1] == "admin"){
                const rows = await model.Delete_restaran(restaran_id)
                res.send("ok")
            }else {
                res.send("not admin")
            }
        }catch (e) {
            console.log(e)
        }
    }
}