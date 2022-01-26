const { fetch, fetchAll } = require('../../lib/postgres')

const new_user = `
    INSERT INTO 
        users(
            user_name,
            user_password
        ) VALUES ($1, $2)  RETURNING * 
`

const users = `
    SELECT * 
        FROM users
`
const login_user = `
    SELECT * 
        FROM users
       WHERE 
       user_name = $1 AND
       user_password = $2
`
const login_admin = `
    SELECT * FROM admins WHERE 
    admin_name = $1 AND
    admin_password = $2
`
const New_User = (username, userpassword) => fetch(new_user, username, userpassword)
const Users = () => fetchAll(users)
const Login_user = (username,userpassword) => fetch(login_user, username, userpassword)
const Login_admin = (adminname, adminpassword) => fetch(login_admin, adminname, adminpassword)

module.exports = {
    New_User,
    Users,
    Login_user,
    Login_admin
}