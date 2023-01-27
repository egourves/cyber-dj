/*
A shared music player:
- plays music
- has a volume control
- has a play/pause button
- has a next button
- has a previous button
- any users can add songs to the playlist
- every week the playlist is cleared
*/
//define audio context
//const audioContext = new AudioContext();

//index of the poisition in the playlist
var i =0;

//playling status
var playing = false;

//start
console.log('music player');

//define var that contains all the music urls
var playlist = [];
var lenght = playlist.length;

// create event listeners on the play buttons
document.getElementById('play').addEventListener('click', play);

// create event listeners on the pause buttons
//document.getElementById('pause').addEventListener('click', pause);

// create event listeners on the next buttons
document.getElementById('next').addEventListener('click', next);

// create event listeners on the previous buttons
document.getElementById('previous').addEventListener('click', previous);

// create event listeners on the volume buttons
//document.getElementById('volume').addEventListener('click', volume);

// create event listeners on the add song buttons
document.getElementById('add').addEventListener('click', add_song);

//get user input, put it in the playlist, and clear the input field
function add_song(){
    console.log('add song');
    var song = document.getElementById('url').value;
    console.log(song);
    document.getElementById('playlist').innerHTML += song + '<br>';
    playlist[lenght] = song;
    document.getElementById('song').value = '';
    console.log(playlist);
    }

//play the song
function play(){
    playing = true;
    document.getElementById("player").innerHTML = "<iframe id=\"player\" type=\"text/html\" width=\"640\" height=\"390\"src = " + playlist[i] + "?enablejsapi=1&origin=https://egourves.github.io/cyber-dj/\" frameborder=\"0\"></iframe>";
}

//next song
function next(){
    i++;
    if(i >= playlist.length){
        i = 0;
    }
    if(playing) play();
}

//previous song
function previous(){
    i--;
    if(i < 0){
        i = playlist.length-1;
    }
   if(playing) play();
}

