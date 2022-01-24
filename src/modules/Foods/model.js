const { fetch, fetchAll } = require('../../lib/postgres')

const new_food = `
    INSERT INTO food (
        food_name,
        food_foto,
        food_price,
        food_Restarans
    ) VALUES ($1, $2, $3, $4)  RETURNING *
`

const foods = `
    SELECT * FROM food WHERE food_Restarans = $1
`
const one_food = `
    SELECT * FROM food WHERE food_id = $1
`

const delete_food = `
    DELETE FROM food WHERE food_id = $1
`

const New_Food = (
    food_name,
    food_foto,
    food_price,
    food_Restarans
) => fetch(new_food,  
    food_name,
    food_foto,
    food_price,
    food_Restarans)
const Foods = (restaran_id) => fetch(foods, restaran_id)
const one_Food = (food_id) => fetch(one_food, food_id)

const delete_Food = (food_id) => fetch(delete_food, food_id)

module.exports = {
    New_Food,
    Foods,
    one_Food,
    delete_Food
}