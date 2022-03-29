function debubg(message) {
    console.log(message);
    if (debug == true) {
        var pogchamp = document.getElementById("debubtext");
        texty = pogchamp.innerHTML;
        pogchamp.innerHTML = `${texty}<br>${message}`;
        scrollBottom("debub");
    }
}
debubg("debug message init finished...");
var consol = document.getElementById("consy");
var user = "user";
var consoltext = "";
var inputlock = false;
var mainsys = true;
var filesys = false;
var comments = "";
var debug = false;
var debugvar = false;
var debugHide = false;
var debugHideVar = false;
var snakegamestart = false;
var snakegame = false;
var enterlock = false;
var snakeinputs = false;
var commHistory = [];
var copycomm = "";
var coopy = false;
var debubHide = false;
var commang = [];
var commandhistorylock = false;
var currentHistCOmm = 0;
var currentCOM = "";
var snakegamespeed = 1;
var snakeingame = false;
var snaketick = 0;
var textcolour = "#7cfc00";
var backcolour = "#000000";
var autocommand = false;
var startup = false; // REMEMBER TO SET TO TRUE LATER (haha now its automatic)
var worble_status = false;
var worble_colourblind = false;
var worble_word = "";
var worble_word_id = 0;
var worble_save = [];
var worble_guesscount = 0;
var worble_gray = "#3a3a3c";
var worble_green = "#538d4e";
var worble_yellow = "#b59f3b";
var worble_df_green = "#538d4e";
var worble_df_yellow = "#b59f3b";
var worble_blind_green = "#f5793a";
var worble_blind_yellow = "#85c0f9";
var worble_share_gray = "⬛";
var worble_share_green = "🟩";
var worble_share_yellow = "🟨";
var worble_share_blind_green = "🟧";
var worble_share_blind_yellow = "🟦";
var worble_share_df_green = "🟩";
var worble_share_df_yellow = "🟨";
var commandHistory = new Array();
var commandIndex = 0;
var currentCommand = "";
var inHistory = false;


debubg("variable init finished...");
// local storage setup


function getCommentIter() {

    var commentIter = localStorage.getItem("commiter");

    if (commentIter) {
        // exists
        debubg("local storage comment iteration does exist, skipping creation.");
    } else {
        // doesnt
        debubg("local storage comment iteration doesn't exist. creating one.");
        localStorage.setItem("commiter", 0);
    }

    var localComments = localStorage.getItem("comments");

    if(localComments) {
        // exists
        debubg("local storage comments does exist, skipping creation.");
    } else {
        // doesnt
        debubg("local storage comments doesn't exist. creating one.");
        localStorage.setItem("comments", '{ "why": "yes" }');
        comments = '{ "why": "yes" }';
    }
    return commentIter
}

function getTextColour() {
    var coly = localStorage.getItem("text-colour");

    if (coly) {
        debubg("local storage text colour colour exists, skipping creation.");
    } else {
        debubg("creating text colour local storage...");
        localStorage.setItem("text-colour", "#7cfc00");
        coly = localStorage.getItem("text-colour");
    }
    return coly
}

function getBackColour() {
    var coly = localStorage.getItem("back-colour");

    if (coly) {
        debubg("local storage back colur colour exists, skipping creation.");
    } else {
        debubg("creating back colour local storage...");
        localStorage.setItem("back-colour", "#000000");
        coly = localStorage.getItem("back-colour");
    }
    return coly
}


//startup sequence only happens on a freshly cleared cache

function doStart() {
    
   
    var starty = localStorage.getItem("startup");

    if(starty) {
        // startup
        
        debubg("cache is not freshly reset, skipping startup sequence.");


    } else {
        // continue
        inputlock = true;
        debubg("cache is freshly reset, running startup sequence");
        startup = true;
    }


}

function accountRegistry() {
    
    var accountsregistry = localStorage.getItem("accounts");
    
    var currentaccount = localStorage.getItem("currentaccount");

    if(accountsregistry) {
        // exists
        debubg("local storage comments does exist, skipping creation.");
    } else {
        // doesnt

        var accounts = {            // congratulations, you found a security hole!
            "admin": "password",
            "pugface": "laptop",
            "dev": "ihatejavascript"
        }

        debubg("local storage accounts doesn't exist. creating one.");
        localStorage.setItem("accounts", JSON.stringify(accounts).replace("{", "").replace("}", ""));
    }

    if(currentaccount) {
        // exists
        debubg("current account already is logged in.");
        user = currentaccount;

    } else {
        localStorage.setItem("currentaccount", "user");
    }

}

function worbleInit() {

    var game = localStorage.getItem("worble_save");         // save all the guesses in an array

    var wordy = localStorage.getItem("worble_word");        // save the current word

    var status = localStorage.getItem("worble_status");   // saves if the previous game has been finished yet

    var blind = localStorage.getItem("worble_colourblind"); // colourblind mode will stay on even after page reload

    var guesses = localStorage.getItem("worble_guesscount"); // how many guesses

    if(game) {
        // exists
        debubg("[WORBLE] worble save is saved. continuing.");
        worble_save = loadWorble();   // when there is an existing local save it'll automatically load it (fancy)
    } else {
        // not set eixsir he hehhe hehe hehe i h he heheh  ehe e
        debubg("[WORBLE] worble save is not saved. creating.");
        localStorage.setItem("worble_save", '');
    }
    if(wordy) {
        // exists
        debubg("[WORBLE] worble word is saved. continuing.");
        worble_word = `${wordy}`;
    } else {
        // not set eixsir he hehhe hehe hehe i h he heheh  ehe e
        debubg("[WORBLE] worble word is not saved. creating.");
        localStorage.setItem("worble_word", '');
    }
    if(status) {
        // exists
        debubg("[WORBLE] worble game status is saved. continuing.");
        if (status == "false") {
            worble_status = false;
        } else {
            worble_status = true;
        }
    } else {
        // not set eixsir he hehhe hehe hehe i h he heheh  ehe e
        debubg("[WORBLE] worble status is not saved. creating.");
        localStorage.setItem("worble_status", 'false');
    }
    if(blind) {
        // exists
        debubg("[WORBLE] worble colourblind mode is saved. continuing.");
        if (blind == "true") {
            worble_colourblind = true;
        } else {
            worble_colourblind = false;
        }
        worbleColourUpdate();
    } else {
        // not set eixsir he hehhe hehe hehe i h he heheh  ehe e
        debubg("[WORBLE] worble colourblind mode is not saved. creating."); 
        localStorage.setItem("worble_colourblind", 'false');
    }
    if(guesses) {
        // exists
        debubg("[WORBLE] worble guess count is saved. continuing.");
    } else {
        // not set eixsir he hehhe hehe hehe i h he heheh  ehe e
        debubg("[WORBLE] worble guess count is not saved. creating."); 
        localStorage.setItem("worble_guesscount", 0);
    }

}


