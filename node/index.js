const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'desafio2db',
    port: '3306'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Rosana')`
connection.query(sql)

app.get('/',(req,res) => {

     connection.query("SELECT name FROM people", function (err, result, fields) {
       if (err) throw err;
       res.send('<h1>Full Cycle Rocks!</h1>')
       console.log(result);
     });
})


connection.end()

app.listen(port, () => {
    console.log('Rodando na porta ' +port)
})