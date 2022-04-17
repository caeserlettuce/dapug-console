//      ____   ___     ____   __  __ ______    __     ____   __        __ ______ ____   _   __ _____  ____   __     ______ 
//     / __ \ /   |   / __ \ / / / // ____/   / /    / __ \ / /      _/_// ____// __ \ / | / // ___/ / __ \ / /    / ____/
//    / / / // /| |  / /_/ // / / // / __    / /    / / / // /     _/_/ / /    / / / //  |/ / \__ \ / / / // /    / __/  
//   / /_/ // ___ | / ____// /_/ // /_/ /_  / /___ / /_/ // /___ _/_/  / /___ / /_/ // /|  / ___/ // /_/ // /___ / /___ 
//  /_____//_/  |_|/_/     \____/ \____/(_)/_____/ \____//_____//_/    \____/ \____//_/ |_/ /____/ \____//_____//_____/
//                                                                                                                    
//
//  ITS THE DAPUG.LOL CONSOLE!!!!!
//
//
//
//  yes
//
//

function debubg(message) {
    if (debug_time == true) {
        var dat = new Date();
        var tim = `${dat.getHours()}:${dat.getMinutes()}:${dat.getSeconds()}:${dat.getMilliseconds()}`;
        message = `[${tim}]: ${message}`;
    }

    console.log(message);
    if (debug == true) {
        //var pogchamp = debug_win.body;
        //texty = pogchamp.innerHTML;
        //pogchamp.innerHTML = `${texty}<br>${message}`;
        //debug_win.document.write('<pre>HEHE</pre>');
        debug_win.document.getElementById("aaa").innerHTML += `${message}\n`;
        mom = debug_win.document.getElementById("aaa");
        mom.scrollTop = mom.scrollHeight;
    }
}

var debug_time = true;
debubg("debug message init finished...");
var consol = document.getElementById("consy");
var user = "user";
var user_permission;
var consoltext = "";
var inputlock = false;
var mainsys = true;
var filesys = false;
var comments = "";
var debug = false;
var debugvar = false;
var debugHide = false;
var debugHideVar = false;
var debugHideSonginfo = false;
var debugHideP1Cred = false;
var debugHideP2Cred = false;
var debugHideP1Ascii = false;
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
var accycolour = "#1e1e1e";
var autocommand = false;
var startup = false; // REMEMBER TO SET TO TRUE LATER (haha now its automatic)
var worble_status = false;
var worble_colourblind = false;
var worble_word = "";
var worble_word_id = 0;
var worble_randomvalue = 0;
var worble_save = [];
var worble_guesscount = 0;
var worble_wordslength = 0;
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
var worble_stats_guesses = [];
var worble_stats_restarts = 0;
var worble_stats_games = 0;
var worble_stats_currentstreak = 0;
var worble_stats_biggeststreak = 0;
var commandHistory = new Array();
var commandIndex = 0;
var currentCommand = "";
var inHistory = false;
var console_history = {0: "console started. type 'issue' if you find any issues/errors with this page. type 'help' for help."};
var console_colour_history = {0: "inherit"};
var console_link_history = {0: ""};
var console_id = 0;
var console_group_id = 0;
var musicTimeouts = 0; // number of timeouts in the current song
var cur_lyrics = new Object();
var paused_lyrics = true;
var lyr_status = new Array();
var portal_playing = false;
var portal_type = 1;
var og_textcolour = textcolour;
var og_backcolour = backcolour;
var og_accycolour = accycolour;
var egg = false;
var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var aspectratio = windowWidth / windowHeight;
var sizemod = 1;
var modlist = [                                                                 // the list of URLs to mods for console (tm)
    "https://raw.githubusercontent.com/caeserlettuce/dapug-console/83165118e417052d21f49dedab18b381338079db/example_mod.js",
]
var htmlmods = document.getElementById("mods");
var debug_win;
var debugvar_win;
var credits_playing = false;
var lyr_disp;
var orientation = "what";
var textheight = 20;
var debugwin_status = false;
var autodebugwin = false;
var listening_input = false;
var ask_do = function() {console.log("aaaaa!! im broken i think!!")};
var ask_return = "";
var listening_end = true;
var stars_save = new Object();
var stars_parse = new Array();
var stars_status = false;
var star_speed = 50;   // every quarter of a second itll add a new star
var star_fade_speed = 250;
var star_runtime = 0;
var star_running = false;
var starlock = false;
var starTimers = 0;
var touchtonetm = true;
var autoscrolling = false;
var scroll_bottom = true;
var autoscroll_buffer = 300;    // how many pixels up you have to scroll before autoscroll turns off
var cursor_pos = [0, 0];
var cursor_hide_timer;
var song_err = false;
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

