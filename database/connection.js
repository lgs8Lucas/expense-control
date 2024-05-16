const mysql = require('mysql');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"114594",
    database: "expense_control"
})

module.exports = connection