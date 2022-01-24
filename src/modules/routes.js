const express = require('express')


const users = require("./users/users")
const admins = require("./admins/admin")
const Restarans = require("./Restaran/restarans")
const Food = require("./Foods/foods")
const korzina = require("./korzina/korzina")
const zakazlar = require("./zakazs/zakaz")
const router = express.Router()

router
    .post("/new_user", users.New_user)
    .post("/users", users.Users)
    .post("/login", users.Login_user)
    .post("/new_admin", admins.New_admin)
    .post("/admins", admins.admins)
    .post("/delete_admin", admins.delete_admin)
    .post("/new_restaran", Restarans.New_restaran)
    .get("/restarans", Restarans.Restarans)
    .post("/delete_restarans", Restarans.Delete_restaran)
    .post("/new_food", Food.New_food)
    .get("/foods", Food.Foods)
    .get("/one_food", Food.one_Food)
    .post("/delete_food", Food.delete_food)
    .post("/new_korzina", korzina.New_korzina)
    .get("/user_korzina", korzina.user_korzina)
    .post("/update_korzina", korzina.update_number_korzina)
    .post("/delete_korzina",korzina.delete_korzina)
    .post("/new_zakaz", zakazlar.New_zakaz)
    .post("/zakazlar", zakazlar.Zakazlar)
    .post("/comlect_zakaz", zakazlar.Complect_zakaz)
    
module.exports = router