function getAccyColour() {
    var coly = localStorage.getItem("accy-colour");

    if (coly) {
        debubg("local storage accy colour colour exists, skipping creation.");
    } else {
        debubg("creating accy colour local storage...");
        localStorage.setItem("accy-colour", "#1e1e1e");
        coly = localStorage.getItem("accy-colour");
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
        debubg("local storage accounts does exist, skipping creation.");
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

    var stats_guesses = localStorage.getItem("worble_stats_guesses"); // how many guesses per game

    var stats_currentstreak = localStorage.getItem("worble_stats_currentstreak"); // how many games youve won in a row currently

    var stats_biggeststreak = localStorage.getItem("worble_stats_biggeststreak"); // 

    var stats_restarts = localStorage.getItem("worble_stats_restarts"); // 

    var word_id = localStorage.getItem("worble_word_id"); // 

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

    if(stats_guesses) {
        // exists
        debubg("[WORBLE] worble stats guesses is saved. continuing.");
        worble_stats_guesses = JSON.parse(stats_guesses)["guesses"];
    } else {
        // not set eixsir he hehhe hehe hehe i h he heheh  ehe e
        debubg("[WORBLE] worble stats guesses is not saved. creating."); 
        localStorage.setItem("worble_stats_guesses", '');
    }

    if(stats_restarts) {
        // exists
        debubg("[WORBLE] worble stats restarts is saved. continuing.");
        worble_stats_restarts = parseInt(stats_restarts);
    } else {
        // not set eixsir he hehhe hehe hehe i h he heheh  ehe e
        debubg("[WORBLE] worble stats restarts is not saved. creating."); 
        localStorage.setItem("worble_stats_restarts", '');
    }

    if(stats_currentstreak) {
        // exists
        debubg("[WORBLE] worble stats current streak is saved. continuing.");
        worble_stats_currentstreak = parseInt(stats_currentstreak);
    } else {
        // not set eixsir he hehhe hehe hehe i h he heheh  ehe e
        debubg("[WORBLE] worble stats current streak is not saved. creating."); 
        localStorage.setItem("worble_stats_currentstreak", 0);
    }

    if(stats_biggeststreak) {
        // exists
        debubg("[WORBLE] worble stats biggest streak is saved. continuing.");
        worble_stats_biggeststreak = parseInt(stats_biggeststreak);
    } else {
        // not set eixsir he hehhe hehe hehe i h he heheh  ehe e
        debubg("[WORBLE] worble stats biggest streak is not saved. creating."); 
        localStorage.setItem("worble_stats_biggeststreak", 0);
    }

    if(word_id) {
        // exists
        debubg("[WORBLE] worble stats biggest streak is saved. continuing.");
        worble_word_id = parseInt(word_id);
    } else {
        // not set eixsir he hehhe hehe hehe i h he heheh  ehe e
        debubg("[WORBLE] worble stats biggest streak is not saved. creating."); 
        localStorage.setItem("worble_word_id", 0);
    }
}

function themeInit() {
    var themey = localStorage.getItem("themes");

    if (themey) {   // if it exists
        debubg('[THEME INIT] themes localstorage exists!');
        custom_themes = JSON.parse(themey);

    } else { // if it doesnt exist
        debubg('[THEME INIT] themes localstorage doesnt exist!');
        localStorage.setItem("themes", JSON.stringify(custom_themes));
    }
}

function fixDevExploit() {
    var deed = localStorage.getItem("dev-exploit");

    // for context, in the github version of this site, there is a file called devtools.js, which automatically sets your user to dev (because why not)
    // and so, i once accidentally pushed it to the official site, and so everyone who had loaded the site, had gotted the dev user
    // i dont want to have it reset your user every single time, so i thought of this:
    // i make a new local storage variable, where if that local storage variable is not equal to 1, it'll set your user to user, and then set that vatiable to 1
    // so that way it'll only reset your user once!

    if (deed) {
        if (deed != 1) {                        // if the variable is not 1
            setUser("user");                    // set user to user
            localStorage.setItem("dev-exploit", 1);    // set it to 1
        }
    } else {
        localStorage.setItem("dev-exploit", 0);
    }
}



fixDevExploit();
themeInit();
worbleInit();
doStart();
getCommentIter();
accountRegistry();
textcolour = getTextColour();
backcolour = getBackColour();
accycolour = getAccyColour();
og_textcolour = textcolour;
og_backcolour = backcolour;
og_accycolour = accycolour;

debubg("local storage init finished.");

//  .M.              +M         .%MMMMMMM%.  .%MMMMMM     :MMMM:     +M                     .%MMMMMMM%. %MMMMMMMM% .%MMMMMMM%. +MMMMMMM%.     :MMMM:     .%MMMMMMM%. +MMMMMMMMI              .M.  
// .M'M.             MM         %MM%' '%MM% .%MMMMMMM    :MMMMMM:    MM                     %MM%' '%MM% %MMMMMMMM% %MM%' '%MM% MM+'  '+M%    :MMMMMM:    %MM%' '%MM% MMMMMMMMMI             .M'M. 
// M' 'M             MM         MM'     'MM %MM%'        IMM::MMI    MM                     MM'             MM     MM'     'MM MM      MM    IMM::MMI    MM'     'MM MM+                    M' 'M 
//                   MM         MM       MM MMM'        :MM:  :MM:   MM                     MM%.......      MM     MM       MM MM+.  .+M%   :MM:  :MM:   MM          MM........                   
//                   MM         MM       MM MMM         IMM:  :MMI   MM                      %MMMMMMM%.     MM     MM       MM MMMMMMMM%'   IMM:  :MMI   MM          MMMMMMMMMM                   
//                   MM         MM       MM MMM.       :MMMMMMMMMM:  MM                       ''''''%MM     MM     MM       MM MM  'MM.    :MMMMMMMMMM:  MM      MM% MM''''''''                   
//                   MM         MM.     .MM %MM%.      IMM:    :MMI  MM                             .MM     MM     MM.     .MM MM   'MM.   IMM:    :MMI  MM.     'MM MM+                          
//                   MM........ %MM%. .%MM% '%MMMMMMM :MM%      %MM: MM........             %MM%. .%MM%     MM     %MM%. .%MM% MM    'MM. :MM%      %MM: %MM%. .%MM% MMMMMMMMMI                   
//                   +MMMMMMMM% '%MMMMMMM%'  '%MMMMMM :MM:      :MM: +MMMMMMMM%             '%MMMMMMM%'     MM     '%MMMMMMM%' +M     'MM :MM:      :MM: '%MMMMMMM%' +MMMMMMMMI                   


// url params using my fancy plugin NOOOO I DONT HAVE THE FANY PLUGIN YET NOOOOOO
// for context i just got a new laptop and i have not yet copied over all my files from my old laptop except for this one so........
// ill work on that one later


// url params


globalVars(false);

var consoleParams = ["debug", "debugvar", "suggestion", "command", "textcolour", "backcolour", "text", "accycolour"];


addParameters(consoleParams);

var pams = getParameters()

var pr_debug = pams[0];
var pr_debugvar = pams[1];
var pr_suggestion = pams[2];
var pr_command = pams[3];
var pr_textcolour = pams[4];
var pr_backcolour = pams[5];
var pr_text = pams[6];
var pr_accycolour = pams[7];

debubg(`[url param init] debug: ${pr_debug}, debugvar: ${pr_debugvar}, suggestion: ${pr_suggestion}, command: ${pr_command}`);


// toggle the debugs
if (pr_debug == "true") {
    //debug = true;
    //autodebugwin = true;
} else {
    debug = false;
}
if (pr_debugvar == "true") {
    debugvar = true;
} else {
    debugvar = false;
}

// suggest command

if (pr_text != undefined || pr_text != null) {
    console_history[0] = `${pr_text}`;
}

// auto text


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
if (pr_accycolour != null) {
    accycolour = `#${pr_accycolour}`;
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
//    scrolly("consy");
    //debubg(consoltext);
    //debubg(commang);

//}

debubg("url params init finished...");

//  .M.              MM       MM +MMMMMMM%. +M                     +MMMMMMM%.     :MMMM:     +MMMMMMM%.     :MMMM:     +MM.    .MM+ .%MMMMMMM%.              .M.  
// .M'M.             MM       MM MM+'  '+M% MM                     MM+'  '+M%    :MMMMMM:    MM+'  '+M%    :MMMMMM:    MMMM.  .MMMM %MM%' '%MM%             .M'M. 
// M' 'M             MM       MM MM      MM MM                     MM      MM    IMM::MMI    MM      MM    IMM::MMI    MM'MM  MM'MM MM'                     M' 'M 
//                   MM       MM MM+.  .+M% MM                     MM+.  .+M%   :MM:  :MM:   MM+.  .+M%   :MM:  :MM:   MM MM..MM MM MM%.......                    
//                   MM       MM MMMMMMMM%' MM                     MMMMMMMM%'   IMM:  :MMI   MMMMMMMM%'   IMM:  :MMI   MM 'MMMM' MM  %MMMMMMM%.                   
//                   MM       MM MM  'MM.   MM                     MM          :MMMMMMMMMM:  MM  'MM.    :MMMMMMMMMM:  MM  'MM'  MM   ''''''%MM                   
//                   MM       MM MM   'MM.  MM                     MM          IMM:    :MMI  MM   'MM.   IMM:    :MMI  MM        MM         .MM                   
//                   %MM%   %MM% MM    'MM. MM........             MM         :MM%      %MM: MM    'MM. :MM%      %MM: MM        MM %MM%. .%MM%                   
//                    %MMMMMMM%  +M     'MM +MMMMMMMM%             +M         :MM:      :MM: +M     'MM :MM:      :MM: +M        M+ '%MMMMMMM%'                   

function scrollBottom(id) {
    var div = document.getElementById(id);
    div.scrollTop = div.scrollHeight - div.clientHeight;
}
debubg("scrollBottom init finished...");

debugWindow(debug);

document.getElementById("songinfo").style.display = "none";
document.getElementById("p2cred").style.display = "none";
document.getElementById("p1cred").style.display = "none";
document.getElementById("p1ascii").style.display = "none";

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
function toggleHideSongInfo() {
    if (debugHideSonginfo == false) {
        debugHideSonginfo = true;
        debubg("debugHideSonginfo is soooo true now");
        document.getElementById("songpeepvar").style.display = "none";
        document.getElementById("songinfo").style.height = "30px";
    } else {
        debugHideSonginfo = false;
        debubg("debugHideSonginfo is false now");
        document.getElementById("songpeepvar").style.display = "";
        document.getElementById("songinfo").style.height = "130px";
    }
}
function toggleHideP1Cred() {
    if (debugHideP1Cred == false) {
        debugHideP1Cred = true;
        debubg("debugp1 is soooo true now");
        document.getElementById("p1creed").style.display = "none";
        document.getElementById("p1cred").style.height = "30px";
    } else {
        debugHideP1Cred = false;
        debubg("debugp1 is false now");
        document.getElementById("p1creed").style.display = "";
        document.getElementById("p1cred").style.height = "420px";
    }
}
function toggleHideP2Cred() {
    if (debugHideP2Cred == false) {
        debugHideP2Cred = true;
        debubg("debugHideSonginfo is soooo true now");
        document.getElementById("p2creed").style.display = "none";
        document.getElementById("p2cred").style.height = "30px";
    } else {
        debugHideP2Cred = false;
        debubg("debugHideSonginfo is false now");
        document.getElementById("p2creed").style.display = "";
        document.getElementById("p2cred").style.height = "420px";
    }
}
function toggleHideP1Ascii() {
    if (debugHideP1Ascii == false) {
        debugHideP1Ascii = true;
        debubg("debugHideSonginfo is soooo true now");
        document.getElementById("p1aascii").style.display = "none";
        document.getElementById("p1ascii").style.height = "30px";
    } else {
        debugHideP1Ascii = false;
        debubg("debugHideSonginfo is false now");
        document.getElementById("p1aascii").style.display = "";
        document.getElementById("p1ascii").style.height = "420px";
    }
}


// new debug stuff

function debugWindow(bool) {
    
    if (bool == true) {     // if it open window
        debugwin_status = true;
        debug_win = window.open("", "Title", "directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no,width=400,height=350,top="+(screen.height-400)+",left="+(screen.width-840));
        try {
            debug_win.document.write(`
            <style>::-webkit-scrollbar {width: 10px;height: 10px;} body {overflow: hidden;} .eee {overflow: scroll; width: calc(100vw - 10px); height: calc(100vh - 10px);}</style>
            <style id="scroll-text-style">::-webkit-scrollbar-thumb { background: ${accycolour}; }</style>
            <style id="scroll-back-style">::-webkit-scrollbar-track { background: ${backcolour}; } ::-webkit-scrollbar-corner { background: #000000 }</style>
            <style id="back-style">body { background-color: ${backcolour};}</style>
            <style id="text-style">body { color: ${textcolour};}</style>
            <title>CONSOLE DEBUG</title>
            <link rel="icon" href="icon.png">`);
            debug_win.document.write('<pre id="aaa" class="eee"></pre>'); 
            debug_win.document.write(`<script>
            var toot = false;
            setInterval(function() {                    // loop this every quarter second
                toot = false;
                try {
                    if (window.opener.debug != true) {      // if debug is false
                        window.close();                     // close window
                    } else {
                        toot = true;                        // else go and set it to true
                    }
                } catch (err) {                             // if it returns an error (like if the main console window is closed)
                    if (toot == false) {
                        window.close();                     // close this window
                    }
                }
            }, 250);
            </script>`);
        } catch (err) {
            console.log("oh crap i think the popup got blocked or smth");
            displayAnim("\nUh oh! it seems that the debug window didn't open! Please make sure that popups are allowed on this site!", 7, "#ff0000");
        }
        var debug_check = setInterval(function() { 
            if(debug_win.closed) {
                clearInterval(debug_check);
                debug = false;
                debubg("debug window closed!!");
            }
        }, 1000);
    } else {
        //debug_win.close();
    }
}

debubg("debug window init finished...");

//  .M.              +MMMMMM%+   MM    MM +MM.      M+     :MMMM:     +MM.    .MM+ mmmmmmmmmm  .%MMMMMM             +M        M+ mmmmmmmmmm +MM.      M+ +MMMMMM%+   .%MMMMMMM%. +M        M+ .%MMMMMMM%.              .M.  
// .M'M.             MMMMMMMMMI  MM.  .MM MMMM.     MM    :MMMMMM:    MMMM.  .MMMM MMMMMMMMMM .%MMMMMMM             +M        M+ MMMMMMMMMM MMMM.     MM MMMMMMMMMI  %MM%' '%MM% +M        M+ %MM%' '%MM%             .M'M. 
// M' 'M             MM+    +MM; 'MM  MM' MM'MM.    MM    IMM::MMI    MM'MM  MM'MM     MM     %MM%'                 +M        M+     MM     MM'MM.    MM MM+    +MM; MM'     'MM +M        M+ MM'                     M' 'M 
//                   MM      MM:  MM..MM  MM 'MM.   MM   :MM:  :MM:   MM MM..MM MM     MM     MMM'                  MM  'MM'  MM     MM     MM 'MM.   MM MM      MM: MM       MM MM  'MM'  MM MM%.......                    
//                   MM      MM:  'MMMM'  MM  'MM.  MM   IMM:  :MMI   MM 'MMMM' MM     MM     MMM                   MM 'MMMM' MM     MM     MM  'MM.  MM MM      MM: MM       MM MM 'MMMM' MM  %MMMMMMM%.                   
//                   MM      MM:   'MM'   MM   'MM. MM  :MMMMMMMMMM:  MM  'MM'  MM     MM     MMM.                  MM MM..MM MM     MM     MM   'MM. MM MM      MM: MM       MM MM MM..MM MM   ''''''%MM                   
//                   MM+    +MM;    MM    MM    'MM.MM  IMM:    :MMI  MM        MM     MM     %MM%.                 MM'MM  MM'MM     MM     MM    'MM.MM MM+    +MM; MM.     .MM MM'MM  MM'MM         .MM                   
//                   MMMMMMMMMI     MM    MM     'MMMM :MM%      %MM: MM        MM mmmmMMmmmm '%MMMMMMM             MMMM.  .MMMM mmmmMMmmmm MM     'MMMM MMMMMMMMMI  %MM%. .%MM% MMMM.  .MMMM %MM%. .%MM%                   
//                   +MMMMMM%+      MM    +M      'MM+ :MM:      :MM: +M        M+ MMMMMMMMMM  '%MMMMMM             +MM.    .MM+ MMMMMMMMMM +M      'MM+ +MMMMMM%+   '%MMMMMMM%' +MM.    .MM+ '%MMMMMMM%'                   




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

debubg("window scale init finished...");

function scrollDifference(parmesan) {
    //console.log(mom.scrollTop, mom.scrollHeight);
    var scrolltop = parmesan.scrollTop;
    var scoll = scrolltop + vis_consyheight - 10;
    var diff = parmesan.scrollHeight - scoll;
    return diff
}


function scrolly(elf, force) {
    mom = document.getElementById(elf);
    var diff = scrollDifference(mom);
    if (diff <= autoscroll_buffer || force == true) {
        mom.scrollTop = mom.scrollHeight;
    }
    // jesse figure it out
};
debubg("scrolly init finished...");

function sizeCheck() {
    updateScreenVars();
    if (windowWidth > windowHeight) {
        // if on landscape
        orientation = "landscape";
        aspectratio = windowWidth / windowHeight;
        document.getElementById("body").style.fontSize = `${aspectratio * sizemod}vh`;
        document.getElementById("regtext").style.fontSize = `${aspectratio * sizemod}vh`;
        document.getElementById("consoleinputstyle").style.fontSize = `${1.25 * aspectratio * sizemod}vh`;
        document.getElementById("consoleinput").style.fontSize = `${1.25 * aspectratio * sizemod}vh`;
        document.getElementById("consy-height").innerHTML = `.consy { height: ${ windowHeight - ( document.getElementById("consoleinput").clientHeight + 35)}px; }`;
    } else if (windowWidth < windowHeight) {
        // if on portrait
        orientation = "portrait";
        aspectratio = windowHeight / windowWidth;
        document.getElementById("body").style.fontSize = `${2 * aspectratio * sizemod}vw`;
        document.getElementById("regtext").style.fontSize = `${2 * aspectratio * sizemod}vw`;
        document.getElementById("consoleinputstyle").style.fontSize = `${2.25 * aspectratio * sizemod}vw`;
        document.getElementById("consoleinput").style.fontSize = `${2.25 * aspectratio * sizemod}vw`;
        document.getElementById("consy-height").innerHTML = `.consy { height: ${ windowHeight - ( document.getElementById("consoleinput").clientHeight + 35)}px; }`;
    }

    debubg(orientation);


    vis_consywidth = inHorizViewport($('#consy'));
    vis_consyheight = inVertiViewport($('#consy'));

    display_textsize[0] = document.getElementById("regtext").clientWidth;
    display_textsize[1] = document.getElementById("regtext").clientHeight;

    display_charsize[0] = Math.floor( vis_consywidth / display_textsize[0]);
    display_charsize[1] = Math.floor( vis_consyheight / display_textsize[1]);

    //console.log("console width: ", vis_consywidth);
    //console.log("console height: ", vis_consyheight);
    //console.log("console text size: ", display_textsize);
    //console.log("console char size: ", display_charsize);


    // CALCULATING HOW MANY NEWLINES PER ENTIRE PAGE HEIGHT!!

    // so
    // (landscape) at 1% view height (of 907 pixels), it can display 43 lines
    // (portrait) at 2% view width (of 734 pixels), it can display 41 lines

    // actually imma just have it do a few checks, if CON_0 exists, it'll get the height of that, if that doesnt exist, it'll try getting CON_1 (when you run clear it starts on CON_1), and if none are present it'll just set it to 20

    // screw this im doing different math because this math is dumb
    
    // now its gonna calculate based on the height of a dummy text element with a single character that it gets the size of
    
    //console.log("height: ", textheight);
    //console.log("newlin: ", newline_height);


    

}
sizeCheck();
debubg("text scaling init finished...");


//  .M.              .%MMMMMMM%.  .%MMMMMM     :MMMM:     +M         mmmmmmmmmm +MM.      M+ .%MMMMMMM%.              .M.  
// .M'M.             %MM%' '%MM% .%MMMMMMM    :MMMMMM:    MM         MMMMMMMMMM MMMM.     MM %MM%' '%MM%             .M'M. 
// M' 'M             MM'         %MM%'        IMM::MMI    MM             MM     MM'MM.    MM MM'     'MM             M' 'M 
//                   MM%.......  MMM'        :MM:  :MM:   MM             MM     MM 'MM.   MM MM                            
//                    %MMMMMMM%. MMM         IMM:  :MMI   MM             MM     MM  'MM.  MM MM                            
//                     ''''''%MM MMM.       :MMMMMMMMMM:  MM             MM     MM   'MM. MM MM      MM%                   
//                           .MM %MM%.      IMM:    :MMI  MM             MM     MM    'MM.MM MM.     'MM                   
//                   %MM%. .%MM% '%MMMMMMM :MM%      %MM: MM........ mmmmMMmmmm MM     'MMMM %MM%. .%MM%                   
//                   '%MMMMMMM%'  '%MMMMMM :MM:      :MM: +MMMMMMMM% MMMMMMMMMM +M      'MM+ '%MMMMMMM%'                   












//  .M.              mmmmmmmmmm +MM.      M+ +MMMMMMM%. MM       MM %MMMMMMMM%              .%MMMMMM MM       MM +MMMMMMM%. .%MMMMMMM%. .%MMMMMMM%. +MMMMMMM%.             .%MMMMMMM%. %MMMMMMMM% MM       MM +MMMMMMMMI +MMMMMMMMI              .M.  
// .M'M.             MMMMMMMMMM MMMM.     MM MM+'  '+M% MM       MM %MMMMMMMM%             .%MMMMMMM MM       MM MM+'  '+M% %MM%' '%MM% %MM%' '%MM% MM+'  '+M%             %MM%' '%MM% %MMMMMMMM% MM       MM MMMMMMMMMI MMMMMMMMMI             .M'M. 
// M' 'M                 MM     MM'MM.    MM MM      MM MM       MM     MM                 %MM%'     MM       MM MM      MM MM'         MM'     'MM MM      MM             MM'             MM     MM       MM MM+        MM+                    M' 'M 
//                       MM     MM 'MM.   MM MM+.  .+M% MM       MM     MM                 MMM'      MM       MM MM+.  .+M% MM%.......  MM       MM MM+.  .+M%             MM%.......      MM     MM       MM MM........ MM........                   
//                       MM     MM  'MM.  MM MMMMMMMM%' MM       MM     MM                 MMM       MM       MM MMMMMMMM%'  %MMMMMMM%. MM       MM MMMMMMMM%'              %MMMMMMM%.     MM     MM       MM MMMMMMMMMM MMMMMMMMMM                   
//                       MM     MM   'MM. MM MM         MM       MM     MM                 MMM.      MM       MM MM  'MM.     ''''''%MM MM       MM MM  'MM.                 ''''''%MM     MM     MM       MM MM'''''''' MM''''''''                   
//                       MM     MM    'MM.MM MM         MM       MM     MM                 %MM%.     MM       MM MM   'MM.          .MM MM.     .MM MM   'MM.                      .MM     MM     MM       MM MM         MM                           
//                   mmmmMMmmmm MM     'MMMM MM         %MM%   %MM%     MM                 '%MMMMMMM %MM%   %MM% MM    'MM. %MM%. .%MM% %MM%. .%MM% MM    'MM.             %MM%. .%MM%     MM     %MM%   %MM% MM         MM                           
//                   MMMMMMMMMM +M      'MM+ +M          %MMMMMMM%      MM                  '%MMMMMM  %MMMMMMM%  +M     'MM '%MMMMMMM%' '%MMMMMMM%' +M     'MM             '%MMMMMMM%'     MM      %MMMMMMM%  MM         MM                           



// NEW screen operations!!1!11!

// console_history object set up like this:

//{
//  0: "text",
//  1: "more text",
//  2: "text<br>just to help<br>break it up<br>haha",
//  3: "just a bit more text to top it off"
//}

// basically you use id numbers to sort out the things
// and console_id is the newest id



function displayAppend(message, in_id, hide, colour, link) {
    //debubg(`[displayAppend]   message: ${message}  in_id: ${in_id}   hide: ${hide}   colour: ${colour}   link: ${link}`);
    if (console_history[in_id] != undefined || console_history[in_id] != null) {    // if the value already exists
        console_history[in_id] = `${console_history[in_id]}${message}`;             // append to value
    } else {                                                                        // else
        console_history[in_id] = `${message}`;                                      // just set value
    }
    //console.log(in_id);

    if (console_colour_history[in_id]) {      // if the value already exists
        //debubg("exists!");
        console_colour_history[in_id] = `${colour}`;        // append to value
    } else {                                                // else
        //debubg("NO EXIST");
        if (colour) {
            console_colour_history[in_id] = `${colour}`;        // append to value
        } else {
            console_colour_history[in_id] = `inherit`;                                                  // just set value
        }   
    }

    if (console_link_history[in_id]) {      // if the value already exists
        //debubg("exists!");
        console_link_history[in_id] = `${link}`;        // append to value
    } else {                                                // else
        //debubg("NO EXIST");
        if (colour) {
            console_link_history[in_id] = `${link}`;        // append to value
        } else {
            console_link_history[in_id] = ``;                                                  // just set value
        }
    }

    if (hide != undefined && hide != null && hide == true) {    // if hide exists and set to true
        //debubg("i shall hide display update");
    } else {
        singleDisplayUpdate(in_id);                    // update display
    }
}

function displayAdd(message, hide, colour) {
    var use_id = console_id + 1;                // the current id that's being used
    displayAppend(message, use_id, hide, colour);       // append to a new line

    console_id += 1;                    // update console id
    return [use_id, message]            // return info
}

function displayNewline() {
    // adds a new line (tm)
    var use_id = console_id + 1;            // the current id that's being used
    displayAppend("<br>", use_id, true);       // append to a new line
    return [use_id, "<br>"]                    // return info
}

function displayUpdate() {
    // UPDATES THE CONSOLE DISPLAY TM
    var finalUpdate = "";
    var history = console_history;
    for (cur_id in console_history) {
        //debubg(`[DISPLAY UPDATE]: id ${cur_id} is being checked.`);
        //debubg(`[displayUpdate]   history: ${console_history[cur_id]}   colour: ${console_colour_history[cur_id]}   link: ${console_link_history[cur_id]}`)

        var elemCheck = document.getElementById(`CON_${cur_id}`);
        if (elemCheck) {                                                // if the element exists
            //debubg("it EXISTS"); 
                                                 // it does exist
            if (elemCheck.innerHTML != console_history[cur_id] || elemCheck.style.color != console_colour_history[cur_id] ) {       // if the element does not match what's in memory
                //debubg("they dont match");
                elemCheck.innerHTML = `${console_history[cur_id]}`;
                elemCheck.style.color = `${console_colour_history[cur_id]}`;

            } else {
                //debubg("they do match")
            }
            // function() { alert("hallo!") }
            //debubg(`checking id of ${cur_id} of ${console_link_history[cur_id]}`);
            var check_url = `${console_link_history[cur_id]}`;
            if (isUrl(`${check_url}`) == true) {
                //debubg("it is a url!!! woo!!!");
                //debubg(`checking ${console_link_history[cur_id]}`);
                elemCheck.onclick = function() { window.open(`${check_url}`); }
            } else {
                //debubg("it is not a url!!");
                //elemCheck.onclick = "";
            }
            // function() { alert("hallo!") }
            //debubg(`checking id of ${cur_id} : ${console_link_history[cur_id]}`);
            var check_url = `${console_link_history[cur_id]}`;
            //check_url = "https://dapug.lol"
            if (isUrl(`${check_url}`) == true && check_url != "") {
                //debubg("it is a url!!! woo!!!");
                //debubg(`checking id of ${cur_id} : ${console_link_history[cur_id]}`);
                elemCheck.setAttribute( "onClick", `javascript: window.open("${check_url}");` );
                elemCheck.style.textDecoration = "underline";
                elemCheck.style.cursor = "pointer";
            } else {
                //debubg("it is not a url!!");
                //elemCheck.onclick = "";
                elemCheck.removeAttribute("onClick");
                elemCheck.style.textDecoration = "none";
                elemCheck.style.cursor = "auto";
            }


        } else {
            //debubg("you idiot it doesnt exist");                        // it doesnt exist
            consol.innerHTML = `${consol.innerHTML}<span id="CON_${cur_id}" style="color: ${console_colour_history[cur_id]};">${console_history[cur_id]}</span>`;
        }
    }
}

function singleDisplayUpdate(cur_id) {
    // UPDATES THE CONSOLE DISPLAY TM
    var finalUpdate = "";
    var history = console_history;
    var elemCheck = document.getElementById(`CON_${cur_id}`);
    if (elemCheck) {                                                // if the element exists
        //debubg("it EXISTS"); 
                                                // it does exist
        if (elemCheck.innerHTML != console_history[cur_id] || elemCheck.style.color != console_colour_history[cur_id] ) {       // if the element does not match what's in memory
            //debubg("they dont match");
            elemCheck.innerHTML = `${console_history[cur_id]}`;
            elemCheck.style.color = `${console_colour_history[cur_id]}`;

        } else {
            //debubg("they do match")
        }
        // function() { alert("hallo!") }
        //debubg(`checking id of ${cur_id} of ${console_link_history[cur_id]}`);
        var check_url = `${console_link_history[cur_id]}`;
        if (isUrl(`${check_url}`) == true) {
            //debubg("it is a url!!! woo!!!");
            //debubg(`checking ${console_link_history[cur_id]}`);
            elemCheck.onclick = function() { window.open(`${check_url}`); }
        } else {
            //debubg("it is not a url!!");
            //elemCheck.onclick = "";
        }
        // function() { alert("hallo!") }
        //debubg(`checking id of ${cur_id} : ${console_link_history[cur_id]}`);
        var check_url = `${console_link_history[cur_id]}`;
        //check_url = "https://dapug.lol"
        if (isUrl(`${check_url}`) == true && check_url != "") {
            //debubg("it is a url!!! woo!!!");
            //debubg(`checking id of ${cur_id} : ${console_link_history[cur_id]}`);
            elemCheck.setAttribute( "onClick", `javascript: window.open("${check_url}");` );
            elemCheck.style.textDecoration = "underline";
            elemCheck.style.cursor = "pointer";
        } else {
            //debubg("it is not a url!!");
            //elemCheck.onclick = "";
            elemCheck.removeAttribute("onClick");
            elemCheck.style.textDecoration = "none";
            elemCheck.style.cursor = "auto";
        }


    } else {
        //debubg("you idiot it doesnt exist");                        // it doesnt exist
        consol.innerHTML = `${consol.innerHTML}<span id="CON_${cur_id}" style="color: ${console_colour_history[cur_id]};">${console_history[cur_id]}</span>`;
    }
    
}



function displayMultilineLine(message, speed, use_id) {
    return new Promise((resolve,reject)=>{
        //here our function should be implemented 
        var messagey = message.split("");
        var messageyLength = messagey.length;
        for (let i = 0; i < messageyLength; i++) {
            setTimeout(function timer() {
                displayAppend(messagey[i], use_id, false);
                if (i == messageyLength - 1) { 
                    resolve();
                    scrolly("consy");
                }
            }, i * speed);
        }
    });
}

var ihateyou = ["javascript", "is", "stupid"];

async function displayMultilineAnim(message, speed, type) {
    var length = message.length;
    //alert(length);
    var cur_id = console_id * 1;                // set the current id to the console id
    console_id += length;                   // any new things use the id after this one

    for (i in message) {
        var line = message[i];
        //console.log(`${line}`);
        var use_id = cur_id + 1;        // the current id that's being used
        boom();
        await displayMultilineLine(`${line}`, speed, use_id);
        await displayAppend("<br>", use_id, false);
        scrolly("consy");
    }
}

async function displaySingleLine(message, speed, colour, link) {
    //debubg(`[displaySingleLine]   message: ${message}  speed: ${speed}   colour: ${colour}   link: ${link}`);
    return new Promise((resolve,reject)=>{
        //here our function should be implemented 
        var messagey = message.split("");
        var messageyLength = messagey.length;
        var use_id = console_id + 1;        // the current id that's being used
        console_id += 1;                    // update console id
        for (let i = 0; i < messageyLength; i++) {
            setTimeout(function timer() {
                var mess = messagey[i];
                scrolly("consy");
                if (messagey[i] == " " || messagey[i] == "\n") {
                    boom();
                }
                displayAppend(messagey[i], use_id, false, colour, link);
                if (i == messageyLength - 1) { 
                    resolve();
                    scrolly("consy");
                }
                
            }, i * speed);
        }
    });
}

async function displaySingleGradientLine(message, speed, colours) {
    debubg(`[sisplaySingleGradientLine]     ${message}   ${speed}   from ${colours[0]}  to ${colours[1]}`);
    
    var messagey = message.split("");
    var messageyLength = messagey.length;

    // how much of each value changes in total
    var R_diff = parseInt(colours[1][0]) - parseInt(colours[0][0]);
    var G_diff = parseInt(colours[1][1]) - parseInt(colours[0][1]);
    var B_diff = parseInt(colours[1][2]) - parseInt(colours[0][2]);

    // how much the value actually changes per character
    var R_displace = (R_diff / (messageyLength - 1));
    var G_displace = (G_diff / (messageyLength - 1));
    var B_displace = (B_diff / (messageyLength - 1));

    var R_curr = parseInt(colours[0][0]);
    var G_curr = parseInt(colours[0][1]);
    var B_curr = parseInt(colours[0][2]);


    //debubg(`[displaySingleLine]   message: ${message}  speed: ${speed}   colour: ${colour}   link: ${link}`);
    return new Promise((resolve,reject)=>{
        //here our function should be implemented 
        
        for (let i = 0; i < messageyLength; i++) {
            setTimeout(function timer() {
                var use_id = console_id + 1;        // the current id that's being used
                console_id += 1;                    // update console id

                var useColour = `rgb(${R_curr}, ${G_curr}, ${B_curr})`;

                debubg(`[RGB VALUE]: ${useColour} id: ${use_id}`);

                R_curr += R_displace;
                G_curr += G_displace;
                B_curr += B_displace;

                displayAppend(messagey[i], use_id, false, useColour);
                if (i == messageyLength - 1) { 
                    resolve();
                    scrolly("consy");
                }
            }, i * speed);
        }
    });
}

//displaySingleGradientLine("abcdefghijklmnopqrstuvwxyz", 200, [[94, 252, 3], [252, 3, 3]])

async function displayUser(message, userin) {
    var userfor;

    if (userin != null) {
        userfor = `${userin}`;
    } else {
        userfor = `${user}`;
    }

    displayNewline();
    displayAdd(`${userfor}@dapug.lol> ${message}`);
    scrolly("consy");
}

async function displayAnim(message, speed, colour, link) {      // fancy anim
    boom();
    if (speed == "" || speed == undefined || speed == null) {
        speed = 7;
    }
    //console.log(`[displayanim] ${message}, ${speed}, ${type}`);
    //debubg(`[displayAnim]   message: ${message}  speed: ${speed}   colour: ${colour}   link: ${link}`);
    if (typeof message == "string") {           // if it's a string
        await displaySingleLine(message, speed, colour, link);
    } else if (typeof message == "object") {    // if it's an object (copyArr only works with arrays though, but typeof's definition says object so if it breaks, it breaks.)
        await displayMultilineAnim(message, speed, 1);
    } else {
        var poo = typeof message;
        debubg(`variable type "${poo}" not suppored for smart anim. supported var types are "string" and "object".`);
    }
}

function displayTimeAnim(message, durat) {    // duration in ms
    var speedy = durat / message.length;
    debubg(`duration: ${durat}, speed: ${speedy}`);
    displaySingleLine(message, speedy);
}

function displayScreen(array) {
    // input 2d array of 1 entry per character
    var pushy = "";
    for (i in array) {
        for (o in array[i]) {
            pushy += `${array[i][o]}`;
        }
        pushy += "\n";
    }
    console.log(pushy);

}




//  .M.              +MMMMMM%+   mmmmmmmmmm .%MMMMMMM%. +MMMMMMM%. +M             :MMMM:     MM    MM              .M.  
// .M'M.             MMMMMMMMMI  MMMMMMMMMM %MM%' '%MM% MM+'  '+M% MM            :MMMMMM:    MM.  .MM             .M'M. 
// M' 'M             MM+    +MM;     MM     MM'         MM      MM MM            IMM::MMI    'MM  MM'             M' 'M 
//                   MM      MM:     MM     MM%.......  MM+.  .+M% MM           :MM:  :MM:    MM..MM                    
//                   MM      MM:     MM      %MMMMMMM%. MMMMMMMM%' MM           IMM:  :MMI    'MMMM'                    
//                   MM      MM:     MM       ''''''%MM MM         MM          :MMMMMMMMMM:    'MM'                     
//                   MM+    +MM;     MM             .MM MM         MM          IMM:    :MMI     MM                      
//                   MMMMMMMMMI  mmmmMMmmmm %MM%. .%MM% MM         MM........ :MM%      %MM:    MM                      
//                   +MMMMMM%+   MMMMMMMMMM '%MMMMMMM%' +M         +MMMMMMMM% :MM:      :MM:    MM                      



var LyricTimer = function(callback, delay) {
    var timerId, start, remaining = delay;

    this.pause = function() {
        clearTimeout(timerId);
        timerId = null;
        remaining -= Date.now() - start;
    };

    this.resume = function() {
        if (timerId) {
            return;
        }

        start = Date.now();
        timerId = setTimeout(callback, remaining);
    };

    this.skip = function() {
        clearTimeout(timerId);
    }


    this.resume();
};

//var timer = new LyricTimer(function() {
//    alert("Done!");
//}, 1000);

//timer.pause();
// Do some stuff...
//timer.resume();



function lyrFunc(lyr_len, lyrics, i, resolve) {
    var lyr_exec = false;
    if (lyrics[i]["exec"]) {
        lyr_exec = lyrics[i]["exec"];
        eval(`${lyr_exec}`);
    }
    if (lyrics[i]["text"] != false) {
        displayTimeAnim(lyrics[i]["text"], (lyrics[i]["dur"][1] - lyrics[i]["dur"][0]));
    }
    
    if (i == lyr_len - 1) { 
        scrolly("consy");
    }
}


async function displayLyrics(lyrics) {
    lyr_status = new Array();
    var lyr_len = lyrics.length;
    musicTimeouts = 0;
    var timeouts = 0;
    updateLyrics();
    
    // timeout var template:

    // TMO_1
    // TMO_2
        //here our function should be implemented 
        
    for (let i = 0; i < lyr_len; i++) {
        var startdur = lyrics[i]["dur"][0];
        var enddur = lyrics[i]["dur"][1];
        var fulldur = enddur - startdur;
        var cur_lyrics = lyrics;
        lyr_exec = false;
        


        debubg(`i: ${i}, startdur: ${startdur}, enddur: ${enddur}, fulldur: ${fulldur}`);

        var evalStr = `TMO_${musicTimeouts} = new LyricTimer(function() { lyrFunc(${lyr_len}, cur_lyrics, ${i}); lyr_status[${i}] = true; boom(); if (lyr_exec != false) { ${lyr_exec} } }, startdur);`;

        console.log(evalStr);
        eval(evalStr);
        musicTimeouts += 1;

    }

}

function skipLyrics() {
    // skip those dum lyrics i dont want em
    music.currentTime = music.duration - 1; // put it at the end so it ends the song (tm)
    
    for (let i = 0; i < musicTimeouts; i++) {   // for every music timeout
    
        eval(`TMO_${i}.skip();`);
    }
}

function pauseLyrics() {
    // skip those dum lyrics i dont want em
    music.pause();
    
    for (let i = 0; i < musicTimeouts; i++) {   // for every music timeout
        if (lyr_status[i]) { // if it exists (basically means its true)
            
        } else {
            eval(`TMO_${i}.pause();`);
        }

        
    }
}

function resumeLyrics() {
    // skip those dum lyrics i dont want em
    music.play();
    
    for (let i = 0; i < musicTimeouts; i++) {   // for every music timeout
        if (lyr_status[i]) { // if it exists (basically means its true)
            
        } else {
            eval(`TMO_${i}.resume();`);
        }
    }
}



//  .M.              +M         MM    MM +MMMMMMM%. mmmmmmmmmm  .%MMMMMM .%MMMMMMM%.              .M.  
// .M'M.             MM         MM.  .MM MM+'  '+M% MMMMMMMMMM .%MMMMMMM %MM%' '%MM%             .M'M. 
// M' 'M             MM         'MM  MM' MM      MM     MM     %MM%'     MM'                     M' 'M 
//                   MM          MM..MM  MM+.  .+M%     MM     MMM'      MM%.......                    
//                   MM          'MMMM'  MMMMMMMM%'     MM     MMM        %MMMMMMM%.                   
//                   MM           'MM'   MM  'MM.       MM     MMM.        ''''''%MM                   
//                   MM            MM    MM   'MM.      MM     %MM%.             .MM                   
//                   MM........    MM    MM    'MM. mmmmMMmmmm '%MMMMMMM %MM%. .%MM%                   
//                   +MMMMMMMM%    MM    +M     'MM MMMMMMMMMM  '%MMMMMM '%MMMMMMM%'                   



//async function hate() {
//    for (var i = 0; i < Infinity; i++) {
//        var cur_time = music.currentTime;

//        if (music.ended == true) {
//            break;
//        }
//    }
//}





debubg("new display framework init finished.");



function clearScreen() {
    consol.innerHTML = "";
    consoltext = "";
    console_history = {};
    console_id = 0;
}
function setScreen(message) {
    consol.innerHTML = message;
    consoltext = message;
}
function hardAppend(message) {
    var yoy = consol.innerHTML;
    consol.innerHTML = `${yoy}<br>${message}`;
    consoltext = `${yoy}<br>${message}`;
    scrolly("consy");
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
    scrolly("consy");
};
function appendInline(message) {
    var yoy = consol.innerHTML;
    consol.innerHTML = `${yoy}${message}`;
    consoltext = `${yoy}${message}`;
    scrolly("consy");
};
function displayNewline() {
    var yoy = consol.innerHTML;
    consol.innerHTML = `${yoy}<br>`;
    consoltext = `${yoy}<br>`;
    scrolly("consy");
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
        document.getElementById("debubtextvar").innerHTML = `
                      user: ${user}
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
      worble_stats_guesses: ${worble_stats_guesses}
     worble_stats_restarts: ${worble_stats_restarts}
worble_stats_currentstreak: ${worble_stats_currentstreak}
worble_stats_biggeststreak: ${worble_stats_biggeststreak}
               worble_word: ${worble_word}
            worble_word_id: ${worble_word_id}
        worble_randomvalue: ${worble_randomvalue}
               worble_gray: ${worble_gray}
              worble_green: ${worble_green}
             worble_yellow: ${worble_yellow}
         worble_share_gray: ${worble_share_gray}
        worble_share_green: ${worble_share_green}
       worble_share_yellow: ${worble_share_yellow}
                console_id: ${console_id}
             music_playing: ${music_playing}
             paused_lyrics: ${paused_lyrics}
            portal_playing: ${portal_playing}
               portal_type: ${portal_type}
             og_textcolour: ${og_textcolour}
             og_backcolour: ${og_backcolour}
                       egg: ${egg}
           credits_playing: ${credits_playing}
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
            scrolly("consy");
        }
    }
}
function simpleAnimAppend(message) {
    end1 = false;
    animSentence1 = message.split("");
    //hardAppend(animSentence1);
    displayNewline();
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
            displayNewline();
        }
        await displayAnim(array[i], speed);
    }
}

debubg("animArt init finished...");

function smartAnim(message, speed,) {
    if (typeof message == "string") { // if it's a string
        displayAnim(message, speed);
    } else if (typeof message == "object") { // if it's an object (copyArr only works with arrays though, but typeof's definition says object so if it breaks, it breaks.)
        displayAnim(message, speed);
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


//  .M.              .%MMMMMMM%. +M         +MMMMMM%+               +MMMMMM%+   mmmmmmmmmm .%MMMMMMM%. +MMMMMMM%. +M             :MMMM:     MM    MM              .M.  
// .M'M.             %MM%' '%MM% MM         MMMMMMMMMI              MMMMMMMMMI  MMMMMMMMMM %MM%' '%MM% MM+'  '+M% MM            :MMMMMM:    MM.  .MM             .M'M. 
// M' 'M             MM'     'MM MM         MM+    +MM;             MM+    +MM;     MM     MM'         MM      MM MM            IMM::MMI    'MM  MM'             M' 'M 
//                   MM       MM MM         MM      MM:             MM      MM:     MM     MM%.......  MM+.  .+M% MM           :MM:  :MM:    MM..MM                    
//                   MM       MM MM         MM      MM:             MM      MM:     MM      %MMMMMMM%. MMMMMMMM%' MM           IMM:  :MMI    'MMMM'                    
//                   MM       MM MM         MM      MM:             MM      MM:     MM       ''''''%MM MM         MM          :MMMMMMMMMM:    'MM'                     
//                   MM.     .MM MM         MM+    +MM;             MM+    +MM;     MM             .MM MM         MM          IMM:    :MMI     MM                      
//                   %MM%. .%MM% MM........ MMMMMMMMMI              MMMMMMMMMI  mmmmMMmmmm %MM%. .%MM% MM         MM........ :MM%      %MM:    MM                      
//                   '%MMMMMMM%' +MMMMMMMM% +MMMMMM%+               +MMMMMM%+   MMMMMMMMMM '%MMMMMMM%' +M         +MMMMMMMM% :MM:      :MM:    MM                      



// PORTAL 2 CREDITS ANIMS:

function portalCreditAnim(game, speed) {
    var creds = "incorrect game chosen. i brokey."
    var elf;
    var cre = "";
    var text_height = 18;
    if (game == 1) {
        creds = p1_credits;
        elf = document.getElementById("p1credtext");
        cre = "p1cred";
        elf.innerHTML = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
    } else if (game == 2) {
        creds = p2_credits;
        elf = document.getElementById("p2credtext");
        cre = "p2cred";
        var credhe = windowHeight * .80;
        var newlineAm = credhe / text_height;
        newlineAm = Math.floor(newlineAm);
        newlineAm -= 2;


        elf.innerHTML = `${"\n".repeat(newlineAm)}`;
    }
    
    
    //here our function should be implemented 
    creds = creds.join("\n");
    cred_chunks = creds.split("");
    var credLen = creds.length;
    //debubg(`${animDone} anim??`);
    for (let i = 0; i < credLen; i++) {
        //debubg(i);
    setTimeout(function timer() {
        if (cred_chunks[i] == "\n") {
            boom();
        }
        if (cred_chunks[i] == " ") {
            boom();
        }
        elf.innerHTML = `${elf.innerHTML}${cred_chunks[i]}`;
        scrolly(cre);
    }, i * speed);
    }
};

function p1Ascii(art) {
    var artist = document.getElementById("p1asciitext");
    if (p1_art[art]) {  // it exists!
        artist.innerHTML = `\n${p1_art[art]}`;
        artist.scrollTo(0,document.body.scrollHeight);
        scrolly("p1ascii");
    } else {
        debubg(`portal 1 ascii art "${art}" does not exist!!`);
    }
}

//  .M.              +MMMMMMM%. .%MMMMMMM%. +MMMMMMM%. %MMMMMMMM%     :MMMM:     +M                      .%MMMMMM +MMMMMMM%. +MMMMMMMMI +MMMMMM%+   mmmmmmmmmm %MMMMMMMM% .%MMMMMMM%.              .M.  
// .M'M.             MM+'  '+M% %MM%' '%MM% MM+'  '+M% %MMMMMMMM%    :MMMMMM:    MM                     .%MMMMMMM MM+'  '+M% MMMMMMMMMI MMMMMMMMMI  MMMMMMMMMM %MMMMMMMM% %MM%' '%MM%             .M'M. 
// M' 'M             MM      MM MM'     'MM MM      MM     MM        IMM::MMI    MM                     %MM%'     MM      MM MM+        MM+    +MM;     MM         MM     MM'                     M' 'M 
//                   MM+.  .+M% MM       MM MM+.  .+M%     MM       :MM:  :MM:   MM                     MMM'      MM+.  .+M% MM........ MM      MM:     MM         MM     MM%.......                    
//                   MMMMMMMM%' MM       MM MMMMMMMM%'     MM       IMM:  :MMI   MM                     MMM       MMMMMMMM%' MMMMMMMMMM MM      MM:     MM         MM      %MMMMMMM%.                   
//                   MM         MM       MM MM  'MM.       MM      :MMMMMMMMMM:  MM                     MMM.      MM  'MM.   MM'''''''' MM      MM:     MM         MM       ''''''%MM                   
//                   MM         MM.     .MM MM   'MM.      MM      IMM:    :MMI  MM                     %MM%.     MM   'MM.  MM+        MM+    +MM;     MM         MM             .MM                   
//                   MM         %MM%. .%MM% MM    'MM.     MM     :MM%      %MM: MM........             '%MMMMMMM MM    'MM. MMMMMMMMMI MMMMMMMMMI  mmmmMMmmmm     MM     %MM%. .%MM%                   
//                   +M         '%MMMMMMM%' +M     'MM     MM     :MM:      :MM: +MMMMMMMM%              '%MMMMMM +M     'MM +MMMMMMMMI +MMMMMM%+   MMMMMMMMMM     MM     '%MMMMMMM%'                   



debubg("special anim init finished...");


function removeInline(amounb) {
    consoltext = consoltext.slice(0, -1 * amounb);
    consoleWipe(consoltext);
    scrolly("consy");
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
    "FILESYS"       // im too lazy to remove filesys fully so... :shrug:
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
function asciiText(font, text) { //eamon here, for some reason this is brokey when just inputting "ascii" and nothing else
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
            //displayNewline();
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
            //displayNewline();
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

//  .M.                  :MMMM:     .%MMMMMMM%.  .%MMMMMM mmmmmmmmmm mmmmmmmmmm              .M.  
// .M'M.                :MMMMMM:    %MM%' '%MM% .%MMMMMMM MMMMMMMMMM MMMMMMMMMM             .M'M. 
// M' 'M                IMM::MMI    MM'         %MM%'         MM         MM                 M' 'M 
//                     :MM:  :MM:   MM%.......  MMM'          MM         MM                       
//                     IMM:  :MMI    %MMMMMMM%. MMM           MM         MM                       
//                    :MMMMMMMMMM:    ''''''%MM MMM.          MM         MM                       
//                    IMM:    :MMI          .MM %MM%.         MM         MM                       
//                   :MM%      %MM: %MM%. .%MM% '%MMMMMMM mmmmMMmmmm mmmmMMmmmm                   
//                   :MM:      :MM: '%MMMMMMM%'  '%MMMMMM MMMMMMMMMM MMMMMMMMMM                   


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


function setAccyColour(colour, save) {
    var do_save = false;
    if (save == false || save == true) {
        //debubg("exists!");
        do_save = save;
    } else {
        //debubg("exists NOT!");
        do_save = true;
    }
    // background colour
    var r = hexToRgb(colour).r;
    var g = hexToRgb(colour).g;
    var b = hexToRgb(colour).b;
    debubg(`${r}${g}${b}`);
    // #7cfc00 GREEN
    document.getElementById("debubmouse").style.backgroundColor = colour;
    document.getElementById("debub").style.borderColor = colour;
    document.getElementById("debubvarmouse").style.backgroundColor = colour;
    document.getElementById("debubvar").style.borderColor = colour;
    document.getElementById("songinfomouse").style.backgroundColor = colour;
    document.getElementById("songinfo").style.borderColor = colour;
    document.getElementById("scrollbar-colour").innerHTML = `::-webkit-scrollbar-thumb { background: ${colour}; }`;
    //document.getElementById("bottombar").style.backgroundColor = colour;
    if (do_save == true) {
        localStorage.setItem("accy-colour", colour);
        accycolour = `${colour}`;
    }
    if (debug == true) {
        debug_win.document.getElementById("scroll-text-style").innerHTML = `::-webkit-scrollbar-thumb { background: ${colour}; }`;
    }
}

function setColour(text, textsave, background, backsave, accent, accysave) {
    if (text != null && textsave == true){
        setTextColour(text);
    } else if (text != null && textsave == false) {
        setTextColour(text, false);
    } if (background != null && backsave == true) {
        setBackColour(background);
    } else if (background != null && backsave == false) {
        setBackColour(background, false)
    } if (accent != null && accysave == true) {
        setAccyColour(accent);
    } else if (accent != null && accysave == false) {
        setAccyColour(accent, false)
    }
};
function setBackColour(colour, save) {
    var do_save = false;
    if (save == false || save == true) {
        //debubg("exists!");
        do_save = save;
    } else {
        //debubg("exists NOT!");
        do_save = true;
    }
    // background colour
    var r = hexToRgb(colour).r;
    var g = hexToRgb(colour).g;
    var b = hexToRgb(colour).b;
    debubg(`${r}${g}${b}`);
    // #7cfc00 GREEN
    document.getElementById("body").style.backgroundColor = colour;
    document.getElementById("body").style.background = colour;
    document.getElementById("scrollbar-back").innerHTML = `::-webkit-scrollbar-track { background: ${colour}; } ::-webkit-scrollbar-corner { background: ${colour} }`;
    document.getElementById("debub").style.backgroundColor = colour;
    document.getElementById("debubvar").style.backgroundColor = colour;
    document.getElementById("songinfo").style.backgroundColor = colour;
    if (debug == true) {
        debug_win.document.getElementById("scroll-back-style").innerHTML = `::-webkit-scrollbar-track { background: ${colour}; } ::-webkit-scrollbar-corner { background: ${colour} }`;
        debug_win.document.getElementById("back-style").innerHTML = `body { background-color: ${colour};}`;
    }
    if (do_save == true) {
        localStorage.setItem("back-colour", colour);
        backcolour = `${colour}`;
    }
}

function setTextColour(colourcode, save) {
    var do_save = false;
    if (save == false || save == true) {
        //debubg("exists!");
        do_save = save;
    } else {
        //debubg("exists NOT!");
        do_save = true;
    }

    //console.log("do_save: ", do_save);
    // text colour
    var r = hexToRgb(colourcode).r;
    var g = hexToRgb(colourcode).g;
    var b = hexToRgb(colourcode).b;
    debubg(`${r}${g}${b}`);
    // #7cfc00 GREEN
    document.getElementById("body").style.color = colourcode;
    document.getElementById("consoleinput").style.color = colourcode;
    document.getElementById("consoleinputstyle").style.color = colourcode;
    // rip scrollbar being text colour
    document.getElementById("link-styles").innerHTML = `.link {color: ${colourcode}; font-family: COURIERPRIME; } .link:hover { color: ${colourcode}; font-family: COURIERPRIME; } .link:visited { color: ${colourcode}; font-family: COURIERPRIME; } .link:active { color: ${colourcode}; font-family: COURIERPRIME; } `;
    document.getElementById("debubmouse").style.color = colourcode;
    document.getElementById("debubvarmouse").style.color = colourcode;
    document.getElementById("songinfomouse").style.color = colourcode;
    
    if (debug == true) {
        // rip
        debug_win.document.getElementById("text-style").innerHTML = `body { color: ${colourcode};}`;
    }

    if (do_save == true) {
        localStorage.setItem("text-colour", colourcode);
        textcolour = `${colourcode}`;
    }
}

//  .M.               .%MMMMMM .%MMMMMMM%. +M         .%MMMMMMM%. MM       MM +MMMMMMM%.             .%MMMMMMM%. +MMMMMMMMI %MMMMMMMM%              .M.  
// .M'M.             .%MMMMMMM %MM%' '%MM% MM         %MM%' '%MM% MM       MM MM+'  '+M%             %MM%' '%MM% MMMMMMMMMI %MMMMMMMM%             .M'M. 
// M' 'M             %MM%'     MM'     'MM MM         MM'     'MM MM       MM MM      MM             MM'         MM+            MM                 M' 'M 
//                   MMM'      MM       MM MM         MM       MM MM       MM MM+.  .+M%             MM%.......  MM........     MM                       
//                   MMM       MM       MM MM         MM       MM MM       MM MMMMMMMM%'              %MMMMMMM%. MMMMMMMMMM     MM                       
//                   MMM.      MM       MM MM         MM       MM MM       MM MM  'MM.                 ''''''%MM MM''''''''     MM                       
//                   %MM%.     MM.     .MM MM         MM.     .MM MM       MM MM   'MM.                      .MM MM+            MM                       
//                   '%MMMMMMM %MM%. .%MM% MM........ %MM%. .%MM% %MM%   %MM% MM    'MM.             %MM%. .%MM% MMMMMMMMMI     MM                       
//                    '%MMMMMM '%MMMMMMM%' +MMMMMMMM% '%MMMMMMM%'  %MMMMMMM%  +M     'MM             '%MMMMMMM%' +MMMMMMMMI     MM                       


function setUser(inuser) {
    user = inuser;
    localStorage.setItem("currentaccount", inuser);
    var permissions = {    // another security hole!
        "dev": -2,
        "admin": -1,
        "user": 1
    }
    if (permissions[user]) {    // if a permission exists for the user
        user_permission = permissions[user];
    } else {
        user_permission = permissions["user"];
    }
}


function getRandomFromArr(inArray) {
    // gets random element from array
    var hehe = inArray[Math.floor(Math.random()* inArray.length)];
    return hehe

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getWorbleWord() {
    // gets random element from array

    worble_randomvalue = getRandomInt(0,5);
    var hehe = "";
    if (worble_randomvalue == 1) {
        // local words
        var id = Math.floor(Math.random()* worble_awful_words.length);
        worble_word_id = `${id}`;
        var hehe = worble_awful_words[id];
        worble_wordslength = worble_awful_words.length;
    } else {
        // local words
        var id = Math.floor(Math.random()* worble_words.length);
        worble_word_id = `${id}`;
        var hehe = worble_words[id];
        worble_wordslength = worble_words.length;


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
    localStorage.setItem("worble_word_id", worble_word_id);


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
    displayNewline();
    displayNewline();
    var finalAppend = "";

    for (i in worble_save) {
        var worble_guess = worble_save[i];
        var worble_guess_parsed = worble_parsed[i];
        debubg(`[WORBLE ANIM]: animating word "${worble_guess}"`);
        
        for (i in worble_guess_parsed) {

            var worble_guess_letter = worble_guess[i];
            var worble_parsed_letter = worble_guess_parsed[i];
            
            //debubg(`[WORBLE ANIM]: animating letter "${worble_guess_letter}"`);

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
    //debubg(`[WORble ANIM]: ${finalAppend}`);
    appendInline(finalAppend);
    
}

function saveWorbleStats(restarted) {
    debubg(`[WORBLE STATS]: stats are being saved...`);
    if (worble_guesscount != 0) {
        worble_stats_games += 1;
        worble_stats_guesses.push(worble_guesscount);
        worble_stats_currentstreak += 1;
        if (worble_stats_currentstreak > worble_stats_biggeststreak) {
            worble_stats_biggeststreak = worble_stats_currentstreak * 1;
        }

    } else {
        debubg("woob");
        worble_stats_currentstreak = 0;
    }
    if (restarted == true) {
        worble_stats_restarts += 1;
        worble_stats_currentstreak = 0;
    }

    localStorage.setItem("worble_stats_games", worble_stats_games);
    localStorage.setItem("worble_stats_restarts", worble_stats_restarts);
    localStorage.setItem("worble_stats_currentstreak", worble_stats_currentstreak);localStorage.setItem("worble_stats_biggeststreak", worble_stats_biggeststreak);


    var final = '{ "guesses": ['
    for (i in worble_stats_guesses) {
        if (i == 0) {
            final = `${final}${worble_stats_guesses[i]}`;
        } else {
            final = `${final}, ${worble_stats_guesses[i]}`;
        }
    }
    final = `${final}]}`;
    localStorage.setItem("worble_stats_guesses", final);
    
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
    
    
    
    
    debubg(`[WORBLE SETUP]: worble word that has been chosen is ${worble_word}`);
    if (restart == true) {
        debubg(`[WORBLE SETUP]: restart is set to true`);
        worble_startscreen = [
            `Worble game restarted!`,
            `Word length: ${worble_word.length} character(s)`
        ]
    } else {
        debubg(`[WORBLE SETUP]: restart is set to not true`);
        worble_startscreen = [
            `Worble game started!`,
            `Word length: ${worble_word.length} character(s)`
        ]
    }
    displayNewline();
    displayAnim(worble_startscreen, 10);
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
        `word #${worble_word_id}/${worble_wordslength}`,
        `${worble_guesscount}/∞ guesses`,
        `current streak: ${worble_stats_currentstreak}`,
        `longest streak: ${worble_stats_biggeststreak}`,
        `user: ${user}`
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
            }else if (lettertm == "S") {
                currentLine = `${currentLine}${worble_share_gray}`;
            }

        }

        final.push(`${currentLine}`);
    }

    worble_share_finale = worble_raw_info.concat(final);
    debubg(worble_share_finale);
    copyArr(worble_share_finale);
}

