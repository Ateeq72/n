var express = require('express');
var app = express();
var server = require('http').createServer(app);
var mysql = require('mysql');

var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'iisr',
    }
);

var port = 8777;
var previous = '';

var queryString = 'SELECT * FROM users limit 1'

server.listen(port);
console.log('Started at port : ' + port);

app.get('/',function (req, res) {

    connection.query(queryString, function(err, rows, fields) {
        if (err) throw err;    
        console.log('Post Titles: ', rows);
        res.send(rows);        
    });

});

app.get('/callback/:data',function (req, res) {

    res.send('received : ' + req.params.data);
    console.log( req.params.data);
});