worbleInit();
doStart();
getCommentIter();
accountRegistry();
textcolour = getTextColour();
backcolour = getBackColour();

debubg("local storage init finished.");


// url params using my fancy plugin NOOOO I DONT HAVE THE FANY PLUGIN YET NOOOOOO
// for context i just got a new laptop and i have not yet copied over all my files from my old laptop except for this one so........
// ill work on that one later


// url params


globalVars(false);

var consoleParams = ["debug", "debugvar", "suggestion", "command", "textcolour", "backcolour"];


addParameters(consoleParams);

var pams = getParameters()

var pr_debug = pams[0];
var pr_debugvar = pams[1];
var pr_suggestion = pams[2];
var pr_command = pams[3];
var pr_textcolour = pams[4];
var pr_backcolour = pams[5];

debubg(`[url param init] debug: ${pr_debug}, debugvar: ${pr_debugvar}, suggestion: ${pr_suggestion}, command: ${pr_command}`);


// toggle the debugs
if (pr_debug == "true") {
    debug = true;
} else {
    debug = false;
}
if (pr_debugvar == "true") {
    debugvar = true;
} else {
    debugvar = false;
}

// suggest command



if (pr_suggestion != null) { // if there is an entry for the url link
    document.getElementById("consoleinput").value = `${pr_suggestion}`;
}

if (pr_command != null) {
    autocommand = true;
}

if (pr_textcolour != null) {
    textcolour = `#${pr_textcolour}`;
}

if (pr_backcolour != null) {
    backcolour = `#${pr_backcolour}`;
}
//if (pr_command != null) { // if theres something at the url link and not just empty
//    var text = `${pr_command}`;

//    var elem = document.getElementById("consoleinput");

//    elem.value = text;

    //document.getElementById("consoleinput").dispatchEvent(new KeyboardEvent('keyup', {
    //    key: "enter"
    //}));
    
//    var sting = elem.value;
//    commang.push(text);
//    userAppend(`${text}`);

//    if (mainsys == true) {
//        parseCommand(text);
//    } else if (filesys == true) {
//        filesysParse(text);
//    }

    
//    elem.value = "";
//    currentHistCOm = 0;
//    currentCOM = 0;
//    scrolly();
    //debubg(consoltext);
    //debubg(commang);

//}

debubg("url params init finished...");



function scrollBottom(id) {
    var div = document.getElementById(id);
    div.scrollTop = div.scrollHeight - div.clientHeight;
}
debubg("scrollBottom init finished...");
if (debug == false) {
    document.getElementById("debub").style.display = "none";
}
if (debugvar == false) {
    document.getElementById("debubvar").style.display = "none";
}

function toggleHideDebug() {
    if (debugHide == false) {
        debugHide = true;
        debubg("debugHide is true now");
        document.getElementById("depeep").style.display = "none"; //245
        document.getElementById("debub").style.height = "30px";
    } else {
        debugHide = false;
        debubg("debugHide is false now");
        document.getElementById("depeep").style.display = "";
        document.getElementById("debub").style.height = "245px";
    }
}
function toggleHideDebugVar() {
    if (debugHideVar == false) {
        debugHideVar = true;
        debubg("debugHideVar is true now");
        document.getElementById("depeepvar").style.display = "none";
        document.getElementById("debubvar").style.height = "30px";
    } else {
        debugHideVar = false;
        debubg("debugHideVar is false now");
        document.getElementById("depeepvar").style.display = "";
        document.getElementById("debubvar").style.height = "295px";
    }
}



debubg("debug window init finished...");


function copyclip(idiot) {
    navigator.clipboard.writeText(idiot);
}
function copyArr(arr) {
    var fimb = "";
    // make another text variable from the array and have it insert new lines and crap for it and then copy the thing to clipboard
    var is = Array.isArray(arr);
    if (is == true) {
        debubg("input is an array, copying using array function.");
        var leny = arr.length;
        for (let i = 0; i < leny; i++) {
            fimb = `${fimb}${copycomm} ${arr[i]}\n`; 
        }
    } else {
        debubg("input is not at array, copying as regular string.");
        fimb = `${copycomm} ${arr}`;
    }
    copyclip(fimb);
}
var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
debubg("window scale init finished...");
function scrolly() {
    window.scrollTo(0,document.body.scrollHeight);
};
debubg("scrolly init finished...");
if (windowWidth > windowHeight) {
    // if on mobile
    document.getElementById("body").style.fontSize = "1vw";
    document.getElementById("consoleinputstyle").style.fontSize = "1.25vw";
    document.getElementById("consoleinput").style.fontSize = "1.25vw";
} else {
    // else
    document.getElementById("body").style.fontSize = "3vw";
    document.getElementById("consoleinputstyle").style.fontSize = "3vw";
    document.getElementById("consoleinput").style.fontSize = "3vw";
}
debubg("text scaling init finished...");
function clearScreen() {
    consol.innerHTML = "";
    consoltext = "";
}
function setScreen(message) {
    consol.innerHTML = message;
    consoltext = message;
}
function hardAppend(message) {
    var yoy = consol.innerHTML;
    consol.innerHTML = `${yoy}<br>${message}`;
    consoltext = `${yoy}<br>${message}`;
    scrolly();
};
function userAppend(message, userin) {
    var yoy = consol.innerHTML;
    var userfor;

    if (userin != null) {
        userfor = `${userin}`;
    } else {
        userfor = `${user}`;
    }

    commHistory.push(yoy);
    consol.innerHTML = `${yoy}<br>${userfor}@dapug.lol> ${message}`;
    consoltext = `${yoy}<br>${userfor}@dapug.lol> ${message}`;
    scrolly();
};
function appendInline(message) {
    var yoy = consol.innerHTML;
    consol.innerHTML = `${yoy}${message}`;
    consoltext = `${yoy}${message}`;
    scrolly();
};
function newLine() {
    var yoy = consol.innerHTML;
    consol.innerHTML = `${yoy}<br>`;
    consoltext = `${yoy}<br>`;
    scrolly();
};
function consoleWipe(message) {
    consol.innerHTML = message;
}
debubg("screen operations init finished...");

