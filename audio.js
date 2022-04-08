var music = new Audio();
var music_playing = false;


function playMusic(internal_name) {
    if (songs[internal_name]) {
        var url = songs[internal_name]["audio"];
        var vol = songs[internal_name]["volume"];
        music.src = `${url}`;
        music.currentTime = 0;
        music.volume = vol;
        music.play();
        music_playing = true;
    }
}

function boom() {
    if (egg == true) {
        var epic = new Audio("boom.mp3");
        epic.volume = 0.3;
        epic.play();
    }
}