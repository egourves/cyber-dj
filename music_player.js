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
var initied = false;

//player
var player;
var id;
//load the youtube iframe api
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//start
console.log('music player');

//define var that contains all the music urls
var playlist = [];
var lenght = playlist.length;

// create event listeners on the play buttons
document.getElementById('play').addEventListener('click', play);

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
    if(!initied){
        init();
    }
    }

//play or pause the song
function play(){
    console.log('play');
    //check if the song is playing
    if(player.getPlayerState() == 1){
        player.pauseVideo();
    }else{
        player.playVideo();
    }

}

//init player
function init(){
    console.log('init');
    initied = true;
    //get id of the youtube video from the url
    id = playlist[i].split('v=')[1];
    console.log(id);
    //show player
    player.loadVideoById(playlist[i].split('v=')[1]);
    document.getElementById('player').style.display = 'block';
    document.getElementById('buttons').style.display = 'block';
}

//create the player
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: id,
      playerVars: {
        'playsinline': 1
      },
    });
    //hide player
    document.getElementById('player').style.display = 'none';
  }


//next song
function next(){
    i++;
    if(i >= playlist.length){
        i = 0;
    }
    player.loadVideoById(playlist[i].split('v=')[1]);
}

//previous song
function previous(){
    i--;
    if(i < 0){
        i = playlist.length-1;
    }
    player.loadVideoById(playlist[i].split('v=')[1]);
}

