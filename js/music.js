var songs = ["../audio/Alone.mp3","../audio/Castle Of Glass.mp3","../audio/Coming Home.mp3","../audio/Demons.mp3","../audio/ENG.NONSTOP.mp3","../audio/Girls Like You.mp3","../audio/Human After All.mp3","../audio/Indhana Winva.mp3","../audio/Natural.mp3","../audio/Senorita.mp3","../audio/Shameless.mp3","../audio/Thunder.mp3"];

var names = ["Alone","Castle Of Glass","Coming Home","Demons","Eng.NonStop","Girls Like You","Humar After All","Indhana Winva","Natural","Senorita","Shameless","Thunder"];

var images = ["../images/marshmello.jpg","../images/linkin-park.jpg","../images/s1.jpg","../images/imagine-dragons.jpg","../images/s2.jpg","../images/maroon5.jpg","../images/s5.jpg","../images/falguni-pathak.jpg","../images/imagine-dragons.jpg","../images/camila-cabello.jpg","../images/camila-cabello2.jpg","../images/imagine-dragons.jpg"];

var progress = document.getElementById("progress");    
var song = document.getElementById("songSrc");

var current = 0;

$(document).ready(function(){
    
    
    var count = 0;
    
    $("#play").click(function(){
        count = playSong(count);
    });
    
    $("#next").click(function(){
        current = nextSong(current);
    });
    
    $("#previous").click(function(){
        current = previousSong(current);
    });
    
    song.addEventListener("timeupdate", function(){
        var update = song.currentTime / song.duration;
        if(update === 1){
            current = nextSong(current);
        }
        else{
            progress.style.width = update * 100 + "%";
        }
    });
});

function playSong(count){
    if(count === 0){
        $("#play img").attr("src", "../images/pause.png");
        song.src = songs[current];
        $("#songTitle").text(names[current]);
        $("#songImg").attr("src", images[current]);
        song.play();
        count++;
    }
    else if(count === 1){
        $("#play img").attr("src", "../images/play.png");
        song.pause();
        count++;
    }
    else if(count === 2){
        $("#play img").attr("src", "../images/pause.png");
        song.play();
        count--;
    }
    return count;
}

function nextSong(id){
    id++;
    if(id === 12){
        id = 0;
        song.src = songs[id];
        $("#songTitle").text(names[id]);
        $("#songImg").attr("src", images[id]);
        song.play();
    }
    else{
        song.src = songs[id];
        $("#songTitle").text(names[id]);
        $("#songImg").attr("src", images[id]);
        song.play();
    }
    return id;
}
    
function previousSong(id){
    id--;
    if(id === -1){
        id = 11;
        song.src = songs[id];
        $("#songTitle").text(names[id]);
        $("#songImg").attr("src", images[id]);
        song.play();
    }
    else{
        song.src = songs[id];
        $("#songTitle").text(names[id]);
        $("#songImg").attr("src", images[id]);
        song.play();
    }
    return id;
}