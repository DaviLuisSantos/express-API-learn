const mysql = require('mysql2');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'Davizaun',
    password: 'davizaun69',
    database: 'SampleApp',
});