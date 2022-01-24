const { fetch, fetchAll } = require('../../lib/postgres')

const new_restaran = `
    INSERT INTO Restarans (
        restaran_name,
        restaran_photo,
        restaran_type
    ) VALUES ($1, $2, $3)  RETURNING * 
`
const restarans = `
    SELECT * FROM Restarans
`
const delete_restaran = `
    DELETE FROM Restarans WHERE restaran_id = $1
`

const New_Restaran = (
    restaran_name,
    restaran_photo,
    restaran_type) => fetch(
        new_restaran,
        restaran_name,
        restaran_photo,
        restaran_type
    )
const Restarans = () => fetchAll(restarans)
const Delete_restaran = (restaran_id) => fetch(delete_restaran, restaran_id)

module.exports = {
    New_Restaran,
    Restarans,
    Delete_restaran
}