const model = require("./model")
const moment = require("moment")
const {verifyUser} = require("../../lib/jwt")
module.exports = {
    New_zakaz :async(req, res) => {
        try {
            const { zakaz_adres_shaxar,
                zakaz_adres_tuman,
                zakaz_adres_toliq,
                zakaz_username,
                zakaz_tel,
                zakaz_food,
                zakaz_user,
                is_complect } = req.body
        const user_id = verifyUser(zakaz_user)
        const rows = await model.New_zakaz(zakaz_adres_shaxar,
            zakaz_adres_tuman,
            zakaz_adres_toliq,
            zakaz_username,
            zakaz_tel,
            zakaz_food,
            moment().format('LLL'),
            user_id[0].user_id,
            is_complect)
        if(rows) {
            res.send("ok")
        }else {
            res.send("error")
        }
        }catch (e){
            console.log(e)
        }
    },
    one_zakaz: async(req, res) => {
        try {
            const {zakaz_id} = req.query
            const rows = await model.One_zakaz(zakaz_id)
            console.log(rows)

            if(rows) {
                res.send(rows)
            }else {
                res.send("bosh")
            }
        }catch (e) {
            console.log(e)
        }
    },
    One_zakaz: async (req, res) => {
        try {
            const {zakaz_id} = req.query
            const rows = await model.One_Zakaz2(zakaz_id)
            res.send(rows)
        }catch (e) {
            console.log(e)
        }
    },
    Zakazlar:async (req, res) => {
        try {
            const {token} = req.body

            const user = verifyUser(token)
            if(user[1] == "admin"){
                const rows = await model.Zakazlar()
                res.send(rows)
            }else {
                res.send("not admin")
            }
        }catch (e) {
            console.log(e)
        }
    },
    Complect_zakaz : async (req, res) => {
        try {
            const {token, zakaz_id} = req.body

            const user = verifyUser(token)
            if(user[1] == "admin"){
                const rows = await model.Complect_Zakaz(zakaz_id)
                res.send("ok")
            }else {
                res.send("not admin")
            }
        }catch (e) {
            console.log(e)
        }
    }
}