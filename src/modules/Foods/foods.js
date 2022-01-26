const model = require("./model")
const {verifyUser, signUser } = require("../../lib/jwt")

module.exports = {
    New_food :async (req, res) => {
        try {
            const {token} = req.body

            const user = verifyUser(token)
            if(user[1] == "admin"){
                const {food_name,
                    food_foto,
                    food_price,
                    food_Restarans} = req.body
                const rows = await model.New_Food(food_name,
                    food_foto,
                    food_price,
                    food_Restarans)
                if(rows) {
                    res.send("ok")
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
    Foods: async (req, res) => {
        try {
            const {restaran_id} = req.query
            console.log(restaran_id)
            const rows = await model.Foods(restaran_id) 
            if(rows) {
                res.send(rows)
            }else {
                res.send("bosh")
            }
        }catch (e) {
            console.log(e)
        }
    },
    one_Food: async (req, res) => {
        try {
            const {food_id} = req.params
            const rows = await model.one_Food(food_id)
            if(rows){
                res.send(rows)
            }else{
                res.send("not found")
            }
        }catch (e) {
            console.log(e)
        }
    },
    delete_food: async (req, res) => {
        try {
            const {food_id} = req.body
            const rows = model.delete_Food(food_id)
            res.send("ok")
        }catch (e) {
            console.log(e)
        }
    }
}