var animSPEED = 25;
var animSentence1 = "";
var animchar1 = 0;
var end1 = true;
//var appendy
debubg("more variable init finished...");
//intervalID1 = setInterval(animyOne, animSPEED);
intervalVar = setInterval(bebu, 100);
function bebu() {
    if (debugvar == true) {
        document.getElementById("debubtextvar").innerHTML = `              user: ${user}
           inputlock: ${inputlock}
             mainsys: ${mainsys}
             filesys: ${filesys}
               debug: ${debug}
            debugvar: ${debugvar}
           debugHide: ${debugHide}
        debugHideVar: ${debugHideVar}
      snakegamestart: ${snakegamestart}
           snakegame: ${snakegame}
           enterlock: ${enterlock}
         snakeinputs: ${snakeinputs}
            copycomm: ${copycomm}
               coopy: ${coopy}
           debubHide: ${debubHide}
  commandhistorylock: ${commandhistorylock}
     currentHistCOmm: ${currentHistCOmm}
          currentCOM: ${currentCOM}
      snakegamespeed: ${snakegamespeed}
         snakeingame: ${snakeingame}
           snaketick: ${snaketick}
          textcolour: ${textcolour}
          backcolour: ${backcolour}
         autocommand: ${autocommand}
       worble_status: ${worble_status}
  worble_colourblind: ${worble_colourblind}
   worble_guesscount: ${worble_guesscount}
         worble_word: ${worble_word}
      worble_word_id: ${worble_word_id}
         worble_gray: ${worble_gray}
        worble_green: ${worble_green}
       worble_yellow: ${worble_yellow}
   worble_share_gray: ${worble_share_gray}
  worble_share_green: ${worble_share_green}
 worble_share_yellow: ${worble_share_yellow}
`;autocommand
        console.log("binted.");
    }
}
function animyOne() {
    //debubg(end1);
    if (end1 == false) {
        if (animchar1 == animSentence1.length) {
            end1 = true;
        } else {
            appendInline(animSentence1[animchar1]);
            animchar1 += 1;
            scrolly();
        }
    }
}
function simpleAnimAppend(message) {
    end1 = false;
    animSentence1 = message.split("");
    //hardAppend(animSentence1);
    newLine();
    animchar1 = 0;
}
debubg("old text anim init finished...");
var animDone = true;
function newAnim(message, speed) {
    return new Promise((resolve,reject)=>{
        //here our function should be implemented 
        animDone = false;
        var messagey = message.split("");
        var messageyLength = messagey.length;
        //debubg(`${animDone} anim??`);
        for (let i = 0; i < messageyLength; i++) {
            //debubg(i);
            setTimeout(function timer() {
            appendInline(messagey[i]);
            if (i == messageyLength - 1) {
                //debubg("dum")
                resolve();
                animDone = true;
            }
            }, i * speed);
        }
    });
};
debubg("newAnim init finished...");
async function animArt(array, speed) {
    var artLength = array.length;
    for (let i = 0; i < artLength; i++) {
        if (i != 0) {
            newLine();
        }
        await newAnim(array[i], speed);
    }
}

debubg("animArt init finished...");

function smartAnim(message, speed,) {
    if (typeof message == "string") { // if it's a string
        newAnim(message, speed);
    } else if (typeof message == "object") { // if it's an object (copyArr only works with arrays though, but typeof's definition says object so if it breaks, it breaks.)
        animArt(message, speed);
    } else {
        var poo = typeof message;
        debubg(`variable type "${poo}" not suppored for smart anim. supported var types are "string" and "object".`);
    }
}

debubg("smartAnim init finished...");


// this is so i can have links show up in the console properly n stuff because i cant just use animart because its dumb


// update from 2 seconds later i have no idea whats going on hold up i gotta re read through this


// basically i have to get the entirety of the console text into a variable at the beginning and then push it with the <a href> tag on each side

// so instead of directly appending to the console it's gonna append an already created string to the text that was there beforehand

// it may break things ubt eh

// what if i tried using regular anim tho

// hold on

function newLinkAnim(message, speed, link) {
    return new Promise((resolve,reject)=>{
        //here our function should be implemented 
        animDone = false;
        var yoy = consol.innerHTML;
        var messagey = message.split("");
        var messageyLength = messagey.length;
        //debubg(`${animDone} anim??`);
        var beforeText = `${consoltext}<a href="${link}" style="font-family: monospace;" target="_blank" class="link">`;

        
        for (let i = 0; i < messageyLength; i++) {
            //debubg(i);
            setTimeout(function timer() {
            
            
            beforeText = `${beforeText}${messagey[i]}`
            

            var frame = `${beforeText}</a>`;

            //debubg(frame);

            setScreen(frame);

            if (i == messageyLength - 1) {
                //debubg("dum")
                resolve();
                animDone = true;
            }
            }, i * speed);
        }
    });
};

