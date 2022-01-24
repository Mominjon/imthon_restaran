const { fetch, fetchAll } = require('../../lib/postgres')

const new_korzina = `
    INSER INTO korzinka (
        korzina_user,
        korzina_food,
        korzina_number
    ) VALUES ($1, $2, $3) RETURNING *
`
const user_korzina = `
    SELECT * FROM korzinka WHERE korzina_user = $1
`
const update_korzina_number = `
    UPDATE korzinka SET korzina_number =$1 WHERE korzina_id = $2
`   
const delete_korzina = `
    DELETE FROM korzinka WHERE korzina_id = $1
`

const New_Korzina = (korzina_user,
    korzina_food,
    korzina_number) => fetch(new_korzina, korzina_user,
        korzina_food,
        korzina_number) 
const User_Korzina = (user_id) => fetch(user_korzina, user_id)
const Update_korzina = (number, korzina_id) => fetch(update_korzina_number, number, korzina_id)
const Delet_Korzina = (korzina_id) => fetch(delete_korzina, korzina_id)

module.exports = {
    New_Korzina,
    User_Korzina,
    Update_korzina,
    Delet_Korzina
}