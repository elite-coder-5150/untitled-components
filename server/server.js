const mysql = require('mysql2/promises');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'code_base'
})

db.end();

module.exports = db;
