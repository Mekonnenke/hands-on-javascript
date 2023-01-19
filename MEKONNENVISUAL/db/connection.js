const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hashHaset33*',
    database: 'restaurant'
})
module.exports = db;