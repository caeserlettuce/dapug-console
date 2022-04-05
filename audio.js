var music = new Audio();


function playMusic(internal_name) {
    if (songs[internal_name]) {
        var url = songs[internal_name]["audio"];
        music.src = `${url}`;
        music.currentTime = 0;
        music.play();
    }
}