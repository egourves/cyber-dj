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

