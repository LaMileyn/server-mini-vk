const mysql = require("mysql");

const db = mysql.createConnection({
    host: "89.223.126.48",
    user: "deeptrix_test",
    password: "1234567",
    database: "deeptrix_test",
})
module.exports = db;