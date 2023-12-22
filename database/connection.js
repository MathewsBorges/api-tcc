const mysql = require('mysql2/promise')


const connection = mysql.createPool({
    host: '',
    user: 'admin',
    database: 'saude',
    password: '1903(Mnb)'
})


module.exports = connection