//  .M.              +M        M+ .%MMMMMMM%. +MMMMMMM%. +MMMMMM%+   +M         +MMMMMMMMI              .M.  
// .M'M.             +M        M+ %MM%' '%MM% MM+'  '+M% MMMMMMMMMM; MM         MMMMMMMMMI             .M'M. 
// M' 'M             +M        M+ MM'     'MM MM      MM MM+    +MM; MM         MM+                    M' 'M 
//                   MM  'MM'  MM MM       MM MM+.  .+M% MM%    %MM: MM         MM........                   
//                   MM 'MMMM' MM MM       MM MMMMMMMM%' MMMMMMMMMX  MM         MMMMMMMMMM                   
//                   MM MM..MM MM MM       MM MM  'MM.   MM%    %MM: MM         MM''''''''                   
//                   MM'MM  MM'MM MM.     .MM MM   'MM.  MM+    +MM; MM         MM+                          
//                   MMMM.  .MMMM %MM%. .%MM% MM    'MM. MMMMMMMMMI  MM........ MMMMMMMMMI                   
//                   +MM.    .MM+ '%MMMMMMM%' +M     'MM +MMMMMM%+   +MMMMMMMM% +MMMMMMMMI                   



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

function isUrl(string) {
    var parser = document.getElementById("url-check");
    parser.href = `${string}`;
    var return_value = false;
    if (parser.protocol == "http:" || parser.protocol == "https:") {
        return_value = true;
    }
    return return_value
}

