"use strict"
try{

    var express = require('express');
    var app = express();

    var server = require('http').Server(app);

    var socketIO = require('socket.io')(server);

    var port = 8000;

    server.listen(port, function(){
        console.log("Bittu's at "+port);
    });

    app.get('/chat', function(req, res){
        res.sendFile(__dirname + '/chat.html');
    });

    app.get('/music', function(req, res){
        res.sendFile(__dirname + '/music.html');
    });

    app.get('/index', function(req, res){
        res.sendFile(__dirname + '/index.html');
    });


    app.use('/audio', express.static(__dirname + '/audio'));
    app.use('/images', express.static(__dirname + '/images'));
    app.use('/css', express.static(__dirname + '/css'));
    app.use('/js', express.static(__dirname + '/js'));

    var con = socketIO.of('/con');

    con.on('connection', function(socket){
        console.log("Client Connected");

        socket.on('join', (data)=>{
    //        console.log(data);
            socket.join(data.clientname);
            con.emit('message', data+' : New Client Connected');
        });

        socket.on('message', (data)=>{
            console.log(data);
            con.emit('message', data.clientname +" : "+ data.clientmessage);
        });

        socket.on('disconnect', ()=>{
            console.log("Client Disconnected");
            con.emit('message', 'Client Disconnected');
        });
    });
    
}
catch(error){
    console.log(error);
}