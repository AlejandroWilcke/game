const express = require('express');
const server = express();
const path = require('path');
const port = 3000;

server.use(express.static(path.resolve(__dirname, '../front/public')));

server.get('/', function(req, res){
    res.sendFile('index.html');
});

server.listen(port, function(){
    console.log(`Listening at ${port}`);
});