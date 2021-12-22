const mysql = require('mysql')
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', //apaguei para o git apenas
    port: 3306,
    database: 'db_banco'
})

conn.connect((err) => {
    if (err) throw err
    console.log('Banco de dados conectado')
})

module.exports = conn