function newColourAnim(message, speed, colour) {
    return new Promise((resolve,reject)=>{
        //here our function should be implemented 
        animDone = false;
        var yoy = consol.innerHTML;
        var messagey = message.split("");
        var messageyLength = messagey.length;
        //debubg(`${animDone} anim??`);
        var beforeText = `${consoltext} <span style="color: ${colour}; font-family: monospace;" class="link">`

        
        for (let i = 0; i < messageyLength; i++) {
            //debubg(i);
            setTimeout(function timer() {
            
            
            beforeText = `${beforeText}${messagey[i]}`
            

            var frame = `${beforeText}</span>`;

            //debubg(frame);

            setScreen(frame);

            if (i == messageyLength - 1) {
                //debubg("dum")
                resolve();
                animDone = true;
            }
            }, i * speed);
        }
    });
};

function newColourLinkAnim(message, speed, link, colour) {
    return new Promise((resolve,reject)=>{
        //here our function should be implemented 
        animDone = false;
        var yoy = consol.innerHTML;
        var messagey = message.split("");
        var messageyLength = messagey.length;
        //debubg(`${animDone} anim??`);
        var beforeText = `${consoltext} <a href="${link}" style="color: ${colour}; font-family: monospace;" target="_blank" class="link">`

        
        for (let i = 0; i < messageyLength; i++) {
            //debubg(i);
            setTimeout(function timer() {
            
            
            beforeText = `${beforeText}${messagey[i]}`
            

            var frame = `${beforeText}</a>`;

            //debubg(frame);

            setScreen(frame);

            if (i == messageyLength - 1) {
                //debubg("dum")
                resolve();
                animDone = true;
            }
            }, i * speed);
        }
    });
};


debubg("special anim init finished...");


function removeInline(amounb) {
    consoltext = consoltext.slice(0, -1 * amounb);
    consoleWipe(consoltext);
    scrolly();
};
debubg("removeInline init finished...");
function removeAnim(speed) {
    var message = consol.innerHTML;
    //debubg(message);
    return new Promise((resolve,reject)=>{
        //here our function should be implemented 
        animDone = false;
        var charmount = 1;
        var messagey = message.split("");
        var messageyLength = messagey.length;
        if (speed == "auto") {
            speed = 560 / messageyLength;
            debubg(`SPEEEEEED ${speed}`);
            if (speed < 2 ) {
                charmount = 0.00560 * messageyLength;
                charmount = Math.round(charmount);
                debubg(`SCHFDKSJBFKSJDFL ${charmount}`);
            }
        }
        //debubg(`${animDone} anim??`);
        for (let i = 0; i < messageyLength / charmount; i++) {
            //debubg(i);
            setTimeout(function timer() {
            removeInline(charmount);
            debubg(`${i}, ${messageyLength}`);
            //debubg(consoltext);
            var newLength = consol.innerHTML;
            newLength = newLength.length;
            //if (i < newLength) {
            //    break;
            //} else 
            if (i == messageyLength) {
                //debubg("dum")
                resolve();
                animDone = true;
            }
            }, i * speed);
        }
    });
};
function cleary() {
    // MAKE IT CLEAR THE THING BUT ANIMATED SO ITS THE REVERSE OF IF IT WAS ADDING TEXT
    removeAnim("auto");
    //consol.innerHTML = ``;
};
debubg("fancy screen clearing init finished...");
//newAnim("yes no", 20);
function settingridng() {
    //just to displau
    setTimeout(function() {
    }, 500)
}
async function aboutPage() {
    await newLine();
    await animArt(aboot, 2.5);
    await animArt(abooot, 10);
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
    // thank you Tim Down https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
}
var syslist = [
    "MAINSYS",
    "FILESYS"
];
// lets make an easy command argument function because WHY NOT
// and then not remake old commands that use inputs because im lazy and sue me
// omgomomgomg i just had an idea for a mini debug console you could toggle on and off and move around in the corner omOGMONGIDFG ok i need to do one thing at a time but im putting it in my mental list of cool things to add and you cant stop me heehhehehfGESFgsfskfgesLFG sefkjxdgkxd;f g lks gnx dkjgmbgk
function argComm(incommand) {
    // argument commands setup
    var commandargs = incommand.split(" ");
    return commandargs;
}
// that was easy
// NEW IDEA!!
// you know the text ascii art for the about page??
// make a function that will go and print those for you without having to make the ui element every time
// YES.
function asciiText(font, text) {
    var fontlow = font.toLowerCase()
    if (fontlow == "" || fontlow == "default" || fontlow == "def" || fontlow == "d") {
        var textArr = text.split("");
        debubg(textArr);
        debubg(text);
        textLen = textArr.length;
        textHeight = 9; // the height of the ascii font 
        var finalText = []; // the final text variable itll return
        var currentLine = ""; // the current line it's appending to
        for (let i = 0; i < textHeight; i++) {
            // repeat for every line of the character
            currentLine = "";
            for (let e = 0; e < textLen - 1; e++) {
                // mmmmmmmm   .charCodeAt(0);
                var letter = textArr[e];
                var lettID = letter.charCodeAt(0);
                var lala = asciifont[lettID][i];
                debubg(`${i} ${e}: ${letter} ${lettID}: ${lala}`);
                currentLine = `${currentLine}${lala} `
            }
            debubg(`CURRENT: ${currentLine}`);
            //newLine();
            finalText.push(currentLine);
            // its appending the lines twice for some reason
            //found it
            // i wasnt clearing currentLine before the next line so itd just append onto the last line
            // YES
            // IT WORKS
        }
        debubg(currentLine);
        debubg(finalText);
        return finalText



    } else if (fontlow == "slant" || fontlow == "s" || fontlow == "sla") {
        var textArr = text.split("");
        debubg(textArr);
        debubg(text);
        textLen = textArr.length;
        textHeight = 6; // the height of the ascii font 
        var finalText = []; // the final text variable itll return
        var currentLine = ""; // the current line it's appending to


        for (let i = 0; i < textHeight; i++) {
            // repeat for every line of the character
            debubg(`line: ${i}`);

            
            currentLine = " ".repeat(-1 * i + 5);   // make it so itll add spaces
            for (let e = 0; e < textLen - 1; e++) {
                // mmmmmmmm   .charCodeAt(0);


                var letter = textArr[e];



                var lettID = letter.charCodeAt(0);


                var lala = asciifontslant[lettID][i];
                var lalar = `${asciifontslant[lettID][i]}`.split("");


                debubg(`${i} ${e}: ${letter} ${lettID}: ${lala}`);

                var lalabeg = lalar.slice(0,1);
                var lalaend = lala.substr(1);


                if (lalabeg == " ") {
                    currentLine = `${currentLine}${lalaend}`
                } else {
                    currentLine = `${currentLine.slice(0, -1)}${lala}`
                }


                debubg(`heha: ${lalabeg} : ${lalaend}`);
                
                   
            
                



            }
            debubg(`CURRENT: ${currentLine}`);
            //newLine();
            finalText.push(currentLine);
            // its appending the lines twice for some reason
            //found it
            // i wasnt clearing currentLine before the next line so itd just append onto the last line
            // YES
            // IT WORKS
        }
        debubg(currentLine);
        debubg(finalText);
        return finalText

    } else {
        return ['please select a font. to get a full list of fonts, run "font list"'];
    }
}
function coopyIf(output) {
    if (coopy == true) {
        if (typeof output == 'string') { // if it's a string
            copyclip(output);
        } else if (typeof output == "object") { // if it's an object (copyArr only works with arrays though, but typeof's definition says object so if it breaks, it breaks.)
            copyArr(output);
        } else {
            debubg("variable type not suppored for copying. supported type are: string, object");
        }
    } else {
        debubg("copy is not enabled. skipping.");
    }
}
function debugHidey() {
    var debubtoHide = document.getElementById()
}