function setSongInfo(internal_name) {
    song_err = false;
    var songArt = document.getElementById("song-art");
    var songName = document.getElementById("song-name");
    var songArtist = document.getElementById("song-artist");
    var songAlbum = document.getElementById("song-album");
    var song_art = "none.png";
    var song_name = "[unknown]";
    var song_artist = "[unknown]";
    var song_album = "[unknown]";
    if (songs[internal_name]) {    
        if (songs[internal_name]["name"]) {     // it exists!!
            song_name = songs[internal_name]["name"];
        }
        if (songs[internal_name]["artist"]) {     // it exists!!
            song_artist = songs[internal_name]["artist"];
        }
        if (songs[internal_name]["album"]) {     // it exists!!
            song_album = songs[internal_name]["album"];
        }
        if (songs[internal_name]["art"]) {     // it exists!!
            song_art = songs[internal_name]["art"];
        }
    }
    songArt.src = song_art;
    songArtist.innerHTML = song_artist;
    songName.innerHTML = song_name;
    songAlbum.innerHTML = song_album;
}

function updateScreenVars() {
    windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}


var example_table = [
    {
        "name": "Column 1",
        "contents": [
            "entry 1",
            "entry 2!!!!",
            "entry 3",
            "entry 4",
            "entry 5",
            "entry 6"
        ]
    },
    {
        "name": "Column 2",
        "contents": [
            "entry 7",
            "entry 8",
            "entry 9",
            "entry 10",
            "entry 11!!!!!dddddddddddddddddddddddddddddddddddddd",
            "entry 12"
        ]
    },
    {
        "name": "Column 3",
        "contents": [
            "entry 13",
            "entry 14",
            "entry 15",
            "entry 16",
            "entry 17!!!!",
            "entry 18",
            "en"
        ]
    }

]

