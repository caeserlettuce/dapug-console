var music = new Audio();
var music_playing = false;
var touchtonetelly = new Audio();


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

async function touchtone(char, speeb) {
    if (touchtonetm == true) {
        if (tones[char]) {      // if character exists in tones
            var ton = tones[char]["sound"];
            var amount = tones[char]["amount"];
            
            var speed = speeb / amount;

            console.log("speed: ", speed);
            


            for (let i = 0; i < amount; i++) {
                console.log("i: ", i);
                console.log("fancy speed: ", i * speed);
                
                setTimeout(function timer() {
                    //touchtonetelly.src = ton;
                    //touchtonetelly.currentTime = 0;
                    //touchtonetelly.play();
                    console.log("tone");
                    
                }, i * speed);
               
            }

            
        }
    }
}