function varExists(variable) {
    var existy = false;
    eval(`if (typeof ${variable} !== 'undefined') { existy = true;}`);
    return existy
}

function keyExists(json, key) {
    var yes;
    if(json.hasOwnProperty(`${key}`)){
        yes = true;
    } else {
        yes = false;
    }
    return yes
}

// more json crap ahaa ha a ha h ha


function jsonReplace(string, json, to) {
    var toot = 0;
    var foom = 1;
    var finale = `${string}`;
    debubg(`[url parsing] original: ${finale}`);
    if (to == false) {
        toot = 1;
        foom = 0;
    }
    for (i in json["parse"]) {
        var too = json["parse"][i][toot];
        var foo = json["parse"][i][foom];
        debubg(`[url parsing] haha: ${too} | ${foo}`);
        finale = finale.replace(`${too}`, `${foo}`);
        debubg(`[url parsing] ${i}: ${finale}`);
    }
    return finale
}

function howMany (in_string, string) {
    var amount = `${in_string}`.split(`${string}`).length - 1
    return amount
}


function setBackColour(colour) {
    // background colour
    var r = hexToRgb(colour).r;
    var g = hexToRgb(colour).g;
    var b = hexToRgb(colour).b;
    debubg(`${r}${g}${b}`);
    // #7cfc00 GREEN
    document.getElementById("body").style.background = colour;
    document.getElementById("scrollbar-back").innerHTML = `::-webkit-scrollbar-track { background: ${colour}; } ::-webkit-scrollbar-corner { background: ${colour} }`;
    localStorage.setItem("back-colour", colour);
    backcolour = `${colour}`;
}

function setTextColour(colourcode) {
    // text colour
    var r = hexToRgb(colourcode).r;
    var g = hexToRgb(colourcode).g;
    var b = hexToRgb(colourcode).b;
    debubg(`${r}${g}${b}`);
    // #7cfc00 GREEN
    document.getElementById("body").style.color = colourcode;
    document.getElementById("consoleinput").style.color = colourcode;
    document.getElementById("consoleinputstyle").style.color = colourcode;
    document.getElementById("scrollbar-colour").innerHTML = `::-webkit-scrollbar-thumb { background: rgba(${r}, ${g}, ${b}, 0.5); }`;
    document.getElementById("link-styles").innerHTML = `.link {color: ${colourcode}; font-family: COURIERPRIME; } .link:hover { color: ${colourcode}; font-family: COURIERPRIME; } .link:visited { color: ${colourcode}; font-family: COURIERPRIME; } .link:active { color: ${colourcode}; font-family: COURIERPRIME; } `;
    localStorage.setItem("text-colour", colourcode);
    textcolour = `${colourcode}`;
}

function setUser(inuser) {
    user = inuser;
    localStorage.setItem("currentaccount", inuser);
}


function getRandomFromArr(inArray) {
    // gets random element from array
    var hehe = inArray[Math.floor(Math.random()* inArray.length)];
    return hehe

}

function getWorbleWord() {
    // gets random element from array

    var isAwful = Math.random()* 5;

    var hehe = "";
    if (isAwful != 1) {

        // local words
        var id = Math.floor(Math.random()* worble_words.length);
        worble_word_id = `${id}`;
        var hehe = worble_words[id];
    } else {
        // local words
        var id = Math.floor(Math.random()* worble_awful_words.length);
        worble_word_id = `${id}`;
        var hehe = worble_words[id];



    }


    return hehe

}

// ALL BASE WORBLE FUNCTIONS:

function worbleStatus(bool) {
    debubg(`setting worble game status to ${bool}`);
    worble_status = bool;
    localStorage.setItem("worble_status", `${bool}`);
}

function worbleColourUpdate() {
    // will uodate colours via each span having a different class for the colours so it'll update automatically
    debubg("updating worble display colours...");
    if (worble_colourblind == true) {
        worble_green = `${worble_blind_green}`;
        worble_yellow = `${worble_blind_yellow}`;
        worble_share_green = `${worble_share_blind_green}`;
        worble_share_yellow = `${worble_share_blind_yellow}`;
    } else {
        worble_green = `${worble_df_green}`;
        worble_yellow = `${worble_df_yellow}`;
        worble_share_green = `${worble_share_df_green}`;
        worble_share_yellow = `${worble_share_df_yellow}`;
    }

    document.getElementById("worble-colours").innerHTML = `.worble-green {
        background-color: ${worble_green};
      }
      .worble-yellow {
        background-color: ${worble_yellow};
      }
      .worble-gray {
        background-color: ${worble_gray};
      }`
}