function stringWidth(string, width, beginning, dots) {

    //    string: the string input
    //     width: the width the string should be
    // beginning: if the string should be cut from the beginning or end
    //      dots: if it should display dots
    var wid = `${string}`.length;
    finalString = `${string}`;
    if (wid < width) {                                      // if input string is shorter than width
        var diff = width - wid;
        finalString = `${string}${" ".repeat(diff)}`;
    } else if (wid > width) {                               // if input string is longer than width
        var diff = wid - width;
        var add = "";                                       // .slice(0, -1); slices 1 character from end
        if (dots == true) {
            diff += 3;
            add = "...";
        }
        if (beginning == true) {
            finalString = `${add}${finalString.slice(diff)}`;
        } else {
            diff = diff * -1;
            finalString = `${finalString.slice(0, diff)}${add}`;
        }
    }
    return finalString
}



function generateTable(table, theme) {
    debubg("GENERATING TABLE!!");
    var use = table_themes["default"];
    var usename = "default";
    if (theme != undefined && theme != null && theme != "") {       // if it is set
        if (table_themes[theme]) {                                  // if it exists in themes
            use = table_themes[theme];                              // set the theme
            usename = theme;
        }
    }
    debubg(`using theme '${usename}'`);
    // titles is the list of titles on the top for all the columns, contents is the actual contents of the
    var col_widths = new Array();   // will store all the max width values for all the columns
    var raw_table = new Array();
    var columns = 0;
    var rows = 0;
    var table_top = "";
    var table_middle = "";
    var table_conten = "";
    var table_bottom = "";
    var final_table = "";
    // CALCULATION OF STUFF AND THINGS!!!
    //console.log(table);
    for (i in table) {
        // for every column
        var cur_col = table[i];
        var col_con = cur_col["contents"];
        var cur_rows = 0;
        var curWid = 0;
        columns += 1;
        for (i in col_con) {            // for every row in the column
            var enty = col_con[i];
            var widy = enty.length;
            if (widy > curWid) {        // if the length is longer than previous length
                curWid = widy;          // save the width
            }
        }
        for (i in col_con) {                // for every row in the column
            cur_rows += 1;                  // add 1 to the column's rows
        }
        if (cur_rows > rows) {              // if this column has more rows than the previous most rows
            rows = cur_rows;                // set it to the new value
        }
        col_widths.push(curWid);            // for every column
        //console.log(curWid);
    }
    //console.log("widths: ", col_widths);
    //console.log("columns: ", columns);
    //console.log("rows: ", rows);
    // MAKING RAW TABLE!!!!
    for (i in table) {
        var coly = table[i];
        var widy = col_widths[i];
        raw_table[i] = [];
        raw_table[i].push(stringWidth(coly["name"], widy, false, false));
        // .match(/.{1,32}/g);
        //             ^ split string every x characters
        for (o in coly["contents"]) {
            var entry = coly["contents"][o];
            raw_table[i].push(stringWidth(entry, widy, false, false));
            console.log(entry);
        }
    }
    // making top and bottom bit
    table_top = `${use["tl"]}`;
    table_middle = `${use["vr"]}`;
    table_bottom = `${use["bl"]}`;
    for (i in table) {
        var widy = col_widths[i];
        if (i == 0) {
            table_top += `${use["ho"].repeat(widy)}`;
        } else {
            table_top += `${use["hb"]}${use["ho"].repeat(widy)}`;
        }
        if (i == 0) {
            table_bottom += `${use["ho"].repeat(widy)}`;
        } else {
            table_bottom += `${use["ht"]}${use["ho"].repeat(widy)}`;
        }
        if (i == 0) {
            table_middle += `${use["ho"].repeat(widy)}`;
        } else {
            table_middle += `${use["cr"]}${use["ho"].repeat(widy)}`;
        }
    }
    table_top += `${use["tr"]}`;
    table_middle += `${use["vl"]}`;
    table_bottom += `${use["br"]}`;

    //debubg(table_top);
    //debubg(table_middle);
    //debubg(table_bottom);
    //console.log("raw table: ", raw_table);
    //console.log(rows);
    for (let i = 0; i < rows + 1; i++) {
        if (i == 0) {
            final_table = `${table_top}\n`;
            //debubg(table_top);
            for (o in table) {
                var title = raw_table[o][0];
                final_table += `${use["ve"]}${title}`;
            }
            final_table += `${use["ve"]}\n`;
            final_table += `${table_middle}\n`;
        } else {
            for (a in table) {
                if (raw_table[a][i]) {
                    var enty = raw_table[a][i];
                    final_table += `${use["ve"]}${enty}`;
                } else {
                    var wid = col_widths[a];
                    var enty = stringWidth(" ", wid, false, false);
                    final_table += `${use["ve"]}${enty}`;
                }
            }
            final_table += `${use["ve"]}\n`;
        }
    }

    console.log(final_table);
    final_table += table_bottom;
    //debubg("FINAL:");
    //console.log("widths: ", col_widths);
    //console.log(final_table);
    //console.log("columns: ", columns);
    //console.log("rows: ", rows);
    return final_table
}

