const express = require('express')
const app = express()
const nodeport = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'desafio2db',
    port: '3306'
}
const mysql = require('mysql')


app.get('/',(req,res) => {
    const connection = mysql.createConnection(config)
     connection.query(`INSERT INTO people(name) values('Rosana')`)
     connection.query(`SELECT name FROM people`, function (err, result) {
       if (err) throw err;
       names ='';
       Object.keys(result).forEach(function(key) {
        names = names.concat(result[key].name,',<br>');
      });
       res.send(`<h1>Full Cycle Rocks!</h1> <br>${names}`)
       
       connection.end()
     });
})

app.listen(nodeport, () => {
    console.log('Rodando na porta ' +nodeport)
})