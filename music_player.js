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
const audioContext = new AudioContext();

//index of the poisition in the playlist
var i =0;

//define var that contains all the music urls
var playlist = [];

// create event listeners on the play buttons
document.getElementById('play').addEventListener('click', play);

// create event listeners on the pause buttons
document.getElementById('pause').addEventListener('click', pause);

// create event listeners on the next buttons
document.getElementById('next').addEventListener('click', next);

// create event listeners on the previous buttons
document.getElementById('previous').addEventListener('click', previous);

// create event listeners on the volume buttons
document.getElementById('volume').addEventListener('click', volume);

// create event listeners on the add song buttons
document.getElementById('add_song').addEventListener('click', add_song);

//get user input, put it in the playlist, and clear the input field
function add_song(){
    var song = document.getElementById('url').value;
    console.log(song);
    document.getElementById('playlist').innerHTML += song + '<br>';
    playlist.append(song);
    document.getElementById('song').value = '';
    console.log(playlist);
    }

//play the song
function play(){
    player.innerHTML = "<iframe id=\"player\" type=\"text/html\" width=\"640\" height=\"390\"src = " + playlist[i] + "?enablejsapi=1&origin=https://egourves.github.io\" frameborder=\"0\"></iframe>";
}