function saveTheme(nametm) {
    var lowname = nametm.toLowerCase();
    custom_themes[lowname] = {
        "name": `${nametm}`,
        "author": `${user}`,
        "text colour": `${textcolour}`,
        "back colour": `${backcolour}`,
        "accy colour": `${accycolour}`
    }
    localStorage.setItem("themes", JSON.stringify(custom_themes));
}

function rawSaveTheme(nametm, author, text, back, accy) {
    var lowname = nametm.toLowerCase();
    custom_themes[lowname] = {
        "name": `${nametm}`,
        "author": `${author}`,
        "text colour": `${text}`,
        "back colour": `${back}`,
        "accy colour": `${accy}`
    }
    localStorage.setItem("themes", JSON.stringify(custom_themes));
}



//generateTable(example_table);


//var loadJS = function(url, implementationCode, location){
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to 
    //insert the <script> element

//    var scriptTag = document.createElement('script');
//    scriptTag.src = url;

//    scriptTag.onload = implementationCode;
//    scriptTag.onreadystatechange = implementationCode;

//    location.appendChild(scriptTag);
//};

//var yourCodeToBeCalled = function(){
//your code goes here
//}

//loadJS('https://raw.githubusercontent.com/caeserlettuce/dapug-console/83165118e417052d21f49dedab18b381338079db/example_mod.js', yourCodeToBeCalled, document.body);

