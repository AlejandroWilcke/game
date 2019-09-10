const express = require('express');
const server = express();
const path = require('path');
const port = 3000;

const publicRoute = path.resolve(__dirname, '../front/public/');

server.use(express.static(path.resolve(__dirname, '../front/public')));

server.get('/', function(req, res){
    let file = path.join(publicRoute, 'game.html');
    res.sendFile(file);
});

server.get('/circulos', function(req, res){
    let file = path.join(publicRoute, 'circulos.html');
    res.sendFile(file);
});

server.listen(port, function(){
    console.log(`Listening at ${port}`);
});