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

getCommentIter();

debubg("local storage init finished.");


// url params using my fancy plugin NOOOO I DONT HAVE THE FANY PLUGIN YET NOOOOOO
// for context i just got a new laptop and i have not yet copied over all my files from my old laptop except for this one so........
// ill work on that one later


// url params


globalVars(false);

var consoleParams = ["debug", "debugvar", "suggestion", "command"];


addParameters(consoleParams);

var pams = getParameters()

var pr_debug = pams[0];
var pr_debugvar = pams[1];
var pr_suggestion = pams[2];
var pr_command = pams[3];

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

function sleep(time) {
    setTimeout(function(){ alert("ass"); }, time);
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
function userAppend(message) {
    var yoy = consol.innerHTML;
    commHistory.push(yoy);
    consol.innerHTML = `${yoy}<br>${user}@dapug.lol> ${message}`;
    consoltext = `${yoy}<br>${user}@dapug.lol> ${message}`;
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
`;
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
        var beforeText = `${consoltext} <a href="${link}" target="_blank" class="link">`

        
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


debubg("newLinkAnim init finished...");


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
function asciiText(font, text, height) {
    var fontlow = font.toLowerCase()
    if (fontlow == "" || fontlow == "default" || fontlow == "def" || fontlow == "d") {
        var textArr = text.split("");
        debubg(textArr);
        debubg(text);
        textLen = textArr.length;
        textHeight = height; // the height of the ascii font 
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



debubg("async command functions init finished...");



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
                        var sting = elem.value;
                        commang.push(sting);
                        userAppend(`${sting}`);

                        if (mainsys == true) {
                            parseCommand(sting);
                        } else if (filesys == true) {
                            filesysParse(sting);
                        }

                        
                        elem.value = "";
                        currentHistCOm = 0;
                        currentCOM = 0;
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
                    debubg(`selecting previous message, histcom is ${currentHistCOmm}`);
                    if (currentHistCOmm == 0 ) {
                        currentCOM = elem.value;
                        debubg(`set current command in cache to ${elem.value}`);
                    }
                    var historylen = commang.length;
                    debubg(`command length is ${historylen}`);
                    
                    if (currentHistCOmm < historylen) {
                        currentHistCOmm += 1;
                        var la = historylen - currentHistCOmm;
                        debubg(`getting command ${la} from memory`);
                        var co = commang[la];
                        debubg(co);
                        elem.value = co;
                    }
                }
                
            } else if(e.keyCode == 39) {
                if (snakeinputs == true) {
                    debubg("right arrow detected");
                }
            } else if(e.keyCode == 40) {
                if (snakeinputs == true) {
                    debubg("down arrow detected");
                } else if (commandhistorylock == false) {
                    debubg(`selecting less previous message, histcom is ${currentHistCOmm}`); // i cant think of the word shut up
                    var historylen = commang.length;

                    if (currentHistCOmm > 1) {
                        currentHistCOmm -= 1;
                        var la = historylen - currentHistCOmm;
                        debubg(`getting command ${la} from memory`);
                        var co = commang[la];
                        debubg(co);
                        elem.value = co;
                    } else {
                        elem.value = currentCOM;
                        currentHistCOmm = 0;
                    }

                }
            }
            
    
        }
    }
        

console.log("key input init finished...");