function updateStars() {
    var final = ""
    for (i in stars_parse) {
        for(o in stars_parse[i]) {
            final += stars_parse[i][o];
        }
        final += "\n";
    }
    document.getElementById("consy").innerHTML = final;
}
function parseStars() {
    // parses star save json into a large thingy of text (tm)
    for (var key in stars_save) {
        if (stars_save.hasOwnProperty(key)) {
            //console.log(key + " -> " + star_save[key]);
            // loopy
            var x = stars_save[key]["x"];
            var y = stars_save[key]["y"];
            var opacity = stars_save[key]["o"];
            try {
                stars_parse[y][x] = `<span id="CON_${key}" style="opacity: ${opacity * 0.01};">${stars_save[key]["t"]}</span>`;
            } catch (err) {
                debubg("oopy");
                delete stars_save[key];
            }
            //stars_parse[x]
        }
    }
    updateStars();
}
function stars() {
    if (star_running == false) {
        starlock = true;
        document.getElementById("consy").style.overflow = "hidden";
        document.getElementById("consy").style.fontWeight = "bold";
        document.getElementById("consoleinput").value = "press ESC to exit!";
        star_running = true;
        star_runtime = 0;
        var starTimers = 0;
        stars_save = new Object();
        var canvas_width = display_charsize[0];
        var canvas_height = display_charsize[1];
        var start_id = console_id + 1;
        console_id += (canvas_width * canvas_height);
        function getIdTm(cords) {
            var base = cords[1] * canvas_width; // get the y value of of the coord and multiply it by the width
            return start_id + base + cords[0];  // get the initial id value, add the base for the rows, and then add how many into the row
        }
        for (let i = 0; i < canvas_height; i++) {
            stars_parse[i] = new Array();
            for (let o = 0; o < canvas_width; o++) {
                stars_parse[i].push(" ");
            }
        }
        //console.log(getIdTm([0, 1]));
        stars_status = true;
        let starTimer = setInterval(() => {
            document.getElementById("consoleinput").value = "press ESC to exit!";
            // here we have the code for the stars
            if (stars_status == true) {
                console.log("stars!");
                var should_star = getRandomInt(0, 1); // if it should add a star
                //should_star = 1;
                //console.log(should_star)
                if (should_star == 1) {     // if the random integer is 1
                    var rand_x = getRandomInt(0, canvas_width);     // get a random x coord
                    var rand_y = getRandomInt(0, canvas_height);    // get a random y coord
                    var twinkle_dur = getRandomInt(2, 12);           // get a random number from 2 to 6, that will be how many times the star remove twinkle will have to loop before its gone
                    debubg(`NEW GENERATED STAR COORDS: ${rand_x}, ${rand_y}`);
                    // "500": {"t": ".", "x": 20, "y": 20, "s": 10, "o": 100}
                    var idtm = getIdTm([rand_x, rand_y]);
                    if (stars_save[idtm]) {
                        // is existent
                        debubg("star value is existent!!");
                        if (stars_save[idtm]["t"] == ".") {
                            // already is a star
                            debubg("star is already existent as a star!")
                        } else {
                            debubg("replacing old star value!");
                            stars_save[idtm] = {
                                "t": ".",                           // the text that should be inside the coordinate
                                "x": rand_x,                        // the x coordinate of the star
                                "y": rand_y,                        // the y coordinate of the star
                                "s": 100 / ( twinkle_dur + 1 ),     // the rate of which the opacity is changed
                                "o": 100,                           // the starting opacity
                            }
                            starTimers += 1;
                            var fadeTimer = setInterval(() => {
                                //console.log(stars_save[idtm]["o"]);
                                if (stars_status == false) {
                                    clearInterval(fadeTimer);
                                    clearScreen();
                                }
                                stars_status = true;
                                var change = -1 * stars_save[idtm]["s"];
                                if ( ( stars_save[idtm]["o"] + change ) > 0) {
                                    // if it is NOT zero
                                    stars_save[idtm]["o"] += change;
                                } else {
                                    // if it is under zero
                                    debubg(`${idtm} is at zero!!`);
                                    stars_save[idtm]["o"] = 0;
                                    stars_save[idtm]["t"] = " ";
                                    clearInterval(fadeTimer);
                                }
                                parseStars();
                            }, star_fade_speed);
                        }
                    } else {
                        debubg("making new star value");
                        stars_save[idtm] = {
                            "t": ".",                           // the text that should be inside the coordinate
                            "x": rand_x,                        // the x coordinate of the star
                            "y": rand_y,                        // the y coordinate of the star
                            "s": 100 / ( twinkle_dur + 1 ),     // the rate of which the opacity is changed
                            "o": 100,                           // the starting opacity
                        }
                        starTimers += 1;
                        var fadeTimer = setInterval(() => {
                            //console.log(stars_save[idtm]["o"]);
                            if (stars_status == false) {
                                clearInterval(fadeTimer);
                                clearScreen();
                            }
                            stars_status = true;
                            var change = -1 * stars_save[idtm]["s"];
                            if ( ( stars_save[idtm]["o"] + change ) > 0) {
                                // if it is NOT zero
                                stars_save[idtm]["o"] += change;
                            } else {
                                // if it is under zero
                                debubg(`${idtm} is at zero!!`);
                                stars_save[idtm]["o"] = 0;
                                stars_save[idtm]["t"] = " ";
                                clearInterval(fadeTimer);
                            }
                            parseStars();
                        }, star_fade_speed);
                    }
                }
            } else {
                clearInterval(starTimer);
                star_running = false;
                starlock = false;
                document.getElementById("consy").style.overflow = "";
                document.getElementById("consy").style.fontWeight = "normal";
                document.getElementById("consoleinput").value = "";
                clearScreen();
                for (let i = 0; i < starTimers; i++) {
                }
            }
            star_runtime += 1;
        }, star_speed);
    }
}

//var use_id = console_id + 1;        // the current id that's being used
//console_id += 1;                    // update console id



//  .M.              %MMMMMMMM% .%MMMMMMM%. .%MMMMMMM%. +M                     +MMMMMMMMI MM       MM +MM.      M+  .%MMMMMM %MMMMMMMM% mmmmmmmmmm .%MMMMMMM%. +MM.      M+ .%MMMMMMM%.              .M.  
// .M'M.             %MMMMMMMM% %MM%' '%MM% %MM%' '%MM% MM                     MMMMMMMMMI MM       MM MMMM.     MM .%MMMMMMM %MMMMMMMM% MMMMMMMMMM %MM%' '%MM% MMMM.     MM %MM%' '%MM%             .M'M. 
// M' 'M                 MM     MM'     'MM MM'     'MM MM                     MM+        MM       MM MM'MM.    MM %MM%'         MM         MM     MM'     'MM MM'MM.    MM MM'                     M' 'M 
//                       MM     MM       MM MM       MM MM                     MM........ MM       MM MM 'MM.   MM MMM'          MM         MM     MM       MM MM 'MM.   MM MM%.......                    
//                       MM     MM       MM MM       MM MM                     MMMMMMMMMM MM       MM MM  'MM.  MM MMM           MM         MM     MM       MM MM  'MM.  MM  %MMMMMMM%.                   
//                       MM     MM       MM MM       MM MM                     MM'''''''' MM       MM MM   'MM. MM MMM.          MM         MM     MM       MM MM   'MM. MM   ''''''%MM                   
//                       MM     MM.     .MM MM.     .MM MM                     MM         MM       MM MM    'MM.MM %MM%.         MM         MM     MM.     .MM MM    'MM.MM         .MM                   
//                       MM     %MM%. .%MM% %MM%. .%MM% MM........             MM         %MM%   %MM% MM     'MMMM '%MMMMMMM     MM     mmmmMMmmmm %MM%. .%MM% MM     'MMMM %MM%. .%MM%                   
//                       MM     '%MMMMMMM%' '%MMMMMMM%' +MMMMMMMM%             MM          %MMMMMMM%  +M      'MM+  '%MMMMMM     MM     MMMMMMMMMM '%MMMMMMM%' +M      'MM+ '%MMMMMMM%'                   
//
//
//
debubg("extra tool functions init finished...");




debubg("jQuery functions init finished...");

//  .M.                     MMMM .%MMMMMMM%. MM       MM +MMMMMMMMI +MMMMMMM%. MM    MM             +MMMMMMMMI MM       MM +MM.      M+  .%MMMMMM %MMMMMMMM% mmmmmmmmmm .%MMMMMMM%. +MM.      M+ .%MMMMMMM%.              .M.  
// .M'M.                    ''MM %MM%' '%MM% MM       MM MMMMMMMMMI MM+'  '+M% MM.  .MM             MMMMMMMMMI MM       MM MMMM.     MM .%MMMMMMM %MMMMMMMM% MMMMMMMMMM %MM%' '%MM% MMMM.     MM %MM%' '%MM%             .M'M. 
// M' 'M                      MM MM'     'MM MM       MM MM+        MM      MM 'MM  MM'             MM+        MM       MM MM'MM.    MM %MM%'         MM         MM     MM'     'MM MM'MM.    MM MM'                     M' 'M 
//                            MM MM       MM MM       MM MM........ MM+.  .+M%  MM..MM              MM........ MM       MM MM 'MM.   MM MMM'          MM         MM     MM       MM MM 'MM.   MM MM%.......                    
//                            MM MM       MM MM       MM MMMMMMMMMM MMMMMMMM%'  'MMMM'              MMMMMMMMMM MM       MM MM  'MM.  MM MMM           MM         MM     MM       MM MM  'MM.  MM  %MMMMMMM%.                   
//                            MM MM       MM MM       MM MM'''''''' MM  'MM.     'MM'               MM'''''''' MM       MM MM   'MM. MM MMM.          MM         MM     MM       MM MM   'MM. MM   ''''''%MM                   
//                            MM MM.    MMMM MM       MM MM+        MM   'MM.     MM                MM         MM       MM MM    'MM.MM %MM%.         MM         MM     MM.     .MM MM    'MM.MM         .MM                   
//                   %MM%   %MM% %MM%.  %MM% %MM%   %MM% MMMMMMMMMI MM    'MM.    MM                MM         %MM%   %MM% MM     'MMMM '%MMMMMMM     MM     mmmmMMmmmm %MM%. .%MM% MM     'MMMM %MM%. .%MM%                   
//                    %MMMMMMM%  '%MMMMMMM%M  %MMMMMMM%  +MMMMMMMMI +M     'MM    MM                MM          %MMMMMMM%  +M      'MM+  '%MMMMMM     MM     MMMMMMMMMM '%MMMMMMM%' +M      'MM+ '%MMMMMMM%'                   