function worbleColourblind(bool) {
    debubg(`setting worble colourblind mode to ${bool}`);
    worble_colourblind = bool;
    localStorage.setItem("worble_colourblind", `${bool}`);
    worbleColourUpdate();
}

function worbleWord(word) {
    debubg(`[WORBLE WORD SET]: setting worble word to ${word}`);
    worble_word = `${word}`;
    localStorage.setItem("worble_word", word);
}




function saveWorble() { // save worble

    var finalSave = "";

    for (i in worble_save) { // for every entry in the save variable
        var currentword = worble_save[i];   // get current word itll focus on
        debubg(`[WORBLE SAVE]: saving "${currentword}"`);
        if (i == 0) {                                   // if it's the first entry
            finalSave = `"${currentword}"`;             // don't put a comma since there's nothing in front of it
        } else {                                        // if it's any other entry
            finalSave = `${finalSave},"${currentword}"` // do put a comma because there's actually stuff in front of it
        }
    }
    debubg(`[WORBLE SAVE]: final worble save: ${finalSave}`);

    localStorage.setItem("worble_save", `${finalSave}`);
    localStorage.setItem("worble_guesscount", worble_guesscount);
}


function loadWorble() { //load worble
    var rawSave = localStorage.getItem("worble_save");  // get worble save
    var saveWithJson = `{ "worble": [${rawSave}] }`;    // add the extra characters to make it work as json
    debubg(`[WORBLE LOAD]: loaded worble save: ${saveWithJson}`);
    var parsedJson = JSON.parse(saveWithJson);          // parse it into json

    var tempSave = [];

    for (i in parsedJson["worble"]) {                   // iterate through all the words
        var currentWord = parsedJson["worble"][i];      // set the current word
        debubg(`[WORBLE LOAD]: current word: ${currentWord}`);
        tempSave.push(`${currentWord}`);                // add the current word to the temp array
    }
    debubg(`[WORBLE LOAD]: loaded worble save: ${tempSave}`);
    //worble_save = tempSave;                             // put it on js variable
    debubg(`[WORBLE LOAD]: loading complete.`);
    worble_guesscount = parseInt(localStorage.getItem("worble_guesscount"));
    return tempSave
}

function parseWorble() { // parse the worble save into colours
    debubg(`[WORBLE PARSE]: parsing worble...`);
    var finalParse = [];
    for (i in worble_save) {                                    // for every word in the worble save
        var currentwordguess = `${worble_save[i]}`;             // choose the word from the save
        debubg(`[WORBLE PARSE]: parsing word "${currentwordguess}" from worble save`);
        // why did it have to be him [james marriott]
        var currentguessletters = `${currentwordguess}`.split("");   // split the word guess into an array
        var currentletters = `${worble_word}`.split("");             // same as above but for the actual word
        var finalwordParse = "";

        //debubg(currentguessletters);
        //debubg(currentletters);
        
        var jsontm_real = new Object();                         // will hold key/value pairs for the letters and their counters n stuff
        var jsontm_guess = new Object();

        for (i in currentletters) {                             // for each actual letter in the word
            var real_letter = currentletters[i];                // get the real letter from the word
            var guess_letter = currentguessletters[i];          // get the letter from your guess
            var real_many = howMany(`${worble_word}`, `${real_letter}`);
            var guess_many = howMany(`${currentwordguess}`, `${guess_letter}`);

            debubg(`[WORBLE PARSE]: there are ${real_many} of ${real_letter} in the real word.`);
            debubg(`[WORBLE PARSE]: there are ${guess_many} of ${guess_letter} in the guessed word.`);

            if (keyExists(jsontm_real, `${real_letter}`) == true) {
                jsontm_real[`${real_letter}`] += 1;
            } else {
                jsontm_real[`${real_letter}`] = 1;
            }

            if (keyExists(jsontm_guess, `${guess_letter}`) == true) {
                jsontm_guess[`${guess_letter}`] += 1;
            } else {
                jsontm_guess[`${guess_letter}`] = 1;
            }

            //debubg(jsontm_real);
            //debubg(jsontm_guess);
            
            debubg(`[WORBLE PARSE]: matching letter ${guess_letter} with ${real_letter}`);

            if (guess_letter == real_letter) {                      // letter exists in that exact place
                finalwordParse = `${finalwordParse}G`;

            } else if (guess_letter == undefined) {
                finalwordParse = `${finalwordParse}S`;
            } else if (worble_word.indexOf(guess_letter) >= 0) {    // letter exists somewhere

                if (guess_many <= real_many) {
                    debubg(`[WORBLE PARSE]: too many of ${guess_letter}!!!`);
                    finalwordParse = `${finalwordParse}Y`;
                } else {
                    finalwordParse = `${finalwordParse}A`;
                }
            } else if (worble_word.indexOf(guess_letter) == -1) {    // gray
                finalwordParse = `${finalwordParse}A`;
            }




            //if (guess_letter == real_letter) {                      // green letter
            //    finalwordParse = `${finalwordParse}G`;
            //} else if (worble_word.indexOf(guess_letter) >= 0) {    // red leather yellow leather red leather yellow leather
            //    finalwordParse = `${finalwordParse}Y`;
            //} else if (worble_word.indexOf(guess_letter) == -1) {    // gray
            //    finalwordParse = `${finalwordParse}A`;
            //}



        }

        


        debubg(`[WORBLE PARSE]: pushing "${finalwordParse}" to word parse.`)
        finalParse.push(`${finalwordParse}`);
        if (finalwordParse.indexOf("Y") >= 0 || finalwordParse.indexOf("A") >= 0 || finalwordParse.indexOf("S") >= 0) {
            debubg(`[WORBLE PARSE]: found incorrect characters in guess! you are not done!!!! haha!!!`); // i love bullying people on the internet /j
        } else {
            // its just geen
            worbleStatus(false);
        }
        
        // i should update the vhs script lmao


    }
    debubg(`[WORBLE PARSE]: final parsed worble save: ${finalParse}`);
    return finalParse
}





