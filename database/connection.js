const mysql = require('mysql2/promise')


const connection = mysql.createPool({
    host: 'database-app.cpb6cekme1iy.us-east-2.rds.amazonaws.com',
    user: 'admin',
    database: 'saude',
    password: '1903(Mnb)'
})


module.exports = connection