async function githubPage() {
    displayNewline();
    await displayAnim(githubArt, 1);
    displayNewline();
    displayNewline();
    await displayAnim(githubText, 1);
    displayNewline();
    displayNewline();
    await newLinkAnim("visit the github page", 5, "https://github.com/caeserlettuce/dapug-console");
}

async function worblePage() {
    displayNewline();
    var worbletext = asciiText("slant", `WORBLE!`)
    await displayAnim(worbletext, 2);
    await displayAnim(worble_info_1, 2);
    await displayAnim("Wordle", 2, "inherit", "https://www.nytimes.com/games/wordle/index.html");
    await displayAnim(worble_info_2, 2);
}

async function worbleInfoPage() {
    displayNewline();

    worble_infoscreen = [
        `Worble Info:`,
        ` `,
        `Word length:       ${worble_word.length}`,
        `Word:              ${worble_word_id + 1}/${worble_wordslength}`,
        `Colourblind mode:  ${worble_colourblind}`,
        `Guess count:       ${worble_guesscount}/∞`,
        `Status:            ${worble_status}`,
        ` `,
        `Worble Save:`
    ]



    await displayAnim(worble_infoscreen, 5);
    await animWorble(parseWorble());
    debubg(`[WORBLE INFO]: worble word is ${worble_word}`);
    
}   

async function shareWorblePage() {
    shareWorble(parseWorble());
    displayNewline();
    await displayAnim("worble copied to clipboard: ", 10);
    displayNewline();
    displayAnim(worble_share_finale, 10);

}

async function worbleDone() {
    // you got it right
    saveWorbleStats(false);
    debubg("aaa");
    await displayAnim(`You got the worble! use 'worble start' to start a new game!`, 10);
    shareWorble(parseWorble());
}

async function restartWorble() {
    saveWorbleStats(true);
    displayNewline();
    await displayAnim(`The worble was "${worble_word}"!`, 5)
    displayNewline();
    newWorble(true);
}

async function fitnessGram() {
    displayNewline();
    await displayAnim(fitnessgram, 2);
    await displayAnim(fitnessgram_1, 1);
}

async function aboutPage() {
    await displayNewline();
    await displayAnim(aboot, 2.5);
    await displayAnim(["     ", `DAPUG.LOL CONSOLE VERSION ${version}, CODED BY CAESERLETTUCE (DA PUG) ON GITHUB. PROJECT STARTED ON 24-01-22`,])
    await displayAnim(aboot2, 5);
    //await displayAnim()
}

async function worbleStats(download) {
    var amount = 0;
    var average = 0;
    var most = 0;
    for (i in worble_stats_guesses) {
        amount += 1;
        average += parseInt(worble_stats_guesses[i]);
        if (worble_stats_guesses[i] > most) {
            most = worble_stats_guesses[i];
        }
    }
    average = Math.floor(average / amount);
    
    infotm = [
        `WORBLE PROFILE STATS FOR USER '${user}':`,
        `average guesses per game: ${average}`,
        `most guesses in a game: ${most}`,
        `worble games played: ${worble_stats_games}`,
        `worble games restarted: ${worble_stats_restarts}`,
        `current streak: ${worble_stats_currentstreak}`,
        `longest streak: ${worble_stats_biggeststreak}`
    ]

    await displayNewline();
    await displayAnim(infotm, 10);
}


async function musicPage() {
    displayNewline();
    var musictext = asciiText("slant", `MUSIC!`);
    await displayAnim(musictext, 2);
    await displayAnim(musicText, 4);
}

async function themelist(table1, table2) {
    await displayAnim("\nBuilt-in Themes:\n", 7);
    await displayAnim(table1, 0.5);
    await displayAnim("\nCustom Themes:\n", 7);
    await displayAnim(table2, 0.5);
    await displayAnim("\nTo use a theme, type 'theme use [name]', To save a theme, type 'theme save [name]'");
}





debubg("async command functions init finished...");


//  .M.                  :MMMM:     .%MMMMMMM%. MM    MM +MM.      M+  .%MMMMMM             +MMMMMMMMI MM       MM +MM.      M+  .%MMMMMM %MMMMMMMM% mmmmmmmmmm .%MMMMMMM%. +MM.      M+ .%MMMMMMM%.              .M.  
// .M'M.                :MMMMMM:    %MM%' '%MM% MM.  .MM MMMM.     MM .%MMMMMMM             MMMMMMMMMI MM       MM MMMM.     MM .%MMMMMMM %MMMMMMMM% MMMMMMMMMM %MM%' '%MM% MMMM.     MM %MM%' '%MM%             .M'M. 
// M' 'M                IMM::MMI    MM'         'MM  MM' MM'MM.    MM %MM%'                 MM+        MM       MM MM'MM.    MM %MM%'         MM         MM     MM'     'MM MM'MM.    MM MM'                     M' 'M 
//                     :MM:  :MM:   MM%.......   MM..MM  MM 'MM.   MM MMM'                  MM........ MM       MM MM 'MM.   MM MMM'          MM         MM     MM       MM MM 'MM.   MM MM%.......                    
//                     IMM:  :MMI    %MMMMMMM%.  'MMMM'  MM  'MM.  MM MMM                   MMMMMMMMMM MM       MM MM  'MM.  MM MMM           MM         MM     MM       MM MM  'MM.  MM  %MMMMMMM%.                   
//                    :MMMMMMMMMM:    ''''''%MM   'MM'   MM   'MM. MM MMM.                  MM'''''''' MM       MM MM   'MM. MM MMM.          MM         MM     MM       MM MM   'MM. MM   ''''''%MM                   
//                    IMM:    :MMI          .MM    MM    MM    'MM.MM %MM%.                 MM         MM       MM MM    'MM.MM %MM%.         MM         MM     MM.     .MM MM    'MM.MM         .MM                   
//                   :MM%      %MM: %MM%. .%MM%    MM    MM     'MMMM '%MMMMMMM             MM         %MM%   %MM% MM     'MMMM '%MMMMMMM     MM     mmmmMMmmmm %MM%. .%MM% MM     'MMMM %MM%. .%MM%                   
//                   :MM:      :MM: '%MMMMMMM%'    MM    +M      'MM+  '%MMMMMM             MM          %MMMMMMM%  +M      'MM+  '%MMMMMM     MM     MMMMMMMMMM '%MMMMMMM%' +M      'MM+ '%MMMMMMM%'                   





function askInput(scooby_doo, end) {   // ask for a text input from console thing
    listening_input = true;
    ask_do = scooby_doo;
}
// example!!

//askInput(() => { displayAnim(`your name is ${ask_return}!!`, 7); } );






//  .M.                  :MMMM:     .%MMMMMMM%. +M   .M%             mmmmmmmmmm +MM.      M+ +MMMMMMM%. MM       MM %MMMMMMMM%             +MMMMMMMMI MM       MM +MM.      M+  .%MMMMMM %MMMMMMMM% mmmmmmmmmm .%MMMMMMM%. +MM.      M+ .%MMMMMMM%.              .M.  
// .M'M.                :MMMMMM:    %MM%' '%MM% MM  .M%'             MMMMMMMMMM MMMM.     MM MM+'  '+M% MM       MM %MMMMMMMM%             MMMMMMMMMI MM       MM MMMM.     MM .%MMMMMMM %MMMMMMMM% MMMMMMMMMM %MM%' '%MM% MMMM.     MM %MM%' '%MM%             .M'M. 
// M' 'M                IMM::MMI    MM'         MM .M%'                  MM     MM'MM.    MM MM      MM MM       MM     MM                 MM+        MM       MM MM'MM.    MM %MM%'         MM         MM     MM'     'MM MM'MM.    MM MM'                     M' 'M 
//                     :MM:  :MM:   MM%.......  MM.M%'                   MM     MM 'MM.   MM MM+.  .+M% MM       MM     MM                 MM........ MM       MM MM 'MM.   MM MMM'          MM         MM     MM       MM MM 'MM.   MM MM%.......                    
//                     IMM:  :MMI    %MMMMMMM%. MMMX                     MM     MM  'MM.  MM MMMMMMMM%' MM       MM     MM                 MMMMMMMMMM MM       MM MM  'MM.  MM MMM           MM         MM     MM       MM MM  'MM.  MM  %MMMMMMM%.                   
//                    :MMMMMMMMMM:    ''''''%MM MM'M%.                   MM     MM   'MM. MM MM         MM       MM     MM                 MM'''''''' MM       MM MM   'MM. MM MMM.          MM         MM     MM       MM MM   'MM. MM   ''''''%MM                   
//                    IMM:    :MMI          .MM MM 'M%.                  MM     MM    'MM.MM MM         MM       MM     MM                 MM         MM       MM MM    'MM.MM %MM%.         MM         MM     MM.     .MM MM    'MM.MM         .MM                   
//                   :MM%      %MM: %MM%. .%MM% MM  'M%.             mmmmMMmmmm MM     'MMMM MM         %MM%   %MM%     MM                 MM         %MM%   %MM% MM     'MMMM '%MMMMMMM     MM     mmmmMMmmmm %MM%. .%MM% MM     'MMMM %MM%. .%MM%                   
//                   :MM:      :MM: '%MMMMMMM%' +M   'M%             MMMMMMMMMM +M      'MM+ +M          %MMMMMMM%      MM                 MM          %MMMMMMM%  +M      'MM+  '%MMMMMM     MM     MMMMMMMMMM '%MMMMMMM%' +M      'MM+ '%MMMMMMM%'                   




// colour setting automatically tm

//setTextColour(textcolour);
//setBackColour(backcolour);
//setAccyColour(accycolour);
setColour(textcolour, true, backcolour, true, accycolour, true);

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
//
//
//  OPEN SEPERATE WINDOW:
//
//  var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
//  win.document.body.innerHTML = "HTML";
//
//
//

shell.onkeyup = function keyParse(e){
    if (inputlock == false) {
        if (starlock == false) {
            if(e.keyCode == 13) {
                if (shell.value != "") {
                    if (enterlock == false) {
                        // stinky old code is gone!!!!

                        // *crab rave*
                        if (listening_input == true) {  // if its listening for a text input
                            ask_return = shell.value;
                            ask_do();
                            listening_input = false;
                            shell.value = "";
                        } else {
                            displayUser(`${shell.value}`, `${user}`);
                            historyPush();
                            parseCommand(shell.value);
                            historyReset();
                            shell.value = "";
                            scrolly("consy");
                        }
                            
                        //debubg(consoltext);
                        //debubg(commang);
                    }
                }
                boom();
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
                    shell.value = `${indexed}`;

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
                    shell.value = `${indexed}`;






                }
            }
        } else if (starlock == true) {
            if(e.keyCode == 27) {
                stars_status = false;
            }
        }

    }

    
}



music.addEventListener('ended', (event) => {
    document.getElementById("songinfo").style.display = "none";
    music_playing = false;
    if (portal_playing == true) {
        portal_playing = false;
        //setTextColour(og_textcolour);
        //setBackColour(og_backcolour);
        //setAccyColour(og_accycolour);
        setColour(og_textcolour, true, og_backcolour, true, og_accycolour, true);
        inputlock = false;
        document.getElementById("p2cred").style.display = "none";
        document.getElementById("p1cred").style.display = "none";
        document.getElementById("p1ascii").style.display = "none";
        document.getElementById("songinfomouse").style.backgroundColor = "#1e1e1e";
        document.getElementById("songinfomouse").style.color = "white";
        document.getElementById("songinfo").style.borderColor = "#1e1e1e";
        d
        ocument.getElementById("songinfo").style.backgroundColor = og_backcolour;
    } else if (credits_playing == true) {
        credits_playing = false;
        inputlock = false;
        setColour(og_textcolour, true, og_backcolour, true, og_accycolour, true);

    }
    boom();
});

music.addEventListener('play', (event) => {
    if (music.currentTime == 0) { // if it has just started tm
        displayLyrics(lyr_disp);
    }

});


window.onresize = sizeCheck;

function closeDebuG() {
    if (debug == true) {
        debug_win.close();
        debugwin_status = false;
    }
}

window.onclose = closeDebuG;


consol.addEventListener('mousemove', (event) => {
    consol.style.cursor = "auto";
    cursor_pos = [event.pageX + 1, event.pageY];     // sets the current pos (not needed for this system but may be useful in the future)
    clearTimeout(cursor_hide_timer);
    cursor_hide_timer = setTimeout(function timer() {
        consol.style.cursor = "none";
        //debubg("the letter a");
    }, 2000);
});


debubg("listeners added...");