function animWorble(worble_parsed) {
    newLine();
    newLine();
    var finalAppend = "";

    for (i in worble_save) {
        var worble_guess = worble_save[i];
        var worble_guess_parsed = worble_parsed[i];
        debubg(`[WORBLE ANIM]: animating word "${worble_guess}"`);
        
        for (i in worble_guess_parsed) {

            var worble_guess_letter = worble_guess[i];
            var worble_parsed_letter = worble_guess_parsed[i];
            
            debubg(`[WORBLE ANIM]: animating letter "${worble_guess_letter}"`);

            if (worble_parsed_letter == "G") {              // parse the single colour values into full or smth idk
                finalAppend = `${finalAppend}<span class="worble worble-green">${worble_guess_letter}</span>`;
            } else if (worble_parsed_letter == "Y") {
                finalAppend = `${finalAppend}<span class="worble worble-yellow">${worble_guess_letter}</span>`;
            } else if (worble_parsed_letter == "A") {
                finalAppend = `${finalAppend}<span class="worble worble-gray">${worble_guess_letter}</span>`;
            } else if (worble_parsed_letter == "S") {
                finalAppend = `${finalAppend}<span class="worble worble-gray"> </span>`;
            }

        }
        finalAppend = `${finalAppend}<br><br>`;
        
    }
    debubg(`[WORble ANIM]: ${finalAppend}`);
    appendInline(finalAppend);
    
}




function newWorble(restart, custom_word) {  // sets up worble
    
    debubg(`[WORBLE SETUP]: setup has been RUN`);
    worble_guesscount = 0;              // resets guess count (quite important)
    worble_save = new Array();          // resets worble save
    saveWorble();                       // save changes
    worbleStatus(true);                 // make it so that worble knows its not finished because the game literally just started
    worbleColourUpdate();               // updates colours just to make sure they're all good (doesnt hurt to check)

    if (custom_word != null || custom_word != undefined) {
        worbleWord(`${custom_word}`);   // sets to custom word
    } else {
        worbleWord(getWorbleWord());    // gets random word from word list 
    }
    
    
    
    
    debubg(`[WORBLE SETUP]: wordle word that has been chosen is ${worble_word}`);
    if (restart == true) {
        debubg(`[WORBLE SETUP]: restart is set to true`);
        worble_startscreen = [
            `Wordle game restarted!`,
            `Word length: ${worble_word.length} character(s)`
        ]
    } else {
        debubg(`[WORBLE SETUP]: restart is set to not true`);
        worble_startscreen = [
            `Wordle game started!`,
            `Word length: ${worble_word.length} character(s)`
        ]
    }
    newLine();
    animArt(worble_startscreen, 10);
}


function guessWorble(guess) {
    worble_guesscount += 1;
    debubg(`[WORBLE GUESS]: guessing ${guess}`);
    debubg(`${worble_save}`);
    debubg(`[WORBLE GUESS]: before push: ${worble_save}`);
    worble_save.push(`${guess}`);
    debubg(`[WORBLE GUESS]: after push: ${worble_save}`);
    saveWorble();

    animWorble(parseWorble())
}


function shareWorble(parsed) { // parse the worble save into colours
    var final = new Array();

    worble_raw_info = [
        `worble (https://dapug.lol/console?command=worble)`,
        `word ${worble_word_id}`,
        `${worble_guesscount}/∞ tries`
    ]


    for (i in parsed) {     // all the words
        var currentword = parsed[i];
        var currentletters = currentword.split("");
        debubg(`[WORBLE SHARE]: parsing: ${currentword}`);

        var currentLine = "";
        for(i in currentletters) {
            var lettertm = currentletters[i];
            debubg(`[WORBLE SHARE]: parsing: ${lettertm}`);

            if (lettertm == "G") {
                currentLine = `${currentLine}${worble_share_green}`;
            } else if (lettertm == "Y") {
                currentLine = `${currentLine}${worble_share_yellow}`;
            } else if (lettertm == "A") {
                currentLine = `${currentLine}${worble_share_gray}`;
            }

        }

        final.push(`${currentLine}`);
    }

    worble_share_finale = worble_raw_info.concat(final);
    debubg(worble_share_finale);
    copyArr(worble_share_finale);
}

// list of stuff i want:
// - [x] save the entire guess history and load the guess history from local data (load history from local only on page load but save every wordle guess)
// - [x] the colours are shown from a css class instead of directly in the span html
// - [x] each wordle letter is displayed like the rest of everything (steal code from colour append command lmao)
// - [x] more things ive forgotten to add to this list
 

// byebye old worble code, you will NOT be missed


//saveWorble();
//loadWorble();

//parseWorble("yes", "sey");
var shell = document.getElementById("consoleinput");

function historyIndex(moveamount) {
    // scroll through history

    // THE BigGER THE INDEX NUMBER, THE OLDER THE COMMAND IS!!!

    var histLen = commandHistory.length;
    var selected_command = "";
    var empty;
    var beginning;

    if (inHistory == false) {
        currentCommand = shell.value;
    }

    if (histLen == 0) {
        debubg(`[HISTORY INDEX]: nothing in command history.`);
        inHistory = false;
        commandIndex = 0;
        empty = true;
        beginning = false;
    } else if (commandIndex + moveamount < 0) {
        debubg(`[HISTORY INDEX]: reached the beginning of command history`);
        // if you move back to the current command (or into the negatives somehow)
        inHistory = false;
        commandIndex = 0;
        empty = false;
        beginning = true;
    } else if (commandIndex + moveamount >= histLen ) {
        debubg(`[HISTORY INDEX]: reached the end of command history`);
        // if you reach the end of the command history
        commandIndex = histLen - 1;
        inHistory = true;
        empty = false;
        beginning = false;
    } else if (commandIndex == 0 && inHistory == false) {
        debubg(`[HISTORY INDEX]: starting to go through the list`);
        currentCommand = shell.value;
        inHistory = true;
        empty = false;
        beginning = false;
    } else {
        debubg(`[HISTORY INDEX]: moving throughout the list`);
        // moving throughout the list
        empty = false;
        commandIndex += moveamount;
        inHistory = true;
        beginning = false;
    }

    if (beginning == true) {
        selected_command = `${currentCommand}`;
    } else if (empty == false) {
        selected_command = commandHistory[commandIndex];
    } else {
        selected_command = "";
    }


    debubg(`[HISTORY INDEX]: selected command: ${selected_command}, from index ${commandIndex}, current command: ${currentCommand}`);    

    return selected_command;


}

