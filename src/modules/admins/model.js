const { fetch, fetchAll } = require('../../lib/postgres')

const new_admin = `
    INSERT INTO 
    admins (
        admin_name,
        admin_password
    ) VALUES ($1, $2)  RETURNING * 
`
const admins = `
    SELECT * FROM admins
`
const delete_admin = `
    DELETE FROM admins WHERE admin_id = $1
`
const New_admin = (adminname, adminpassword) => fetch(new_admin, adminname, adminpassword)
const Admin = () => fetchAll(admins)
const Delete_admin = (admin_id) => fetch(delete_admin, admin_id)

module.exports = {
    New_admin,
    Admin,
    Delete_admin
}