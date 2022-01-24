const { verifyUser } = require("../../lib/jwt")
const model = require("./model")

module.exports = {
    New_korzina : async(req, res) => {
        try {
            const {token,
                korzina_food,
                korzina_number} = req.body
            const user = verifyUser(token)
            const rows = model.New_Korzina(user[0].user_id, korzina_food, korzina_number)
            if(rows) {
                res.send("ok")
            }else {
                res.send("error")
            }
        }catch (e) {
            console.log(e)
        }
    },
    user_korzina: async (req, res) => {
        try {
            const {token} = req.params
            const user = verifyUser(token)
            const rows = await model.User_Korzina(user[0].user_id)
            res.send(rows)
        }catch (e) {
            console.log(e)
        }
    },
    update_number_korzina: async(req, res) => {
        try {
            const {number, korzina_id} = req.body
            const rows = await model.Update_korzina(number, korzina_id) 

            res.send("ok")
        }catch (e) {
            console.log(e)
        }
    },
    delete_korzina: async(req, res)=> {
        try {
            const {korzina_id} = req.body
            const rows =await model.Delet_Korzina(korzina_id)
            res.send("ok")
        }catch (e) {
            console.log(e)
        }
    }
}