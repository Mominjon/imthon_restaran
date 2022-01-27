const { fetch, fetchAll } = require('../../lib/postgres')

const new_zakaz = `
    INSERT INTO zakazs (
        zakaz_adres_shaxar,
        zakaz_adres_tuman,
        zakaz_adres_toliq,
        zakaz_username,
        zakaz_tel,
        zakaz_food,
        zakaz_clock,
        zakaz_user,
        is_complect
    ) VALUES ($1, $2, $3, $4, $5, $6, $7 $8, $9) RETURNING *
`
const zakazlar = `
    SELECT * FROM zakazs 
`
const one_zakaz = `
    SELECT * FROM korzinka WHERE korzina_id = $1
`

const complect_zakaz = `
    UPDATE zakazs SET is_complect = 'true' WHERE zakaz_id = $1
`

const New_zakaz = (zakaz_adres_shaxar,
    zakaz_adres_tuman,
    zakaz_adres_toliq,
    zakaz_username,
    zakaz_tel,
    zakaz_food,
    zakaz_clock,
    zakaz_user,
    is_complect) => fetch(new_zakaz, zakaz_adres_shaxar,
        zakaz_adres_tuman,
        zakaz_adres_toliq,
        zakaz_username,
        zakaz_tel,
        zakaz_food,
        zakaz_clock,
        zakaz_user,
        is_complect)
const Zakazlar = () => fetch(zakazlar)
const Complect_Zakaz = (zakaz_id) => fetch(complect_zakaz, zakaz_id)
const One_zakaz = (zakaz_id) => fetch(one_zakaz, zakaz_id)

module.exports = {
    New_zakaz,
    Zakazlar,
    Complect_Zakaz,
    One_zakaz
}