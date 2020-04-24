var clientname = "";
$(document).ready(function(){
    enterName();
});

function enterName(){
    clientname = prompt("Enter Name : ");
    if(clientname == "" || clientname == "null" || clientname == null){
        alert("Must enter name ! ");
        enterName();
    }
}


var socket = io.connect('/con');
            
$("#send").click(function(){
    var clientmessage = $("#txtMsg").val();
    socket.emit('message', {clientmessage,clientname});
    $("#txtMsg").val("");
    $("#txtMsg").focus();
});
    
socket.on('connect', function(){
    socket.emit('join', clientname);
});
    
socket.on('message', function(msg){
    $("#messages").append($("<li>").text(msg));    
});
           