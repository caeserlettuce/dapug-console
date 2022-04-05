var music = new Audio();


function playMusic(internal_name) {
    if (songs[internal_name]) {
        var url = songs[internal_name]["audio"];
        var vol = songs[internal_name]["volume"];
        music.src = `${url}`;
        music.currentTime = 0;
        music.volume = vol;
        music.play();
    }
}