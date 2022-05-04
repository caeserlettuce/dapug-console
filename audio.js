var music = new Audio();
var music_playing = false;
var touchtonetelly = new Audio();
var dogsong = new Audio("Dogsong.mp3");
var sfx = true;
var rw_sound = new Audio("aud_rw.mp3");
rw_sound.loop = true;
dogsong.volume = 0.5;
dogsong.loop = true;

function playMusic(internal_name) {
    if (songs[internal_name]) {
        var url = songs[internal_name]["audio"];
        var vol = songs[internal_name]["volume"];

        var src_good = true;
        song_err = false;

        
        cur_lyr = 0;
        
        music.src = `${url}`;
        
        
        if (song_err == false) {
            music.currentTime = 0;
            music.volume = vol;
            music.play();
            music_playing = true;    
        }

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


function doggy(too) {
    var variants = [
        "dog1.mp3",
        "dog2.mp3",
        "dog3.mp3",
    ]

    var doggysounds = new Audio();
    if (too == true) {
        doggysounds.src = "leveldog.mp3";
    } else {
        var hehe = variants[Math.floor(Math.random()* variants.length)];
        doggysounds.src = hehe;
    }
    doggysounds.play();
}

// stolen code from FILESYS lmao


var SET_ambient_vol = 1;
var SET_fx_vol = 1;
var SET_music_vol = 0.1;



var src_sounds = {
    "beep": {
        "url": "aud_beep.mp3",
        "vol": SET_fx_vol
    },
    "ambient": {
        "url": "aud_ambient.mp3",
        "vol": SET_ambient_vol
    }
}

var sounds = {          // make a duplicate of the source soundpack so that the sounds can be edited (for easter eggs) without screwing up the original soundpack
    ...src_sounds
}

function aud(audio, playover) {
    try {
        if (sounds[audio]) {                            // audio exists!!
            if (playover == true) {                     // audio should play over the last one
                var i_hate_you = new Audio(`${sounds[audio]["url"]}`);
                i_hate_you.volume = sounds[audio]["vol"];
                i_hate_you.play();
            } else {                                    // audio will pause over its last playing audio
                var use_var = `AUD_${audio}`.replace(" ", "_");
                if (eval(`if (typeof ${use_var} !== 'undefined') {true} else {false}`) == true) {
                    eval(`${use_var}.currentTime = 0`);
                    eval(`${use_var}.play()`);
                    eval(`${use_var}.volume = ${sounds[audio]["vol"]}`);
                } else {
                    eval(`${use_var} = new Audio("${sounds[audio]["url"]}")`);
                    eval(`${use_var}.volume = ${sounds[audio]["vol"]}`);
                    eval(`${use_var}.play()`);
                }
            }        
        } else {
            console.log(`[AUDIO FRAMEWORK (tm)]: the audio "${audio}" doesn't exist.`);
        }
    } catch (err) {
        bluescreen_page({"msg": err.message});
    }
}

function sfx_aud(audio, playover) {
    if (sfx == true) {
        aud(audio, playover);
    }
}


function ambient_audio(){
    sfx_aud("ambient");
    setTimeout(ambient_audio, 10000); // 11.485 seconds long, this value shouold be in milliseconds
}