function historyPush() {
    // add command to the index
    debubg(`[COMMAND HISTORY PUSH]: pushing command "${shell.value}" to command history.`);
    commandHistory.unshift(`${shell.value}`);   // adds the command to the beginning of the array

}

function historyReset() {
    // reset the index to the last one in the array
    debubg(`[COMMAND HISTORY RESET]: resetting command history back to 0.`)
    commandIndex = 0;
    inHistory = false;
}

function replaceFromJson(string, json) {
    // replace every key with value from json in string
    var workingString = `${string}`;
    for (key in json) {
        console.log(`${key}: ${json[key]}`);
        workingString = workingString.replaceAll(`${key}`, `${json[key]}`);
    }
    debubg(`translating finished, final message is "${workingString}"`);
    return `${workingString}`
}


// =============================== TOOL FUNCTIONS ABOVE ==================
debubg("extra tool functions init finished...");

async function githubPage() {
    newLine();
    await animArt(githubArt, 1);
    newLine();
    newLine();
    await animArt(githubText, 1);
    newLine();
    newLine();
    await newLinkAnim("visit the github page", 5, "https://github.com/caeserlettuce/dapug-console");
}

async function worblePage() {
    newLine();
    var worbletext = asciiText("slant", `WORBLE!`)
    await animArt(worbletext, 2);
    await animArt(worble_info_1, 2);
    await newLinkAnim("Wordle", 2, "https://www.nytimes.com/games/wordle/index.html")
    await animArt(worble_info_2, 2);
}

async function worbleInfoPage() {
    newLine();

    worble_infoscreen = [
        `Worble Info:`,
        ` `,
        `Word length:       ${worble_word.length}`,
        `Word:              ${worble_word_id + 1}`,
        `Colourblind mode:  ${worble_colourblind}`,
        `Guess count:       ${worble_guesscount}/∞`,
        `Status:            ${worble_status}`,
        ` `,
        `Worble Save:`
    ]



    await animArt(worble_infoscreen, 5);
    await animWorble(parseWorble());
    debubg(`[WORBLE INFO]: worble word is ${worble_word}`);
    
}   

async function shareWorblePage() {
    shareWorble(parseWorble());
    newLine();
    await newAnim("worble copied to clipboard: ", 10);
    newLine();
    animArt(worble_share_finale, 10);

}

async function worbleDone() {
    // you got it right
    await newAnim(`You got the worble! use 'worble start' to start a new game!`, 10);
    shareWorble(parseWorble());
}

async function restartWorble() {
    newLine();
    await newAnim(`The worble was "${worble_word}"!`, 5)
    newLine();
    newWorble(true);
}

async function fitnessGram() {
    newLine();
    await animArt(fitnessgram, 2);
    await animArt(fitnessgram_1, 1);
}



debubg("async command functions init finished...");


// colour setting automatically tm

setTextColour(textcolour)
setBackColour(backcolour)


// EXAMPLE INLINE FNCTIONS WHERE THEY ONLY rUN ONE THING AT A TIME INSTEAD OF EVERYTHING RUNNING AT HE SAME TIME
//function exampleInline() {
//    return new Promise((resolve,reject)=>{
//        // your code
//        resolve();
//    })
//}
//async function exampleInline2() {
//    await exampleInline();
//    await exampleInline();
//}
// EXAMPLE REPEAT FOR X TIMES:
// for (let i = 0; i < amountVAr; i++) {
//
//  console.log(`the current loop is ${i});
//
//}
// https://keycode.info/
// making it so when you press enter in the input itll run the thing
//
//
//
// IF YOU WANT SOEMTHING TO RUN IF DOING A SPECIFIC THING RETURNS AN ERROR USE THIS:
//
//  let request = doThisThing;
//
//  request.onerror = function();
//
//  request.onsuccess = function();
//
//
//
//  IDEAS TO ADD:
//
//  be able to set like ?debug=true in the URL and have it turn on debug if so
//
//  same for variable debug
//
//  and then also have ?command=lovejoy
//
//  where itll run a command as the window opens
//
//  but also right now i need to finish the comments


var elem = document.getElementById("consoleinput");
    elem.onkeyup = function keyParse(e){
        if (inputlock == false) {
            if(e.keyCode == 13) {
                if (elem.value != "") {
                    if (enterlock == false) {
                        // stinky old code is gone!!!!

                        // *crab rave*

                        userAppend(`${elem.value}`, `${user}`);


                        historyPush();
                        


                        if (mainsys == true) {
                            parseCommand(elem.value);
                        } else if (filesys == true) {
                            filesysParse(elem.value);
                        }

                        historyReset();
                        elem.value = "";
                        scrolly();
                        //debubg(consoltext);
                        //debubg(commang);
                    }
                }

            } else if(e.keyCode == 37) {
                if (snakeinputs == true) {
                    debubg("left arrow detected");
                }
            } else if(e.keyCode == 38) {
                if (snakeinputs == true) {
                    debubg("up arrow detected");

                } else if (commandhistorylock == false) {
                    // get out of here old command history code, you stinky
                    var indexed = historyIndex(1); // index history up by 1
                    elem.value = `${indexed}`;

                }
                
            } else if(e.keyCode == 39) {
                if (snakeinputs == true) {
                    debubg("right arrow detected");
                }
            } else if(e.keyCode == 40) {
                if (snakeinputs == true) {
                    debubg("down arrow detected");

                } else if (commandhistorylock == false) {
                    // SAME WITH YOU! get outta here you stinky old code!! make room for the new code! just kidding!
                    // it uses up less space than you! ha!
                    var indexed = historyIndex(-1); // index history up by 1
                    elem.value = `${indexed}`;






                }
            }
            
    
        }
    }
        

console.log("key input init finished...");



