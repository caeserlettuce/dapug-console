/*
        ____   ___     ____   __  __ ______    __     ____   __        __ ______ ____   _   __ _____  ____   __     ______ 
       / __ \ /   |   / __ \ / / / // ____/   / /    / __ \ / /      _/_// ____// __ \ / | / // ___/ / __ \ / /    / ____/
      / / / // /| |  / /_/ // / / // / __    / /    / / / // /     _/_/ / /    / / / //  |/ / \__ \ / / / // /    / __/  
     / /_/ // ___ | / ____// /_/ // /_/ /_  / /___ / /_/ // /___ _/_/  / /___ / /_/ // /|  / ___/ // /_/ // /___ / /___ 
    /_____//_/  |_|/_/     \____/ \____/(_)/_____/ \____//_____//_/    \____/ \____//_/ |_/ /____/ \____//_____//_____/
                                                                                                                    

    ITS THE DAPUG.LOL CONSOLE!!!!!



    yes

    NOTE: for addind new external windows, i have put this text here:

    // DEBUG WIN ADDITION POINT

    at every point of which you need to add a new variable/function for the window

    id suggest you let jesse add them (looking at you caffy) cause its a bit confusing for someone who didnt write those functions

    im saying that like i even fully understand what they do

    JESSE: google-chrome --disable-site-isolation-trials --disable-web-security --user-data-dir="~/tmp"

        ^ this is to make debug -v work when not on a server




    console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');


    apparently you can use css with console.log!!
  */

function debubg(message) {
    var dat = new Date();
    var tim = `${dat.getHours()}:${dat.getMinutes()}:${dat.getSeconds()}:${dat.getMilliseconds()}`;
    message = `[${tim}]: ${message}`;


    console.debug(`[${tim}]: `, message);
    if (debug == true) {
        //var pogchamp = debug_win.body;
        //texty = pogchamp.innerHTML;
        //pogchamp.innerHTML = `${texty}<br>${message}`;
        //debug_win.document.write('<pre>HEHE</pre>');
        debug_win.document.getElementById("aaa").innerHTML += `<p style="margin: 0px; padding: 0px; border: 0px;">${message}</p>`;
        mom = debug_win.document.getElementById("aaa");
        mom.scrollTop = mom.scrollHeight;
        
        dod = debug_win.document.body;
        var diff = scrollDifference(dod);
        if (diff <= autoscroll_buffer) {
            dod.scrollTop = dod.scrollHeight;
        }
        
        //dod.scrollTop = dod.scrollHeight;
    }
}

function db(message, preset) {
    var css = "";

    if (debubg_presets[preset]) {
        css = debubg_presets[preset];
    } else {
        css = preset;
    }

    var dat = new Date();
    var tim = `${dat.getHours()}:${dat.getMinutes()}:${dat.getSeconds()}:${dat.getMilliseconds()}`;
    message = `[${tim}]: ${message}`;


    console.debug(`%c${message}`, `${css}`);




    if (debug == true) {
        debug_win.document.getElementById("aaa").innerHTML += `<p style="margin: 0px; padding: 0px; border: 0px; ${css}">${message}</p>`;
        mom = debug_win.document.getElementById("aaa");
        mom.scrollTop = mom.scrollHeight;
        
        dod = debug_win.document.body;
        var diff = scrollDifference(dod);
        if (diff <= autoscroll_buffer) {
            dod.scrollTop = dod.scrollHeight;
        }

    }
}

function debubgall(message) {
    if (debugall == true) {
        debubg(message);
    }
}

function erry(message) {
    var dat = new Date();
    var tim = `${dat.getHours()}:${dat.getMinutes()}:${dat.getSeconds()}:${dat.getMilliseconds()}`;


    console.error(`[${tim}]: ${message}`);
    if (debug == true) {
        //var pogchamp = debug_win.body;
        //texty = pogchamp.innerHTML;
        //pogchamp.innerHTML = `${texty}<br>${message}`;
        //debug_win.document.write('<pre>HEHE</pre>');
        debug_win.document.getElementById("aaa").innerHTML += `<p style="color: #ff8080; width: fit-content; margin: 0px; padding: 0px; border: 1px #ff000020 solid; background-color: #ff000040;">[${tim}]: eee${message}</p>`;;
        mom = debug_win.document.getElementById("aaa");
        mom.scrollTop = mom.scrollHeight;

        dod = debug_win.document.body;
        var diff = scrollDifference(dod);
        if (diff <= autoscroll_buffer) {
            dod.scrollTop = dod.scrollHeight;
        }
    }
}

var debug_time = true;
db("debug message init finished...", "init");
var consol = document.getElementById("consy");
var user = "user";
var user_permission;
var consoltext = "";
var inputlock = false;
var mainsys = true;
var filesys = false;
var comments = new Object();
// DEBUG WIN ADDITION POINT
var debug = false;
var debugvar = false;
var debugstat = false;

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
var def_textcolour = textcolour;
var def_backcolour = backcolour;
var def_accycolour = accycolour;
var autocommand = false;
var startup = false; // REMEMBER TO SET TO TRUE LATER (haha now its automatic);
var autocommand_wait = false;
var worble_status = false;
var worble_colourblind = false;
var worble_awful = false;
var worble_word = "";
var worble_word_id = 0;
var worble_randomvalue = 0;
var worble_save = [];
var worble_displaysave = [];
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
var console_style_history = {0: ""};
var console_id = 0;
var console_group_id = 0;
var musicTimeouts = 0; // number of timeouts in the current song
var cur_lyrics = new Object();
var cur_lyr = 0;
var paused_lyrics = true;
var lyr_status = new Object();
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
// DEBUG WIN ADDITION POINT
var debug_win;
var var_debug_win;
var stat_debug_win;

var debugwin_status = false;
var var_debugwin_status = false;
var stat_debugwin_status = false;

var autodebugwin = false;
var var_autodebugwin = false;
var stat_autodebugwin = false;

// continue with the rest of the code
var credits_playing = false;
var lyr_disp;
var orientation = "what";
var textheight = 20;
var listening_input = false;
var ask_do = function() {console.debug("aaaaa!! im broken i think!!")};
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
var accountsregistry;
var default_accounts = {
    "admin": "password"
}
var locked_accounts = [
    "dev",
    "caeserlettuce",
    "18gallons",
    "dapug",
    "caffy",
    ""
]
var login_username;
var signup_username;
var doglock = false;
var dog = false;
var dog_pets = 0;
var dog_timer;
var dog_speed = 50;
var dog_elem;
var dog_petelem;
var dog_anim_index = 0;
var dog_anim_len = 0;
var dog_anim_go = false;
var dogtime = 0;
var dog_outfit = "normal";
var cur_set_colour = "";
var cur_set_place = 0;
var textadventures_saves = new Object();
var cur_ta = "";
var ta_input = "";
var ta_key = "";
var adventure_lock = "";
var adventure_exe;
var music_loading = false;
var TMO_push = new Array();
var LYR_push = new Array();
var adventures = {                  // text adventures info
    "test": {
        "name": "Test",
        "author": "caeserlettuce",
        "description": "a test text adventure to test the feature"
    }
}
var lyric_interval;
var processed_times = new Array();
var cur_cipher = "";
var img_canvas = document.getElementById("image-canvas");
var music_queue = new Array();
var in_queue = false;
var custom_queues = new Object();
var notes = new Object();
var note_to_add = new Object();
var note_name = "";
var to_cut = "";
var to_pass = new Object();
var to_pass_pre = new Object();
var var_debug_check;
var debugvar_size = 5;
var debvar_first_time = false;
var music_volume = 1;
var console_visible = true;
var encryption_key = new Object();
var bluescreen = false;
var mainlock = true;
var bluescreen_done = false;
var current_command = "";
var cns_session_id = 0;
var keys_pressed = new Object();
var sfx = false;
var display_noise = false;
var rw_tmt;
var snk_set = {
    "speed": 500,  // how many ms per snake tick
    "size": 50      // how big the board should be
}
var snk_limit = snk_set.size;
var snk_save = new Array();
var snk_int;
var bluescreening = true;
var snakelock = false;
var snaketick = 0;
var snake_highscore = 0;
var snake_score = 0;
var snk_dir = [1, 0];
var snk_extra = new Object();
var snk_food = new Array();
var snk_cur_speed = snk_set.speed;
var debugall = false;                   // debug ALL messages ( a lot!!)
var font_install = "";
var rainbow_index = 0;
var rainbow_enabled = false;
var gol_set = {
    "speed": 500,
    "size": 20
};
var gls = "."       // character to use to fill up empty space
var gol_active = false;
var gol_lock = false;
var gol_save = new Array();
var gol_extra = new Object();
var gol_gen = 0;
var gol_int;
var gol_chance = [0, 1];
var default_rem = 1.10;
var si_sv_sc = 0;
var p1c_sv_sc = 0;
var p2c_sv_sc = 0;
var p1a_sv_sc = 0;


db("variable init finished...", "init");
// local storage setup


function local_storage(name, default_tm, if_exists, if_doesnt) {
    var item = localStorage.getItem(`${name}`);                                             // sets item to whatever the localtorage for name is
    var return_value = "";                                                                  // initialise this
    if (item) {                                                                             // if that item exists in localstorage
        db(`[LOCAL STORAGE]: local storage for '${name}' exists. skipping creation.`, "localstorage");  // status update ™
        return_value = localStorage.getItem(`${name}`);                                     // set the return value to the localstorage value
        if (typeof if_exists === 'function') {                                              // if it's a function       (if extra code should be run if it exists)
            if_exists();                                                                    // run said function
        }
    } else {                                                                                // if it doesn't exist
        db(`[LOCAL STORAGE]: local storage for '${name}' does not exist. creating.`, "localstorage");   // status update ™
        localStorage.setItem(`${name}`, `${default_tm}`);                                   // set the localstorage value
        return_value = `${default_tm}`;                                                     // set the return value to the default value
        if (typeof if_doesnt === 'function') {                                              // if it's a function       (if extra code should be run if it exists)
            if_doesnt();                                                                    // run said function
        }
    }
    return return_value                                                                     // return the localstorage value
}

/*
EXAMPLE OF THIS FUNCTION:

backcolour = local_storage("back-colour", "#000000", function a(){console.debug("yay!!");}, function b(){console.debug("crap!!");})

*/

// localstorage updates!!

// old localStorage: "admin":"password","pugface":"laptop","dev":"ihatejavascript"

// \"admin\":\"password\",\"pugface\":\"laptop\",\"dev\":\"ihatejavascript\"



local_storage("account registry update", "true", function gromit(){                         // if they have not gotten the account registry update
    if (localStorage.getItem("accounts").slice(0,1) != "{") {                               // the new registry starts with "{", so if the start is not that, it's the old registry
        var old_registry = JSON.parse(`{${localStorage.getItem("accounts")}}`);             // get old registry
        var new_registry = new Object();                                                    // initialise new registry
        for (keys in old_registry) {                                                        // for all the accounts in your old registry save
            if (keys != "admin" && keys != "pugface" && keys != "dev") {                    // strip the old default accounts
                new_registry[keys] = old_registry[keys];                                    // add any other account
            }
        }
        localStorage.setItem("accounts", JSON.stringify(new_registry));                     // set it as the new registry
    }
});
if (localStorage.getItem("comments")) {
    // im sorry but your comments are being reset
    // my condolences\
    // NO IM TURNING THEM INTO NOTES NEVERMIND
}

textcolour = local_storage("text-colour", "#7cfc00");                   // colour localstorage
backcolour = local_storage("back-colour", "#000000");
accycolour = local_storage("accy-colour", "#1e1e1e");
og_textcolour = textcolour;
og_backcolour = backcolour;
og_accycolour = accycolour;
local_storage("startup", "true", function jeremy(){                     //startup sequence only happens on a freshly cleared cache
    db("cache is not freshly reset, skipping startup sequence.");
}, function candice(){
    inputlock = true;
    db("cache is freshly reset, running startup sequence");
    startup = true;
});
accountsregistry = local_storage("accounts", JSON.stringify({"pugs": "hello"}));
user = local_storage("currentaccount", "user");
local_storage("worble_save", "", function robert(){
    worble_save = loadWorble();   // when there is an existing local save it'll automatically load it (fancy)
});
worble_word = local_storage("worble_word", "");
worble_staus = local_storage("worble_status", "false");
if (worble_status == "false") {
    worble_status = false;
} else {
    worble_status = true;
}
worble_colourblind = local_storage("worble_colourblind", "false");
if (worble_colourblind == "false") {
    worble_colourblind = false;
} else {
    worble_colourblind = true;
}
local_storage("worble_guesscount", 0);
worble_stats_guesses = local_storage("worble_stats_guesses", '{"guesses": [0]}');
if (worble_stats_guesses != "") {
    worble_stats_guesses = JSON.parse(worble_stats_guesses)["guesses"];
}
console.debug(worble_stats_guesses);
worble_stats_currentstreak = local_storage("worble_stats_currentstreak", 0);
worble_stats_currentstreak = parseInt(worble_stats_currentstreak);
worble_stats_biggeststreak = local_storage("worble_stats_biggeststreak", 0);
worble_stats_biggeststreak = parseInt(worble_stats_biggeststreak);
worble_stats_restarts = local_storage("worble_stats_restarts", 0);
worble_stats_restarts = parseInt(worble_stats_restarts);
worble_word_id = local_storage("worble_word_id", 0);
worble_word_id = parseInt(worble_word_id);
custom_themes = JSON.parse(local_storage("themes", JSON.stringify(custom_themes)));
textadventures_saves = JSON.parse(local_storage("text adventures", "{}"));
custom_queues = JSON.parse(local_storage("queues", "{}"));
notes = JSON.parse(local_storage("notes", "{}"));
debugvar_size = parseInt(local_storage("debug var size", 5));
encryption_key = JSON.parse(local_storage("encryptionkey", "{}"));
cns_session_id = parseInt(local_storage("session id", 0));
sfx = parseBool(local_storage("sfx", "false"));
bluescreening = parseBool(local_storage("bluescreening", 'true'))
snake_highscore = parseInt(local_storage("snake highscore", '0'));
sizemod = Number(local_storage("zoom", '1'));
custom_ascii_fonts = JSON.parse(local_storage("custom ascii fonts", "{}"));
music_volume = local_storage("music volume", 1)
//music_volume = local_storage("music volume", 1)
console.debug(textadventures_saves);
//textadventures_saves = textadventures_saves);
//console.debug(textadventures_saves);                JSON.parse(local_storage("encryption key", "{}"));



/*
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

*/

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

db("local storage init finished.", "init");

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

db(`[url param init] debug: ${pr_debug}, debugvar: ${pr_debugvar}, suggestion: ${pr_suggestion}, command: ${pr_command}`);


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

/*
if (pr_command != null) { // if theres something at the url link and not just empty
    var text = `${pr_command}`;

    var elem = document.getElementById("consoleinput");

    elem.value = text;

    document.getElementById("consoleinput").dispatchEvent(new KeyboardEvent('keyup', {
        key: "enter"
    }));
    
    var sting = elem.value;
    commang.push(text);
    userAppend(`${text}`);

    if (mainsys == true) {
        parseCommand(text);
    } else if (filesys == true) {
        filesysParse(text);
    }

    
    elem.value = "";
    currentHistCOm = 0;
    currentCOM = 0;
    scrolly("consy");
    db(consoltext);
    db(commang);

}
*/


// i need to redo these some day because they're old and bad

db("url params init finished...", "init");

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
db("scrollBottom init finished...", "init");

debugWindow(debug);

document.getElementById("songinfo").style.display = "none";
document.getElementById("p2cred").style.display = "none";
document.getElementById("p1cred").style.display = "none";
document.getElementById("p1ascii").style.display = "none";

/*
function toggleHideDebug() {
    if (debugHide == false) {
        debugHide = true;
        db("debugHide is true now");
        document.getElementById("depeep").style.display = "none"; //245
        document.getElementById("debub").style.height = "30px";
    } else {
        debugHide = false;
        db("debugHide is false now");
        document.getElementById("depeep").style.display = "";
        document.getElementById("debub").style.height = "245px";
    }
}
function toggleHideDebugVar() {
    if (debugHideVar == false) {
        debugHideVar = true;
        db("debugHideVar is true now");
        document.getElementById("depeepvar").style.display = "none";
        document.getElementById("debubvar").style.height = "30px";
    } else {
        debugHideVar = false;
        db("debugHideVar is false now");
        document.getElementById("depeepvar").style.display = "";
        document.getElementById("debubvar").style.height = "295px";
    }
}
*/


function toggleHideSongInfo() {
    if (debugHideSonginfo == false) {
        debugHideSonginfo = true;
        db("debugHideSonginfo is soooo true now");

        var diff = scrollDifference(document.getElementById("songinfo"));
        if (diff <= autoscroll_buffer) {
            si_sv_sc = "auto"
        } else {
            si_sv_sc = document.getElementById("songinfo").scrollTop
        }

        document.getElementById("songpeepvar").style.display = "none";
        document.getElementById("songinfo").style.height = "30px";
    } else {
        debugHideSonginfo = false;
        db("debugHideSonginfo is false now");
        document.getElementById("songpeepvar").style.display = "";
        document.getElementById("songinfo").style.height = "130px";

        if (si_sv_sc != "auto") {
            document.getElementById("songinfo").scrollTo(0, si_sv_sc);
        } else {
            document.getElementById("songinfo").scrollTo(0, document.getElementById("songinfo").scrollHeight);
        }
        
    }
}

function toggleHideP1Cred() {
    if (debugHideP1Cred == false) {
        debugHideP1Cred = true;
        db("debugp1 is soooo true now");

        var diff = scrollDifference(document.getElementById("p1cred"));
        if (diff <= autoscroll_buffer) {
            p1c_sv_sc = "auto"
        } else {
            p1c_sv_sc = document.getElementById("p1cred").scrollTop
        }

        document.getElementById("p1creed").style.display = "none";
        document.getElementById("p1cred").style.height = "30px";
    } else {
        debugHideP1Cred = false;
        db("debugp1 is false now");
        document.getElementById("p1creed").style.display = "";
        document.getElementById("p1cred").style.height = "420px";

        if (p1c_sv_sc != "auto") {
            document.getElementById("p1cred").scrollTo(0, p1c_sv_sc);
        } else {
            document.getElementById("p1cred").scrollTo(0, document.getElementById("p1cred").scrollHeight);
        }
        
    }
}
function toggleHideP2Cred() {
    if (debugHideP2Cred == false) {
        debugHideP2Cred = true;
        db("debugHideSonginfo is soooo true now");

        var diff = scrollDifference(document.getElementById("p2cred"));
        if (diff <= autoscroll_buffer) {
            p2c_sv_sc = "auto"
        } else {
            p2c_sv_sc = document.getElementById("p2cred").scrollTop
        }

        document.getElementById("p2creed").style.display = "none";
        document.getElementById("p2cred").style.height = "30px";
    } else {
        debugHideP2Cred = false;
        db("debugHideSonginfo is false now");
        document.getElementById("p2creed").style.display = "";
        document.getElementById("p2cred").style.height = "80vh";
        
        if (p2c_sv_sc != "auto") {
            document.getElementById("p2cred").scrollTo(0, p2c_sv_sc);
        } else {
            document.getElementById("p2cred").scrollTo(0, document.getElementById("p2cred").scrollHeight);
        }
    }
}
function toggleHideP1Ascii() {
    if (debugHideP1Ascii == false) {
        debugHideP1Ascii = true;
        db("debugHideSonginfo is soooo true now");

        var diff = scrollDifference(document.getElementById("p1ascii"));
        if (diff <= autoscroll_buffer) {
            p1a_sv_sc = "auto"
        } else {
            p1a_sv_sc = document.getElementById("p1ascii").scrollTop
        }

        document.getElementById("p1aascii").style.display = "none";
        document.getElementById("p1ascii").style.height = "30px";
    } else {
        debugHideP1Ascii = false;
        db("debugHideSonginfo is false now");
        document.getElementById("p1aascii").style.display = "";
        document.getElementById("p1ascii").style.height = "420px";
        
        if (p1a_sv_sc != "auto") {
            document.getElementById("p1ascii").scrollTo(0, p1a_sv_sc);
        } else {
            document.getElementById("p1ascii").scrollTo(0, document.getElementById("p1ascii").scrollHeight);
        }
    }
}



// DEBUG WIN ADDITION POINT

// new debug stuff

function debugWindow(bool) {
    
    if (bool == true) {     // if it open window
        debugwin_status = true;            //      \/ REMEMBER TO CHANGE THIS VALUE JESSE!!
        debug_win = window.open("", "_blank", "PopUp1,directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no,width=400,height=350,top="+(screen.height-400)+",left="+(screen.width-840));
        try {
            debug_win.document.write(`
            <style>::-webkit-scrollbar {width: 10px;height: 10px;} .eee { width: 100vw; }</style>
            <style id="scroll-text-style">::-webkit-scrollbar-thumb { background: ${accycolour}; }</style>
            <style id="scroll-back-style">::-webkit-scrollbar-track { background: ${backcolour}; } ::-webkit-scrollbar-corner { background: #000000 }</style>
            <style id="back-style">body { background-color: ${backcolour};}</style>
            <style id="text-style">@font-face {font-family: MSDOS; src: url(DOSVGA_437_WIN.ttf);} body { color: ${textcolour}; font-family: MSDOS, monospace;} pre { font-family: MSDOS, monospace;}</style>
            <style id="window-resize"> body {width: 100px;}</style>
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
            console.debug("oh crap i think the popup got blocked or smth");
            displayAnim("\nUh oh! it seems that the debug window didn't open! Please make sure that popups are allowed on this site!", 7, "#ff0000");
        }
        var debug_check = setInterval(function() { 
            if(debug_win.closed) {
                clearInterval(debug_check);
                debug = false;
                db("debug window closed!!", "orange");
            }
        }, 1000);
    } else {
        //debug_win.close();
    }
}

function debugVarWindow(bool) {
    
    if (bool == true) {     // if it open window
        var_debugwin_status = true;            //      \/ REMEMBER TO CHANGE THIS VALUE JESSE!!
        var_debug_win = window.open("debug.html", "Title", "PopUp2,directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no,width=400,height=350,top="+(screen.height-400)+",left="+(screen.width-840));
        try {

            /*
            var_debug_win.document.write(`
            <style>::-webkit-scrollbar {width: 10px;height: 10px;} .eee { width: 100vw; }</style>
            <style id="scroll-text-style">::-webkit-scrollbar-thumb { background: ${accycolour}; }</style>
            <style id="scroll-back-style">::-webkit-scrollbar-track { background: ${backcolour}; } ::-webkit-scrollbar-corner { background: #000000 }</style>
            <style id="back-style">body { background-color: ${backcolour};}</style>
            <style id="text-style">@font-face { font-family: COURIERPRIME; src: url(CourierPrime-Regular.ttf);} body { color: ${textcolour}; font-family: COURIERPRIME, monospace;} pre { font-family: COURIERPRIME, monospace;}</style>
            <style id="window-resize"> body {width: 100px;}</style>
            <title>CONSOLE DEBUG VAR</title>
            <link rel="icon" href="icon.png">`);
            var_debug_win.document.write('<pre id="aaa" class="eee"></pre>'); 
            var_debug_win.document.write(`<script>
            var toot = false;
            setInterval(function() {                        // loop this every quarter second
                toot = false;
                try {
                    if (window.opener.debugvar != true) {   // if debugvar is false
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
            */

        } catch (err) {
            console.debug("oh crap i think the popup got blocked or smth");
            displayAnim("\nUh oh! it seems that the debug window didn't open! Please make sure that popups are allowed on this site!", 7, "#ff0000");
        }
        ///var_debug_win.document.getElementById("size-pass").innerHTML = debugvar_size;
        debvar_first_time = false;
        var_debug_check = setInterval(function() { 
            var size_old = debugvar_size;
            if(var_debug_win.closed) {
                clearInterval(var_debug_check);
                debugvar = false;
                db("debug var window closed!!", "orange");
            } else {
                if (size_old != debugvar_size || debvar_first_time == false) {
                    var_debug_win.document.getElementById("size-pass").innerHTML = `${debugvar_size}`;
                    debvar_first_time = true;
                }
                
                to_pass_pre = JSON.stringify(to_pass);  // get full duplicate of to_pass
                to_pass = {
                    "user": user,
                    "inputlock": inputlock,
                    "debug": debug,
                    "debugvar": debugvar,
                    "snakegamestart": snakegamestart,
                    "snakegame": snakegame,
                    "enterlock": enterlock,
                    "snakeinputs": snakeinputs,
                    "copycomm": copycomm,
                    "coopy": coopy,
                    "commandhistorylock": commandhistorylock,
                    "snakegamespeed": snakegamespeed,
                    "snakeingame": snakeingame,
                    "snaketick": snaketick,
                    "textcolour": textcolour,
                    "backcolour": backcolour,
                    "accycolour": accycolour,
                    "autocommand": autocommand,
                    "worble_status": worble_status,
                    "worble_colourblind": worble_colourblind,
                    "worble_guesscount": worble_guesscount,
                    "worble_stats_restarts": worble_stats_restarts,
                    "worble_stats_currentstreak": worble_stats_currentstreak,
                    "worble_stats_biggeststreak": worble_stats_biggeststreak,
                    "worble_word": worble_word,
                    "worble_word_id": worble_word_id,
                    "worble_randomvalue": worble_randomvalue,
                    "worble_gray": worble_gray,
                    "worble_yellow": worble_yellow,
                    "worble_green": worble_green,
                    "worble_share_gray": worble_share_gray,
                    "worble_share_yellow": worble_share_yellow,
                    "worble_share_green": worble_share_green,
                    "console_id": console_id,
                    "music_playing": music_playing,
                    "paused_lyrics": paused_lyrics,
                    "portal_playing": portal_playing,
                    "portal_type": portal_type,
                    "og_textcolour": og_textcolour,
                    "og_backcolour": og_backcolour,
                    "og_backcolour": og_backcolour,
                    "egg": egg,
                    "credits_playing": credits_playing,
                    "commandIndex": commandIndex,
                    "inHistory": inHistory,
                    "console_group_id": console_group_id,
                    "cur_lyr": cur_lyr,
                    "paused_lyrics": paused_lyrics,
                    "windowWidth": windowWidth,
                    "windowHeight": windowHeight,
                    "aspectratio": aspectratio,
                    "sizemod": sizemod,
                    "orientation": orientation,
                    "textheight": textheight,
                    "listening_input": listening_input,
                    "listening_end": listening_end,
                    "stars_status": stars_status,
                    "star_speed": star_speed,
                    "star_fade_speed": star_fade_speed,
                    "star_runtime": star_runtime,
                    "star_running": star_running,
                    "starlock": starlock,
                    "starTimers": starTimers,
                    "touchtonetm": touchtonetm,
                    "autoscrolling": autoscrolling,
                    "scroll_bottom": scroll_bottom,
                    "autoscroll_buffer": autoscroll_buffer,
                    "cursor_pos": cursor_pos,
                    "doglock": doglock,
                    "dog": dog,
                    "dog_pets": dog_pets,
                    "dog_speed": dog_speed,
                    "dog_anim_index": dog_anim_index,
                    "dog_anim_len": dog_anim_len,
                    "dog_anim_go": dog_anim_go,
                    "dogtime": dogtime,
                    "dog_outfit": dog_outfit,
                    "cur_ta": cur_ta,
                    "adventure_lock": adventure_lock,
                    "cur_cipher": cur_cipher,
                    "in_queue": in_queue,
                    "debugvar_size": debugvar_size,
                    "music_volume": music_volume,
                    "console_visible": console_visible,
                    "bluescreen": bluescreen,
                    "mainlock": mainlock,
                    "bluescreen_done": bluescreen_done,
                    "current_command": current_command,
                    "sfx": sfx,
                    "display_noise": display_noise,
                    "snk_set.speed": snk_set.speed,
                    "snk_set.size": snk_set.size,
                    "snk_limit": snk_limit,
                    "bluescreening": bluescreening,
                    "snakelock": snakelock,
                    "snaketick": snaketick,
                    "snake_score": snake_score,
                    "snake_highscore": snake_highscore,
                    "snk_dir": snk_dir,
                    "cns_session_id": cns_session_id,
                    "gol_set.speed": gol_set.speed,
                    "gol_set.size": gol_set.size,
                    "gol_active": gol_active,
                    "gol_lock": gol_lock,
                    "gol_gen": gol_gen
                }
            
                if (JSON.stringify(to_pass) == to_pass_pre) {   // if its the same
            
                } else {    // if it's different
                    
                    var_debug_win.document.getElementById("passthrough").innerHTML = JSON.stringify(to_pass);

                }
            
            }
        }, 100);
    } else {
        //var_debug_win.close();
    }
}


/*
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
        console.debug("binted.");
    }
}

for(var b in window) { 
  if(window.hasOwnProperty(b)) console.debug(b); 
}

*/



db("debug window init finished...", "init");

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
        db("input is an array, copying using array function.", "magenta");
        var leny = arr.length;
        for (let i = 0; i < leny; i++) {
            fimb = `${fimb}${copycomm} ${arr[i]}\n`; 
        }
    } else {
        db("input is not at array, copying as regular string.", "magenta");
        fimb = `${copycomm} ${arr}`;
    }
    copyclip(fimb);
}

function copyFancy(wall_socket) {
    if (typeof wall_socket == 'object' && Array.isArray(wall_socket) != true) {
        db("copy input is a JSON object. stringifying that and copying it to clipboard.", "purple");
        copyclip(JSON.stringify(wall_socket));
    } else {
        copyArr(wall_socket);
    }
}

db("window scale init finished...", "init");

function scrollDifference(parmesan) {
    //console.debug(mom.scrollTop, mom.scrollHeight);
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
db("scrolly init finished...", "init");

function sizeCheck() {
    
    updateScreenVars();
    if (windowWidth > windowHeight) {
        // if on landscape
        orientation = "landscape";
        aspectratio = windowWidth / windowHeight;
        /*document.getElementById("body").style.fontSize = `${aspectratio * sizemod}vh`;
        document.getElementById("regtext").style.fontSize = `${aspectratio * sizemod}vh`;
        document.getElementById("consoleinputstyle").style.fontSize = `${1.25 * aspectratio * sizemod}vh`;
        document.getElementById("consoleinput").style.fontSize = `${1.25 * aspectratio * sizemod}vh`;
        document.getElementById("consy-height").innerHTML = `.consy { height: ${ windowHeight - ( document.getElementById("consoleinput").clientHeight + 35)}px; }`;*/
    } else if (windowWidth < windowHeight) {
        // if on portrait
        orientation = "portrait";
        aspectratio = windowHeight / windowWidth;
        /*document.getElementById("body").style.fontSize = `${2 * aspectratio * sizemod}vw`;
        document.getElementById("regtext").style.fontSize = `${2 * aspectratio * sizemod}vw`;
        document.getElementById("consoleinputstyle").style.fontSize = `${2.25 * aspectratio * sizemod}vw`;
        document.getElementById("consoleinput").style.fontSize = `${2.25 * aspectratio * sizemod}vw`;
        document.getElementById("consy-height").innerHTML = `.consy { height: ${ windowHeight - ( document.getElementById("consoleinput").clientHeight + 35)}px; }`;*/
    }

    db(orientation, "sizey");

    vis_inputheight = document.getElementById("consoleinput").clientHeight;

    document.getElementById("consy").style.height = `calc(100vh - ${vis_inputheight + 30 }px )`

    //console.log(vis_inputheight)

    vis_consywidth = inHorizViewport($('#consy'));
    vis_consyheight = inVertiViewport($('#consy'));

    document.getElementById("text-scale").innerHTML = `.textsize {font-size: ${default_rem * sizemod}rem;}`;


    display_textsize[0] = document.getElementById("regtext").clientWidth;
    display_textsize[1] = document.getElementById("regtext").clientHeight;

    display_charsize[0] = Math.floor( vis_consywidth / display_textsize[0]);
    display_charsize[1] = Math.floor( vis_consyheight / display_textsize[1]);

    //console.debug("console width: ", vis_consywidth);
    //console.debug("console height: ", vis_consyheight);
    //console.debug("console text size: ", display_textsize);
    //console.debug("console char size: ", display_charsize);


    // CALCULATING HOW MANY NEWLINES PER ENTIRE PAGE HEIGHT!!

    // so
    // (landscape) at 1% view height (of 907 pixels), it can display 43 lines
    // (portrait) at 2% view width (of 734 pixels), it can display 41 lines

    // actually imma just have it do a few checks, if CON_0 exists, it'll get the height of that, if that doesnt exist, it'll try getting CON_1 (when you run clear it starts on CON_1), and if none are present it'll just set it to 20

    // screw this im doing different math because this math is dumb
    
    // now its gonna calculate based on the height of a dummy text element with a single character that it gets the size of
    
    //console.debug("height: ", textheight);
    //console.debug("newlin: ", newline_height);


    

}
sizeCheck();
db("text scaling init finished...", "init");


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



function displayAppend(message, in_id, hide, colour, link, style) {
    debubgall(`[displayAppend]   message: ${message}  in_id: ${in_id}   hide: ${hide}   colour: ${colour}   link: ${link}`);
    if (console_history[in_id] != undefined || console_history[in_id] != null) {    // if the value already exists
        console_history[in_id] = `${console_history[in_id]}${message}`;             // append to value
    } else {                                                                        // else
        console_history[in_id] = `${message}`;                                      // just set value
    }
    //console.debug(in_id);

    if (console_colour_history[in_id]) {      // if the value already exists
        debubgall("exists!");
        console_colour_history[in_id] = `${colour}`;        // append to value
    } else {                                                // else
        debubgall("NO EXIST");
        if (typeof colour == 'string' && colour != "") {
            console_colour_history[in_id] = `${colour}`;        // append to value
        } else {
            console_colour_history[in_id] = `inherit`;                                                  // just set value
        }   
    }

    if (console_link_history[in_id]) {      // if the value already exists
        debubgall("exists!");
        console_link_history[in_id] = `${link}`;        // append to value
    } else {                                                // else
        debubgall("NO EXIST");
        if (link) {
            console_link_history[in_id] = `${link}`;        // append to value
        } else {
            console_link_history[in_id] = ``;                                                  // just set value
        }
    }
    if (console_style_history[in_id]) {      // if the value already exists
        debubgall("exists!");
        console_style_history[in_id] = `${style}`;        // append to value
    } else {                                                // else
        debubgall("NO EXIST");
        if (style) {
            console_style_history[in_id] = `${style}`;        // append to value
        } else {
            console_style_history[in_id] = ``;                                                  // just set value
        }
    }

    if (hide != undefined && hide != null && hide == true) {    // if hide exists and set to true
        debubgall("i shall hide display update");
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
        debubgall(`[DISPLAY UPDATE]: id ${cur_id} is being checked.`);
        debubgall(`[displayUpdate]   history: ${console_history[cur_id]}   colour: ${console_colour_history[cur_id]}   link: ${console_link_history[cur_id]}`)

        var elemCheck = document.getElementById(`CON_${cur_id}`);
        if (elemCheck) {                                                // if the element exists
            debubgall("it EXISTS"); 
                                                 // it does exist
            if (elemCheck.innerHTML != console_history[cur_id] || elemCheck.style.color != console_colour_history[cur_id] || elemCheck.style.cssText != console_style_history[cur_id] ) {       // if the element does not match what's in memory
                debubgall("they dont match");
                elemCheck.innerHTML = `${console_history[cur_id]}`;
                elemCheck.style.color = `${console_colour_history[cur_id]}`;
                
            } else {
                debubgall("they do match")
            }

            // function() { alert("hallo!") }
            debubgall(`checking id of ${cur_id} of ${console_link_history[cur_id]}`);
            var check_url = `${console_link_history[cur_id]}`;
            if (isUrl(`${check_url}`) == true) {
                debubgall("it is a url!!! woo!!!");
                debubgall(`checking ${console_link_history[cur_id]}`);
                elemCheck.onclick = function() { window.open(`${check_url}`); }
            } else {
                debubgall("it is not a url!!");
                //elemCheck.onclick = "";
            }
            // function() { alert("hallo!") }
            debubgall(`checking id of ${cur_id} : ${console_link_history[cur_id]}`);
            var check_url = `${console_link_history[cur_id]}`;
            //check_url = "https://dapug.lol"
            if (isUrl(`${check_url}`) == true && check_url != "") {
                debubgall("it is a url!!! woo!!!");
                debubgall(`checking id of ${cur_id} : ${console_link_history[cur_id]}`);
                elemCheck.setAttribute( "onClick", `javascript: window.open("${check_url}");` );
                elemCheck.style.textDecoration = "underline";
                elemCheck.style.cursor = "pointer";
                elemCheck.style.cssText = `text-decoration: underline; cursor: pointer; color: ${console_colour_history[cur_id]}; ${console_style_history[cur_id]}`;
            } else {
                debubgall("it is not a url!!");
                //elemCheck.onclick = "";
                elemCheck.removeAttribute("onClick");
                elemCheck.style.cssText = `color: ${console_colour_history[cur_id]}; ${console_style_history[cur_id]}`;
            }

            

        } else {
            debubgall("you idiot it doesnt exist");                        // it doesnt exist
            consol.innerHTML = `${consol.innerHTML}<span id="CON_${cur_id}" style="color: ${console_colour_history[cur_id]}; ${console_style_history[cur_id]}">${console_history[cur_id]}</span>`;
        }
    }
}

function singleDisplayUpdate(cur_id) {
    // UPDATES THE CONSOLE DISPLAY TM
    var finalUpdate = "";
    var history = console_history;
    var elemCheck = document.getElementById(`CON_${cur_id}`);
    if (elemCheck) {                                                // if the element exists
        debubgall("it EXISTS"); 
                                                // it does exist
        if (elemCheck.innerHTML != console_history[cur_id] || elemCheck.style.color != console_colour_history[cur_id] ) {       // if the element does not match what's in memory
            debubgall("they dont match");
            elemCheck.innerHTML = `${console_history[cur_id]}`;
            elemCheck.style.color = `${console_colour_history[cur_id]}`;

        } else {
            debubgall("they do match")
        }
        // function() { alert("hallo!") }
        debubgall(`checking id of ${cur_id} of ${console_link_history[cur_id]}`);
        var check_url = `${console_link_history[cur_id]}`;
        if (check_url != '') {
            debubgall("it is a url!!! woo!!!");
            debubgall(`checking ${console_link_history[cur_id]}`);
            elemCheck.onclick = function() { window.open(`${check_url}`); }
        } else {
            debubgall("it is not a url!!");
            //elemCheck.onclick = "";
        }
        // function() { alert("hallo!") }
        debubgall(`checking id of ${cur_id} : ${console_link_history[cur_id]}`);
        var check_url = `${console_link_history[cur_id]}`;
        //check_url = "https://dapug.lol"
        if (isUrl(`${check_url}`) == true && check_url != "") {
            debubgall("it is a url!!! woo!!!");
            debubgall(`checking id of ${cur_id} : ${console_link_history[cur_id]}`);
            elemCheck.setAttribute( "onClick", `javascript: window.open("${check_url}");` );
            elemCheck.style.cssText = `text-decoration: underline; cursor: pointer; color: ${console_colour_history[cur_id]}; ${console_style_history[cur_id]}`;
        } else {
            debubgall("it is not a url!!");
            //elemCheck.onclick = "";
            elemCheck.removeAttribute("onClick");
            elemCheck.style.cssText = `color: ${console_colour_history[cur_id]}; ${console_style_history[cur_id]}`;
        }


    } else {
        debubgall("you idiot it doesnt exist");                        // it doesnt exist
        consol.innerHTML = `${consol.innerHTML}<span id="CON_${cur_id}" style="color: ${console_colour_history[cur_id]}; ${console_style_history[cur_id]}">${console_history[cur_id]}</span>`;
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
        //console.debug(`${line}`);
        var use_id = cur_id + 1;        // the current id that's being used
        boom();
        await displayMultilineLine(`${line}`, speed, use_id);
        await displayAppend("<br>", use_id, false);
        scrolly("consy");
    }
}

async function displaySingleLine(message, speed, colour, link, style) {
    debubgall(`[displaySingleLine]   message: ${message}  speed: ${speed}   colour: ${colour}   link: ${link}`);
    return new Promise((resolve,reject)=>{
        //here our function should be implemented 
        display_noise = true;
        //rw_sound.play();
        var messagey = message.split("");
        var messageyLength = messagey.length;
        var use_id = console_id + 1;        // the current id that's being used
        console_id += 1;                    // update console id
        if (speed == 0) {
            displayAppend(message, use_id, false, colour, link, style);
            resolve();
        } else {
            for (let i = 0; i < messageyLength; i++) {
                TMO_push.push(setTimeout(function timer() {
                    var mess = messagey[i];
                    scrolly("consy");
                    if (messagey[i] == " " || messagey[i] == "\n") {
                        boom();
                    }

                    displayAppend(messagey[i], use_id, false, colour, link, style);
                    if (i == messageyLength - 1) { 
                        resolve();
                        scrolly("consy");
                        display_noise = false;
                        //rw_sound.pause();
                    }
                    
                }, i * speed));
        
            }
        }
    });
}

async function displaySingleGradientLine(message, speed, colours) {
    db(`[sisplaySingleGradientLine]     ${message}   ${speed}   from ${colours[0]}  to ${colours[1]}`, "git");
    
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


    debubgall(`[displaySingleLine]   message: ${message}  speed: ${speed}   colour: ${colour}   link: ${link}`);
    return new Promise((resolve,reject)=>{
        //here our function should be implemented 
        
        for (let i = 0; i < messageyLength; i++) {
            setTimeout(function timer() {
                var use_id = console_id + 1;        // the current id that's being used
                console_id += 1;                    // update console id

                var useColour = `rgb(${R_curr}, ${G_curr}, ${B_curr})`;

                db(`[RGB VALUE]: ${useColour} id: ${use_id}`);

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

    var colour = "";

    if (userin != null) {
        userfor = `${userin}`;
    } else {
        userfor = `${user}`;
    }


    displayNewline();
    displayAnim(`[${userfor}@dapug.lol]: ${message}`, 0, colour);
    scrolly("consy");
}

async function displayAnim(message, speed, colour, link, style) {      // fancy anim
    boom();
    if ( `${speed}` == "" ) {
        speed = 7;
    }
    //console.debug(`[displayanim] ${message}, ${speed}, ${type}`);
    debubgall(`[displayAnim]   message: ${message}  speed: ${speed}   colour: ${colour}   link: ${link}`);
    var egg_white = "";
    var egg_yolk = colour;
    var egg_shell = link;

    if (rainbow_enabled == true) {
        // rainbow
        colour = rainbow[rainbow_index];

        if (rainbow_index == rainbow.length - 1) {   // if its at the end
            rainbow_index = 0;
        } else {
            rainbow_index += 1;
        }
    }


    db(message, "git");

    if (Array.isArray(message) == true) {
        egg_white = message.join("\n");
    } else if (typeof message == 'object') {
        // if it's an object

        var hehatm = {          // default 
            "text": "hello!",
            "speed": 7,
            "colour": false,
            "link": false
        }
        egg_yolk = message["colour"];
        egg_shell = message["link"];


    } else if (typeof message == 'string') {
        egg_white = message;
    }
    await displaySingleLine(egg_white, speed, colour, link, style);
}

function dp_ct(message) { // get the spaces for a thing lol
    var widdy = (display_charsize[0] - message.length) / 2;
    return " ".repeat(widdy);
}

function displayTimeAnim(message, durat) {    // duration in ms
    var speedy = durat / message.length;
    db(`duration: ${durat}, speed: ${speedy}`);
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
    console.debug(pushy);

}

async function displayImage(image, speed) {
    debubgall(`[displaySingleLine]   message: ${message}  speed: ${speed}   colour: ${colour}   link: ${link}`);
    return new Promise((resolve,reject)=>{
        //here our function should be implemented
        var messageyLength = image.length;
        var use_id = console_id + 1;        // the current id that's being used
        console_id += 1;                    // update console id
        if (`${speed}` == '0') {
            db("this is good");
            console.debug(image)
            displayAppend(image.join(""), use_id, false);
        } else {
            db("this is stupid");
            for (let i = 0; i < messageyLength; i++) {
                TMO_push.push(setTimeout(function timer() {
                    var mess = image[i];
                    scrolly("consy");
                    displayAppend(image[i], use_id, false);
                    if (i == messageyLength - 1) { 
                        resolve();
                        scrolly("consy");
                    }
                    
                }, i * speed));
                
                
            }
        }
        
        
    });
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



function lyrFunc(lyrics, i) {
    db(`lyric: "${`${lyrics[i]["text"]}`.replaceAll("\n", "")}"`, "lred");
    var lyr_exec = false;
    if (lyrics[i]["exec"]) {
        lyr_exec = lyrics[i]["exec"];
        eval(`${lyr_exec}`);
    }
    if (lyrics[i]["text"] != false) {
        displayTimeAnim(lyrics[i]["text"], (lyrics[i]["dur"][1] - lyrics[i]["dur"][0]));
    }
    /*
    if (i == lyr_len - 1) { 
        scrolly("consy");
    }
    */
}

/*
async function displayLyrics(lyrics) {
    lyr_status = new Array();
    var lyr_len = lyrics.length;
    musicTimeouts = 0;
    var timeouts = 0;
    
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
        


        db(`i: ${i}, startdur: ${startdur}, enddur: ${enddur}, fulldur: ${fulldur}`);

        LYR_push.push(
            new LyricTimer(
                function() { lyrFunc(lyr_len, cur_lyrics, i);
                lyr_status[i] = true;
                boom();
                if (lyr_exec != false) {
                    lyr_exec;
                }
            }, startdur)
        )

        musicTimeouts += 1;

    }

}


if (music_playing == true) {

        
            var tim = music.currentTime;
            
            console.debug("checking time: ", tim_proc);
            console.debug("indexof: ", processed_times.indexOf(tim_proc));
            if (processed_times.indexOf(tim_proc) > -1) {
                console.debug("there is supposed to be a lyric here!!! at ", tim_proc);
                displayAnim("A!!!", 1);
            }
        } else if (music_playing == false) {
            clearInterval(lyric_interval);
        }




*/

function tim_parse(tim) {
    var tim_proc = `${tim}`;
    tim_split = tim_proc.split(".");
    //console.debug("split: ", tim_split);
    var tim2 = `${tim_split[1]}`.slice(0, 3);
    //console.debug("tim1: ", tim2);
    var tim1 = `${tim_split[0]}`;
    if (tim1 == "0") {
        tim1 = "";
    }
    tim_proc = parseInt(`${tim1}${tim2}`);
    return tim_proc
}

function tim_dur(lyr) {
    var startdur = lyr[i]["dur"][0];
    var enddur = lyr[i]["dur"][1];
    var fulldur = enddur - startdur;
    return fulldur
}


function displayLyrics(lyrics) {
    
    // new lyric function!!!!!
    process_lyrics(lyrics);
    

    lyric_interval = setInterval(function() {

        if (music_playing == true) {
            var timmy = tim_parse(music.currentTime);
            //console.debug(timmy);
            for (i in songs[lyrics]["lyrics"]) {
                var door = songs[lyrics]["lyrics"][i]["dur"];
                if (!lyr_status[i]) {                           // if the lyric hasnt been done before
                    if ( (timmy >= door[0] && timmy < door[1] ) || (door[0] == door[1] && timmy >= door[0]) ) {  // if it's at least somewhere within the lyric time, and for the function eval ones, if both duration 1 and duration two are the same, and its after that
                        //displayAnim("AA!!!", 1);
                        lyrFunc(songs[lyrics]["lyrics"], i);
                        lyr_status[i] = true;
                    }
                }
                
            }

        } else {
            clearInterval(lyric_interval);
        }

    }, 1);

   

    // interval shall run every millisecond, and shall check if there are lyrics to be printed™
    // i wonder if i can have all the printing code inside of it as well, or if having it call a function would be faster
    // probably calling a function would be faster, so i'll do that
    //
    // it won't hurt




}

function process_lyrics(name) {     // process the lyrics to get the list of times
    processed_times = new Array(); // reset the object
    for (i in songs[name]["lyrics"]) {  // goes through every lyric
        var door = songs[name]["lyrics"][i]["dur"];
        console.debug(door);
        processed_times.push([door[0], door[1]]);
    }
}




function skipLyrics() {
    // skip those dum lyrics i dont want em
    music.currentTime = music.duration - 0.5; // put it at the end so it ends the song (tm)
    /*
    for (let i = 0; i < musicTimeouts; i++) {   // for every music timeout
    
        eval(`clearTimeout(TMO_${i}); delete TMO_${i};`);
    }
*/

    for (i in TMO_push) {
        clearTimeout(TMO_push[i]);
    }

    for (i in LYR_push) {
        clearTimeout(LYR_push[i]);
        LYR_push[i].skip()
    }
}

function pauseLyrics() {
    // skip those dum lyrics i dont want em
    music.pause();
    
    for (i in LYR_push) {
        if (lyr_status[i]) { // if it exists (basically means its true)
            
        } else {
            LYR_push[i].pause;
        }

        
    }
}

function resumeLyrics() {
    // skip those dum lyrics i dont want em
    music.play();
    
    for (i in LYR_push) {
        if (lyr_status[i]) { // if it exists (basically means its true)
            
        } else {
            LYR_push[i].resume();;
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





db("new display framework init finished.", "init");



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
db("screen operations init finished...", "init");

var animSPEED = 25;
var animSentence1 = "";
var animchar1 = 0;
var end1 = true;
//var appendy
db("more variable init finished...", "init");
//intervalID1 = setInterval(animyOne, animSPEED);

function animyOne() {
    debubgall(end1);
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
db("old text anim init finished...", "init");
var animDone = true;
function newAnim(message, speed) {
    return new Promise((resolve,reject)=>{
        //here our function should be implemented 
        animDone = false;
        var messagey = message.split("");
        var messageyLength = messagey.length;
        debubgall(`${animDone} anim??`);
        for (let i = 0; i < messageyLength; i++) {
            debubgall(i);
            setTimeout(function timer() {
            appendInline(messagey[i]);
            if (i == messageyLength - 1) {
                debubgall("dum")
                resolve();
                animDone = true;
            }
            }, i * speed);
        }
    });
};
db("newAnim init finished...", "init");
async function animArt(array, speed) {
    var artLength = array.length;
    for (let i = 0; i < artLength; i++) {
        if (i != 0) {
            displayNewline();
        }
        await displayAnim(array[i], speed);
    }
}

db("animArt init finished...", "init");

function smartAnim(message, speed,) {
    if (typeof message == "string") { // if it's a string
        displayAnim(message, speed);
    } else if (typeof message == "object") { // if it's an object (copyArr only works with arrays though, but typeof's definition says object so if it breaks, it breaks.)
        displayAnim(message, speed);
    } else {
        var poo = typeof message;
        db(`variable type "${poo}" not suppored for smart anim. supported var types are "string" and "object".`, "orange");
    }
}

db("smartAnim init finished...", "init");


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
        debubgall(`${animDone} anim??`);
        var beforeText = `${consoltext}<a href="${link}" style="font-family: monospace;" target="_blank" class="link">`;

        
        for (let i = 0; i < messageyLength; i++) {
            debubgall(i);
            setTimeout(function timer() {
            
            
            beforeText = `${beforeText}${messagey[i]}`
            

            var frame = `${beforeText}</a>`;

            debubgall(frame);

            setScreen(frame);

            if (i == messageyLength - 1) {
                debubgall("dum")
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
        debubgall(`${animDone} anim??`);
        var beforeText = `${consoltext} <span style="color: ${colour}; font-family: monospace;" class="link">`

        
        for (let i = 0; i < messageyLength; i++) {
            debubgall(i);
            setTimeout(function timer() {
            
            
            beforeText = `${beforeText}${messagey[i]}`
            

            var frame = `${beforeText}</span>`;

            debubgall(frame);

            setScreen(frame);

            if (i == messageyLength - 1) {
                debubgall("dum")
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
        debubgall(`${animDone} anim??`);
        var beforeText = `${consoltext} <a href="${link}" style="color: ${colour}; font-family: monospace;" target="_blank" class="link">`

        
        for (let i = 0; i < messageyLength; i++) {
            debubgall(i);
            setTimeout(function timer() {
            
            
            beforeText = `${beforeText}${messagey[i]}`
            

            var frame = `${beforeText}</a>`;

            debubgall(frame);

            setScreen(frame);

            if (i == messageyLength - 1) {
                debubgall("dum")
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
    db("for science, you monster.", "color: #fffc77; background-color: #171c1f; border: 4px solid #0d0f0e; padding: 2px; border-radius: 4px;")
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
    debubgall(`${animDone} anim??`);
    for (let i = 0; i < credLen; i++) {
        debubgall(i);
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
        db(`portal 1 ascii art "${art}" does not exist!!`, "lred");
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



db("special anim init finished...", "init");


function removeInline(amounb) {
    consoltext = consoltext.slice(0, -1 * amounb);
    consoleWipe(consoltext);
    scrolly("consy");
};
db("removeInline init finished...", "init");
function removeAnim(speed) {
    var message = consol.innerHTML;
    debubgall(message);
    return new Promise((resolve,reject)=>{
        //here our function should be implemented 
        animDone = false;
        var charmount = 1;
        var messagey = message.split("");
        var messageyLength = messagey.length;
        if (speed == "auto") {
            speed = 560 / messageyLength;
            db(`SPEEEEEED ${speed}`);
            if (speed < 2 ) {
                charmount = 0.00560 * messageyLength;
                charmount = Math.round(charmount);
                db(`SCHFDKSJBFKSJDFL ${charmount}`);
            }
        }
        debubgall(`${animDone} anim??`);
        for (let i = 0; i < messageyLength / charmount; i++) {
            debubgall(i);
            setTimeout(function timer() {
            removeInline(charmount);
            db(`${i}, ${messageyLength}`);
            debubgall(consoltext);
            var newLength = consol.innerHTML;
            newLength = newLength.length;
            //if (i < newLength) {
            //    break;
            //} else 
            if (i == messageyLength) {
                debubgall("dum")
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
db("fancy screen clearing init finished...", "init");
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


function asciiText(font, text) {    // font is the font object
    var finalText = new Array(); // the final text variable itll return


    if (typeof font == 'string') {

        if (ascii_fonts[font]) {
            font = ascii_fonts[font];
        } else if (custom_ascii_fonts[font]) {
            font = custom_ascii_fonts[font];
        } else {
            font = ascii_fonts["default"];
        }


    }


    in_text = text.replace("\\n", "\n");

    in_text = in_text.split("\n");

    for (i in in_text) {
        var txt_ln = `${in_text[i]}`;
        var text_height = font["empty"].length;
        var text_len = txt_ln.length;
        var currentLine = ""; // the current line it's appending to
        for (let i = 0; i < text_height; i++) {
            // repeat for every line of the character
            currentLine = "";
            for (let e = 0; e < text_len; e++) {
                // mmmmmmmm   .charCodeAt(0);
                var letter = txt_ln[e];
                var lettID = `${letter}`;
                if (!font[lettID]) {
                    lettID = "unknown";
                }
                var lala = font[lettID][i];
                var spac = font["empty"][i];
                var beg = "";
                if (e == 0) {   // at the beginning of the line of text
                    if (font["align"]) {        // if the font has a special line alignment (like with the slant font)
                        beg = font["align"][i];
                    }
                }
                db(`${i} ${e}: ${letter} ${lettID}: ${lala}`, "orange");
                currentLine = `${beg}${currentLine}${lala}${spac}`;
            }
            db(`CURRENT: ${currentLine}`, "orange");
            //displayNewline();
            finalText.push(currentLine);
            // its appending the lines twice for some reason
            //found it
            // i wasnt clearing currentLine before the next line so itd just append onto the last line
            // YES
            // IT WORKS
        }
        db(currentLine);

    }


    db(in_text, "magenta");

    db(finalText, "magenta");
    return finalText
}


/*
var fontlow = font.toLowerCase();
    var finalText = []; // the final text variable itll return
    var in_font = font;
    if (fontlow == "" || fontlow == "default" || fontlow == "def" || fontlow == "d") {  // any other variations for font names, set up an if statement here for all the variations, then set in_font to be the name in the internal font JSON
        in_font = "default";
    } else if (fontlow == "slant" || fontlow == "s" || fontlow == "sla") {
        in_font = "slant"
    }
    */

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
            db("variable type not suppored for copying. supported type are: string, object", "blue1");
        }
    } else {
        db("copy is not enabled. skipping.", "blue1");
    }
}
/*function debugHidey() {
    var debubtoHide = document.getElementById()
}*/

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
    db(`[url parsing] original: ${finale}`, "blue1");
    if (to == false) {
        toot = 1;
        foom = 0;
    }
    for (i in json["parse"]) {
        var too = json["parse"][i][toot];
        var foo = json["parse"][i][foom];
        db(`[url parsing] haha: ${too} | ${foo}`, "blue1");
        finale = finale.replace(`${too}`, `${foo}`);
        db(`[url parsing] ${i}: ${finale}`, "blue1");
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
        debubgall("exists!");
        do_save = save;
    } else {
        debubgall("exists NOT!");
        do_save = true;
    }
    // background colour
    var r = hexToRgb(colour).r;
    var g = hexToRgb(colour).g;
    var b = hexToRgb(colour).b;
    db(`${r}${g}${b}`, "purple");
    // #7cfc00 GREEN
    document.getElementById("debubmouse").style.backgroundColor = colour;
    document.getElementById("debub").style.borderColor = colour;
    document.getElementById("debubvarmouse").style.backgroundColor = colour;
    document.getElementById("debubvar").style.borderColor = colour;
    document.getElementById("songinfomouse").style.backgroundColor = colour;
    document.getElementById("songinfo").style.borderColor = colour;
    document.getElementById("scrollbar-colour").innerHTML = `::-webkit-scrollbar-thumb { background: ${colour}; } ::selection {background: ${colour};}`;
    //document.getElementById("bottombar").style.backgroundColor = colour;
    if (do_save == true) {
        localStorage.setItem("accy-colour", colour);
        accycolour = `${colour}`;
    }


    // DEBUG WIN ADDITION POINT
    if (debug == true) {
        debug_win.document.getElementById("scroll-text-style").innerHTML = `::-webkit-scrollbar-thumb { background: ${colour}; }`;
    }
    if (debugvar == true) {
        var_debug_win.document.getElementById("scroll-text-style").innerHTML = `::-webkit-scrollbar-thumb { background: ${colour}; } #variables td:hover {background-color: ${colour}60 /*keep the 60 at the end, that's the opacity of the green*/} #gear-path { fill: ${colour};} #setbox { border: 1px solid ${colour};}`;
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
        debubgall("exists!");
        do_save = save;
    } else {
        debubgall("exists NOT!");
        do_save = true;
    }
    // background colour
    var r = hexToRgb(colour).r;
    var g = hexToRgb(colour).g;
    var b = hexToRgb(colour).b;
    db(`${r}${g}${b}`, "purple");
    // #7cfc00 GREEN
    document.getElementById("body").style.backgroundColor = colour;
    document.getElementById("body").style.background = colour;
    document.getElementById("scrollbar-back").innerHTML = `::-webkit-scrollbar-track { background: ${colour}; } ::-webkit-scrollbar-corner { background: ${colour} }`;
    document.getElementById("debub").style.backgroundColor = colour;
    document.getElementById("debubvar").style.backgroundColor = colour;
    document.getElementById("songinfo").style.backgroundColor = colour;


    // DEBUG WIN ADDITION POINT
    if (debug == true) {
        debug_win.document.getElementById("scroll-back-style").innerHTML = `::-webkit-scrollbar-track { background: ${colour}; } ::-webkit-scrollbar-corner { background: ${colour} }`;
        debug_win.document.getElementById("back-style").innerHTML = `body { background-color: ${colour};}`;
    }
    if (debugvar == true) {
        var_debug_win.document.getElementById("scroll-back-style").innerHTML = `::-webkit-scrollbar-track { background: ${colour}; } ::-webkit-scrollbar-corner { background: ${colour} }`;
        var_debug_win.document.getElementById("back-style").innerHTML = `body { background-color: ${colour};} #setbox { background-color: ${colour}; }`;
    }
    if (do_save == true) {
        localStorage.setItem("back-colour", colour);
        backcolour = `${colour}`;
    }
}

function setTextColour(colourcode, save) {
    var do_save = false;
    if (save == false || save == true) {
        debubgall("exists!");
        do_save = save;
    } else {
        debubgall("exists NOT!");
        do_save = true;
    }

    //console.debug("do_save: ", do_save);
    // text colour
    var r = hexToRgb(colourcode).r;
    var g = hexToRgb(colourcode).g;
    var b = hexToRgb(colourcode).b;
    db(`${r}${g}${b}`, "purple");
    // #7cfc00 GREEN
    document.getElementById("body").style.color = colourcode;
    document.getElementById("consoleinput").style.color = colourcode;
    document.getElementById("consoleinputstyle").style.color = colourcode;
    // rip scrollbar being text colour
    document.getElementById("link-styles").innerHTML = `.link {color: ${colourcode}; font-family: COURIERPRIME; } .link:hover { color: ${colourcode}; font-family: COURIERPRIME; } .link:visited { color: ${colourcode}; font-family: COURIERPRIME; } .link:active { color: ${colourcode}; font-family: COURIERPRIME; } `;
    document.getElementById("debubmouse").style.color = colourcode;
    document.getElementById("debubvarmouse").style.color = colourcode;
    document.getElementById("songinfomouse").style.color = colourcode;
    


    // DEBUG WIN ADDITION POINT
    if (debug == true) {
        // rip
        debug_win.document.getElementById("text-style").innerHTML = `body { color: ${colourcode};}`;
    }
    if (debugvar == true) {
        // rip
        var_debug_win.document.getElementById("text-style").innerHTML = `@font-face { font-family: COURIERPRIME; src: url(CourierPrime-Regular.ttf);} body { color: ${colourcode};} body { color: ${colourcode}; font-family: COURIERPRIME, monospace;} #variables td, #variables th { border: 1px solid ${colourcode}; }`;
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

    var hehe = "";

    var word_list = [...worble_words]

    if (worble_awful == true) { // if awful words are enabled, add the awful words to the list
        db(`worble awful words are enabled.`)
        word_list = [...worble_words, ...worble_awful_words]    // combine the two
    }
    var id = Math.floor(Math.random()* word_list.length);
    worble_word_id = `${id}`;
    var hehe = word_list[id];
    worble_wordslength = word_list.length;

    return hehe

}

// ALL BASE WORBLE FUNCTIONS:

function worbleStatus(bool) {
    db(`setting worble game status to ${bool}`, "wb_green");
    worble_status = bool;
    localStorage.setItem("worble_status", `${bool}`);
}

function worbleColourUpdate() {
    // will uodate colours via each span having a different class for the colours so it'll update automatically
    db("updating worble display colours...", "wb_green");
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
    db(`setting worble colourblind mode to ${bool}`, "wb_green");
    worble_colourblind = bool;
    localStorage.setItem("worble_colourblind", `${bool}`);
    worbleColourUpdate();
}

function worbleWord(word) {
    db(`[WORBLE WORD SET]: setting worble word to ${word}`, "wb_green");
    worble_word = `${word}`;
    localStorage.setItem("worble_word", word);
}




function saveWorble() { // save worble

    var finalSave = "";

    for (i in worble_save) { // for every entry in the save variable
        var currentword = worble_save[i];   // get current word itll focus on
        db(`[WORBLE SAVE]: saving "${currentword}"`, "wb_green");
        if (i == 0) {                                   // if it's the first entry
            finalSave = `"${currentword}"`;             // don't put a comma since there's nothing in front of it
        } else {                                        // if it's any other entry
            finalSave = `${finalSave},"${currentword}"` // do put a comma because there's actually stuff in front of it
        }
    }
    db(`[WORBLE SAVE]: final worble save: ${finalSave}`, "wb_green");

    localStorage.setItem("worble_save", `${finalSave}`);
    localStorage.setItem("worble_guesscount", worble_guesscount);
    localStorage.setItem("worble_word_id", worble_word_id);


}


function loadWorble() { //load worble
    var rawSave = localStorage.getItem("worble_save");  // get worble save
    var saveWithJson = `{ "worble": [${rawSave}] }`;    // add the extra characters to make it work as json
    db(`[WORBLE LOAD]: loaded worble save: ${saveWithJson}`, "wb_green");
    var parsedJson = JSON.parse(saveWithJson);          // parse it into json

    var tempSave = [];

    for (i in parsedJson["worble"]) {                   // iterate through all the words
        var currentWord = parsedJson["worble"][i];      // set the current word
        db(`[WORBLE LOAD]: current word: ${currentWord}`, "wb_green");
        tempSave.push(`${currentWord}`);                // add the current word to the temp array
    }
    db(`[WORBLE LOAD]: loaded worble save: ${tempSave}`, "wb_green");
    //worble_save = tempSave;                             // put it on js variable
    db(`[WORBLE LOAD]: loading complete.`, "wb_green");
    worble_guesscount = parseInt(localStorage.getItem("worble_guesscount"));
    return tempSave
}

var worb_save_test = [
    [
        {"letter": "s", "status": 0},
        {"letter": "u", "status": 1},
        {"letter": "s", "status": 2}
    ],
    [
        {"letter": "a", "status": 2},
        {"letter": "n", "status": 1},
        {"letter": "t", "status": 0},
    ]
]


function parseWorble() {
    var displaysave_append = new Array();
    db(`[WORBLE PARSE]: parsing worble...`, "wb_green");
    var guessed_word = worble_save[worble_save.length - 1];
    db(`parsing guessed word "${guessed_word}"!`);
    var current_guess_letters = `${guessed_word}`.split("");
    var current_letters = `${worble_word}`.split("");

    var jsontm_real = new Object();                         // will hold key/value pairs for the letters and their counters n stuff
    var jsontm_guess = new Object();

    var incorrect_amount = 0; // amount of incorrect letters

    for (i in current_letters) {
        var real_letter = current_letters[i];
        var guess_letter = current_guess_letters[i];
        var real_many = howMany(`${worble_word}`, `${real_letter}`);
        var guess_many = howMany(`${guessed_word}`, `${guess_letter}`);
        db(`[WORBLE PARSE]: there are ${real_many} of ${real_letter} in the real word.`, "wb_green");
        db(`[WORBLE PARSE]: there are ${guess_many} of ${guess_letter} in the guessed word.`, "wb_green");
        
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

        debubgall(jsontm_real);
        debubgall(jsontm_guess);

        db(`[WORBLE PARSE]: matching letter ${guess_letter} with ${real_letter}`, "wb_green");

        if (guess_letter == real_letter) {                      // letter exists in that exact place
            displaysave_append.push({"letter": `${guess_letter}`, "status": 3})

        } else if (guess_letter == undefined) {
            displaysave_append.push({"letter": `${guess_letter}`, "status": 0})
            incorrect_amount += 1;
        } else if (worble_word.indexOf(guess_letter) >= 0) {    // letter exists somewhere

            if (guess_many <= real_many) {
                db(`[WORBLE PARSE]: too many of ${guess_letter}!!!`, "wb_green");
                displaysave_append.push({"letter": `${guess_letter}`, "status": 2})
                incorrect_amount += 1;
            } else {
                displaysave_append.push({"letter": `${guess_letter}`, "status": 1})
                incorrect_amount += 1;
            }
        } else if (worble_word.indexOf(guess_letter) == -1) {    // gray
            displaysave_append.push({"letter": `${guess_letter}`, "status": 1})
            incorrect_amount += 1;
        }
    }

    console.log(displaysave_append)

    db(`[WORBLE PARSE]: pushing to word parse.`, "wb_green");
    worble_displaysave.push(displaysave_append);

    if (incorrect_amount != 0) {
        db(`[WORBLE PARSE]: found incorrect characters in guess! you are not done!!!! haha!!!`, "wb_green"); // i love bullying people on the internet /j
    } else {
        // its just geen
        worbleStatus(false);
    }

    return worble_displaysave
}


function animWorble(worble_parsed) {    // new parse for new worble save system
    console.log(worble_parsed)
    displayNewline();
    displayNewline();
    var finalAppend = "";
    for (i in worble_parsed) {
        for (e in worble_parsed[i]) {
            var letter = worble_parsed[i][e]["letter"];
            var status = worble_parsed[i][e]["status"];
            if (status == 0) { // blank
                finalAppend = `${finalAppend}<span class="worble worble-gray"> </span>`;
            } else if (status == 1) { // gray
                finalAppend = `${finalAppend}<span class="worble worble-gray">${letter}</span>`;
            } else if (status == 2) { // yellow
                finalAppend = `${finalAppend}<span class="worble worble-yellow">${letter}</span>`;
            } else if (status == 3) { // green
                finalAppend = `${finalAppend}<span class="worble worble-green">${letter}</span>`;
            }
        }
        finalAppend = `${finalAppend}<br><br>`;
    }
    appendInline(finalAppend);
}


function saveWorbleStats(restarted) {
    db(`[WORBLE STATS]: stats are being saved...`, "wb_green");
    if (worble_guesscount != 0) {
        worble_stats_games += 1;
        if (worble_stats_guesses == "" || worble_stats_guesses == undefined || worble_stats_guesses == null) {
            worble_stats_guesses["guesses"] = new Array();
            worble_stats_guesses["guesses"].push(worble_guesscount);
        } else {
            worble_stats_guesses.push(worble_guesscount);
        }
        
        worble_stats_currentstreak += 1;
        if (worble_stats_currentstreak > worble_stats_biggeststreak) {
            worble_stats_biggeststreak = worble_stats_currentstreak * 1;
        }

    } else {
        db("woob");
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
    
    db(`[WORBLE SETUP]: setup has been RUN`, "wb_green");
    worble_guesscount = 0;              // resets guess count (quite important)
    worble_save = new Array();          // resets worble save
    worble_displaysave = new Array();   // resets display save
    saveWorble();                       // save changes
    worbleStatus(true);                 // make it so that worble knows its not finished because the game literally just started
    worbleColourUpdate();               // updates colours just to make sure they're all good (doesnt hurt to check)

    if (custom_word != null || custom_word != undefined) {
        worbleWord(`${custom_word}`);   // sets to custom word
    } else {
        worbleWord(getWorbleWord());    // gets random word from word list 
    }
    
    
    
    
    db(`[WORBLE SETUP]: worble word that has been chosen is ${worble_word}`, "wb_green");
    if (restart == true) {
        db(`[WORBLE SETUP]: restart is set to true`, "wb_green");
        worble_startscreen = [
            `Worble game restarted!`,
            `Word length: ${worble_word.length} character(s)`
        ]
    } else {
        db(`[WORBLE SETUP]: restart is set to not true`, "wb_green");
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
    db(`[WORBLE GUESS]: guessing ${guess}`, "wb_green");
    db(`${worble_save}`);
    db(`[WORBLE GUESS]: before push: ${worble_save}`, "wb_green");
    worble_save.push(`${guess}`);
    db(`[WORBLE GUESS]: after push: ${worble_save}`, "wb_green");
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
        db(`[WORBLE SHARE]: parsing: ${currentword}`, "wb_green");

        var currentLine = "";
        for(i in currentletters) {
            var lettertm = currentletters[i];
            db(`[WORBLE SHARE]: parsing: ${lettertm}`, "wb_green");

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
    db(worble_share_finale, "wb_green");
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
        db(`[HISTORY INDEX]: nothing in command history.`, "weird purple");
        inHistory = false;
        commandIndex = 0;
        empty = true;
        beginning = false;
    } else if (commandIndex + moveamount < 0) {
        db(`[HISTORY INDEX]: reached the beginning of command history`, "weird purple");
        // if you move back to the current command (or into the negatives somehow)
        inHistory = false;
        commandIndex = 0;
        empty = false;
        beginning = true;
    } else if (commandIndex + moveamount >= histLen ) {
        db(`[HISTORY INDEX]: reached the end of command history`, "weird purple");
        // if you reach the end of the command history
        commandIndex = histLen - 1;
        inHistory = true;
        empty = false;
        beginning = false;
    } else if (commandIndex == 0 && inHistory == false) {
        db(`[HISTORY INDEX]: starting to go through the list`, "weird purple");
        currentCommand = shell.value;
        inHistory = true;
        empty = false;
        beginning = false;
    } else {
        db(`[HISTORY INDEX]: moving throughout the list`, "weird purple");
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


    db(`[HISTORY INDEX]: selected command: ${selected_command}, from index ${commandIndex}, current command: ${currentCommand}`, "weird purple");    

    return selected_command;


}

function historyPush() {
    // add command to the index
    db(`[COMMAND HISTORY PUSH]: pushing command "${shell.value}" to command history.`, "weird purple");
    commandHistory.unshift(`${shell.value}`);   // adds the command to the beginning of the array

}

function historyReset() {
    // reset the index to the last one in the array
    db(`[COMMAND HISTORY RESET]: resetting command history back to 0.`, "weird purple")
    commandIndex = 0;
    inHistory = false;
}

function replaceFromJson(string, json) {
    // replace every key with value from json in string
    var workingString = `${string}`;
    for (key in json) {
        console.debug(`${key}: ${json[key]}`);
        workingString = workingString.replaceAll(`${key}`, `${json[key]}`);
    }
    db(`translating finished, final message is "${workingString}"`, "magenta");
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
    db(`updated song info:\nsong name: ${song_name}\nsong artist: ${song_artist}\nsong album: ${song_album}\nsong art: ${song_art}`, "magenta");
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
    db("GENERATING TABLE!!", "orange");
    var use = table_themes["default"];
    var usename = "default";
    if (theme != undefined && theme != null && theme != "") {       // if it is set
        if (table_themes[theme]) {                                  // if it exists in themes
            use = table_themes[theme];                              // set the theme
            usename = theme;
        }
    }
    db(`using table theme '${usename}'`, "orange");
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
    //console.debug(table);
    for (i in table) {
        // for every column
        var cur_col = table[i];
        var col_con = cur_col["contents"];
        var cur_rows = 0;
        var curWid = cur_col["name"].length;
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
        //console.debug(curWid);
    }
    //console.debug("widths: ", col_widths);
    //console.debug("columns: ", columns);
    //console.debug("rows: ", rows);
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
            db(entry, "orange");
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

    debubgall(table_top);
    debubgall(table_middle);
    debubgall(table_bottom);
    //console.debug("raw table: ", raw_table);
    //console.debug(rows);
    for (let i = 0; i < rows + 1; i++) {
        if (i == 0) {
            final_table = `${table_top}\n`;
            debubgall(table_top);
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

    db(final_table, "orange");
    final_table += table_bottom;
    debubgall("FINAL:");
    //console.debug("widths: ", col_widths);
    //console.debug(final_table);
    //console.debug("columns: ", columns);
    //console.debug("rows: ", rows);
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

function rawSaveTheme(theme_tm) {
    var lowname = theme_tm["name"].toLowerCase();
    custom_themes[lowname] = theme_tm;
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
            //console.debug(key + " -> " + star_save[key]);
            // loopy
            var x = stars_save[key]["x"];
            var y = stars_save[key]["y"];
            var opacity = stars_save[key]["o"];
            try {
                stars_parse[y][x] = `<span id="CON_${key}" style="opacity: ${opacity * 0.01};">${stars_save[key]["t"]}</span>`;
            } catch (err) {
                db("oopy");
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
        mainlock = false;
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
        //console.debug(getIdTm([0, 1]));
        stars_status = true;
        let starTimer = setInterval(() => {
            document.getElementById("consoleinput").value = "press ESC to exit!";
            // here we have the code for the stars
            if (stars_status == true) {
                console.debug("stars!");
                var should_star = getRandomInt(0, 1); // if it should add a star
                //should_star = 1;
                //console.debug(should_star)
                if (should_star == 1) {     // if the random integer is 1
                    var rand_x = getRandomInt(0, canvas_width);     // get a random x coord
                    var rand_y = getRandomInt(0, canvas_height);    // get a random y coord
                    var twinkle_dur = getRandomInt(2, 12);           // get a random number from 2 to 6, that will be how many times the star remove twinkle will have to loop before its gone
                    db(`NEW GENERATED STAR COORDS: ${rand_x}, ${rand_y}`, "purple");
                    // "500": {"t": ".", "x": 20, "y": 20, "s": 10, "o": 100}
                    var idtm = getIdTm([rand_x, rand_y]);
                    if (stars_save[idtm]) {
                        // is existent
                        db("star value is existent!!", "purple");
                        if (stars_save[idtm]["t"] == ".") {
                            // already is a star
                            db("star is already existent as a star!", "purple")
                        } else {
                            db("replacing old star value!", "sizey");
                            stars_save[idtm] = {
                                "t": ".",                           // the text that should be inside the coordinate
                                "x": rand_x,                        // the x coordinate of the star
                                "y": rand_y,                        // the y coordinate of the star
                                "s": 100 / ( twinkle_dur + 1 ),     // the rate of which the opacity is changed
                                "o": 100,                           // the starting opacity
                            }
                            starTimers += 1;
                            var fadeTimer = setInterval(() => {
                                //console.debug(stars_save[idtm]["o"]);
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
                                    db(`${idtm} is at zero!!`, "sizey");
                                    stars_save[idtm]["o"] = 0;
                                    stars_save[idtm]["t"] = " ";
                                    clearInterval(fadeTimer);
                                }
                                parseStars();
                            }, star_fade_speed);
                        }
                    } else {
                        db("making new star value", "blue1");
                        stars_save[idtm] = {
                            "t": ".",                           // the text that should be inside the coordinate
                            "x": rand_x,                        // the x coordinate of the star
                            "y": rand_y,                        // the y coordinate of the star
                            "s": 100 / ( twinkle_dur + 1 ),     // the rate of which the opacity is changed
                            "o": 100,                           // the starting opacity
                        }
                        starTimers += 1;
                        var fadeTimer = setInterval(() => {
                            //console.debug(stars_save[idtm]["o"]);
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
                                db(`${idtm} is at zero!!`, "blue1");
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
                mainlock = true;
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




function askInput(scooby_doo, end) {   // ask for a text input from console thing
    listening_input = true;
    ask_do = scooby_doo;
}
// example!!

//askInput(() => { displayAnim(`your name is ${ask_return}!!`, 7); } );


/*

24.606947	29.421663	\mHour hand's gone from two to three, now four
30.214505	31.929928	You barely slept all night

↖
*/

/*
HOW TO DO THE FANCY LYRICS:

go into audacity, bring in the audio track, make a new label track, add all the labels in the correct lyric places, and then go to file > export > label tracks, export the .txt file to DONT_PUSH/
then copy the contents of that into test_lyr, go to the inspect menu console, then run compileLyrics();,

press enter, and swap back to the page within 2 seconds so it'll actually copy it to your clipboard, then boom you have your lyrics (tm)

    ALSO USE \\n FOR NEWLIENS!!!

*/

var test_lyr = `20.799430	22.793732	\\nWell he collapsed with Stevens-Johnson Syndrome 
22.793732	23.763933	on the E.R. floor
23.763933	24.566445	\\nPanic Attacked, 
24.566445	25.333023	anaphylactic, 
25.333023	26.135535	and ataxic
27.027880	28.435270	\\nWell the way he spun his butterfly 
28.435270	29.863622	risked all his six phalanges
29.887577	32.208274	\\nRoman candles at both ends of his synapses
32.738291	33.178475	\\nAnd 
33.178475	33.822281	the method with which 
33.822281	35.088932	he recycled his humours
35.088932	36.664011	\\nTrojan Horse'd his blood-brain barrier 
36.664011	38.095357	and raised the LD-50, 
38.119313	38.403785	yes, 
38.460679	38.787074	yes
39.002674	39.966886	\\nAnd through flight-or-fight 
39.966886	40.438512	revelation 
40.438512	41.850394	shame, the BlackBoxWarrior
41.850394	44.087246	\\nHe skipped this town and headed straight down history
44.128419	44.228733	\\n\\n
45.146531	46.325595	Shields himself from reason 
46.325595	47.042765	in a Kevlar 
47.042765	48.135738	baby-blue Tuxedo
48.135738	49.564090	\\nQuilted from the finest fibers, 
49.564090	51.004419	flesh, and fiberglass, and flowers
51.007413	52.142309	\\nHis ego a mosquito, 
52.417798	53.163415	evil incarnate/
53.163415	54.025816	good incognito
54.025816	54.840306	\\nPops placebos 
54.840306	55.397273	for libido, 
55.397273	55.963223	screaming 
55.963223	56.900485	\"bless the torpedoes\  "
56.910217	56.961123	\\n\\n
56.972352	57.454458	For what? 
57.628136	58.071314	For what? 
58.358781	59.568538	For what it's worth
59.829055	61.284356	\\nIf it was gonna kill you, boy, 
61.284356	62.446201	it would have by now
62.860932	63.299619	\\nFor what? 
63.575108	64.117103	For what? 
64.314736	65.464604	For what it's worth
65.563421	66.952844	\\nThere's no more looking back, 
66.952844	68.438090	it's looking up or looking down
80.128412	80.266156	\\n\\n
80.396415	81.284269	Well, he was wearing 
81.284269	82.116725	stolen rubber shoes 
82.116725	83.862488	and wrapped a poison ivy noose
83.901415	85.737011	\\nAround his Lotus jugular when they came
86.614384	87.695380	\\nWell they found him with a map 
87.830130	88.794342	to every victim 
88.794342	89.504026	of his love
89.504026	90.231677	\\nAnd a tattoo 
90.231677	92.208012	of a blue jay on his face
92.597290	94.588597	\\nAnd he waited for his vital signs to lie 
94.588597	95.705526	and let a flatline cry
95.705526	97.546362	\\nA hymn out in Hungarian Harmonic
98.283745	98.452931	\\n\\n
98.558486	99.571357	But he cocked his noggin, 
99.571357	100.514608	through his stoma, sang 
100.514608	101.472831	\"For auld Lang Syne
101.472831	103.098816	\\nHappy birthday to the succulents, 
103.098816	104.374451	I'll die your hydroponics\"
104.464284	104.688868	\\n\\n
104.697851	106.135186	His rib cage was a hornet's nest, 
106.314852	107.024536	palpatations 
107.024536	107.656365	set the beat
107.656365	108.345088	\\nHis vagus nerve 
108.345088	108.701427	a Turk's 
108.701427	109.027822	head knot, 
109.027822	109.737506	an axle hitch, 
109.737506	110.572956	a Carrack bend
110.698723	112.037241	\\nHe wondered if Christ-Consciousness 
112.037241	113.510509	would charge a cancellation fee
113.510509	114.292060	\\nAuf wiedersehen, 
114.477715	115.004738	au revoir, 
115.025699	116.504956	he gripped his wits right by their ends
116.504956	116.551370	\\n\\n
116.551370	117.030482	For what? 
117.269289	117.841228	For what? 
118.008169	119.232898	For what it's worth
119.496409	120.900805	\\nIf it was gonna kill you, boy, 
120.900805	122.191411	it would have by now
122.484867	122.946012	\\nFor what? 
123.260429	123.703607	For what? 
123.919207	125.239759	For what it's worth
125.239759	126.653138	\\nThere's no more looking back, 
126.653138	128.129400	it's looking up or looking down
165.790562	166.239729	\\n\\n
166.557141	166.988341	Hello, 
167.009302	167.431519	welcome. 
167.647119	168.446637	Why don't you take a seat? 
168.491554	169.069482	Get comfortable, 
169.069482	169.512660	relax, 
169.620460	170.590661	take a\\nsecond if you need to. 
171.869290	172.587957	Now what's bothering you? 
173.546180	174.720004	Well, why don't we start\\nat the beginning?
175.085326	175.300926	\\n\\n
175.393754	175.980666	Growing up, 
175.980666	176.753233	how was your relationship 
176.753233	177.361106	with the fundamentals 
177.361106	178.334301	of conscious\\nexistence? 
178.582841	179.277552	DId you have xenon 
179.277552	179.750675	orchid sinews 
179.750675	180.355553	spilling down 
180.355553	180.960432	the outer center\\n
180.960432	181.463499	of your blooming 
181.463499	181.710541	Escher/
181.712038	182.304938	Mandelbrot head? 
182.858911	183.110445	And 
183.110445	183.859056	how about claustrophillic\\n
183.859056	184.769368	tendrils clapping caskets 
184.769368	185.143674	closed on 
185.143674	185.817425	seven-knuckled thumbs, 
185.817425	186.473209	did you get along well 
186.473209	187.236793	with the Gideon Bugler 
187.236793	187.775793	pineal glands, 
187.775793	188.431577	your projector eyes 
188.431577	189.240078	casting\\nsci-fi's 
189.240078	190.377968	on your STR'd strands? 
190.907985	191.587725	Tell me about your nerve 
191.587725	192.261475	to steal nerves 
192.261475	193.620954	of\\nsteel from under Bacchus' bloody nose. 
193.638921	195.196033	Did Nimbian Himbas tie-die you, \\n
195.196033	196.902868	Your ears pierced with a Phineas Gage flagpole, 
196.905863	197.947930	did you die before your day?\\n
198.421053	199.118759	Thursday traction, 
199.118759	200.005116	tuesday titration. 
200.005116	200.565077	My hope is to 
200.565077	201.020233	assess 
201.020233	201.544261	through my\\n
201.544261	202.481523	objective report of your 
202.481523	203.397824	subjective conjecture 
203.397824	204.451870	whether this proprietary blend\\n
204.451870	205.544843	of expertise and seasoning 
205.544843	206.359332	works as well as this 
206.359332	206.925283	transorbital 
206.925283	207.512195	ice pick\\n
207.859551	208.727940	Holistic Ballistics, 
208.727940	209.608308	got a better idea? 
209.608308	211.021687	It's about the best we could come\\nup with, 
211.021687	211.860132	you think ideas spread 
211.860132	212.488966	because they're good?
212.674622	212.911183	No, 
212.911183	213.761606	they\\nspread because people 
213.761606	214.264673	like them. 
214.381456	215.471435	So here we are once again. 
215.663080	216.220047	Holding, 
216.309880	216.642264	as 
216.642264	217.073464	it\\nwere,
217.232170	217.735237	a mirror 
217.875976	218.124515	up 
218.124515	218.522777	to your 
218.816233	219.193533	mirror
219.501961	219.822367	\\n
219.936156	220.502106	i guess it's just 
220.502106	221.298629	something people do
221.604063	221.801697	\\n\\n
221.975374	223.888826	A bloody knife to split your infrastructure, 
223.996626	225.442944	wine to rev your motor function
225.532778	227.200685	\\nCoital machinations of the dead
228.260719	229.757943	\\nWell you mainline your animus, 
229.757943	230.440677	karate chop 
230.440677	230.740121	your 
230.740121	233.432129	abacus\\nAnd learn to be an animal instead
234.108874	235.752826	But I never did think you better than this, 
235.752826	237.016483	your modus operandi
237.016483	237.824983	\\nCauses Nazi/
237.824983	239.202429	Skoptzyism and suicide
240.028897	243.059277	\\nWhy to thine own self be true when it is you who are the problem
243.059277	245.376979	\\nNot the things you do but something sick inside
246.341191	247.011947	\\nLithium 
247.011947	247.902795	and Dialectics, 
247.902795	249.323661	boy you really is defective
249.323661	250.862806	\\nCBT don't seem effective 
250.862806	252.318108	for that Cluster B, accept it
252.318108	253.683576	\\nOffer up your innocence, 
253.857254	255.108932	please ignore the side effects
255.108932	255.923422	\\nYou've lost your mind 
255.923422	256.420500	and almost 
256.420500	257.354768	lost your life before, 
257.354768	258.112363	so you'll be fine
258.112363	258.139313	\\n\\n
258.139313	258.573508	For what? 
258.483674	258.920864	\\n(For what?)
258.866964	259.313136	\\nFor what? 
259.232286	259.711398	\\n(For what?)
259.582637	260.867254	\\nFor what it's worth
261.145738	262.595050	If it was gonna kill you, boy, 
262.595050	263.774863	it would have by now
264.074307	264.556413	\\nFor what?
264.475563	264.942697	\\n(For what?)
264.801958	265.278075	\\nFor what?
265.203214	265.652381	\\n(For what?)
265.556559	266.760326	\\nFor what it's worth
266.760326	267.619733	\\nThere's no more 
267.619733	268.053928	looking back
268.221617	268.931301	\\nAnd why would you 
268.931301	269.584090	want to look back?
269.748785	270.084163	\\nI mean,
270.156030	270.497396	it's no 
270.497396	271.072330	good looking back
271.072330	271.527486	\\nSo try 
271.527486	271.841903	to look 
271.841903	272.386893	forward 
272.386893	272.815099	now
273.042677	273.518794	\\nFor what?
273.387038	273.905077	\\n(For what?)
273.791288	274.243450	\\nFor what?
274.087739	274.599789	\\n(For what?)
274.494983	274.977089	\\nFor what 
275.075906	275.366368	it's 
275.468179	275.830507	worth
276.016163	277.471464	\\nIf they were gonna get you, boy, 
277.471464	278.220076	they would have 
278.220076	278.793512	by now
278.983660	279.402882	\\nFor what?
279.371441	279.874508	\\n(For what?)
279.651421	280.121550	\\nFor what?
280.102086	280.540772	\\n(For what?)
280.507833	281.624762	For what it's worth
281.699623	283.011191	\\nThere's no more looking back,
283.098030	283.672964	it's looking up 
283.861614	284.352704	or looking
284.415587	285.526527	down`;

function compileLyrics() {
    setTimeout(() => {
        var final = "";
        var spit = test_lyr.split("\n");
        final += "[";
        for (i in spit) {
            var lyr_lin = spit[i];
            console.debug("lyric line: ", lyr_lin);
            var lyr_spit = lyr_lin.split("\t");
            var time1 = lyr_spit[0].split(".");
            var time1_1 = `${time1[1]}`.slice(0, -3)
            var time1_final = `${time1[0]}${time1_1}`;      // can i just say i have no idea what's going on here.... and i wrote this
            var time2 = `${lyr_spit[1]}`.split(".");
            var time2_1 = `${time2[1]}`.slice(0, -3)
            var time2_final = `${time2[0]}${time2_1}`;
            var line = `{"text": "${lyr_spit[2]}", "dur": [${time1_final}, ${time2_final}]},`;
            final += `
`;
            final += line;
        }
        final += `
`;
        final += "]";
        console.log(final)
        copyclip(final);
        return final
    }, 2000);
}

//  .M.               .%MMMMMM .%MMMMMMM%. +MM.    .MM+ +MMMMMMM%. mmmmmmmmmm +M         +MMMMMMMMI             +M         MM    MM +MMMMMMM%. mmmmmmmmmm  .%MMMMMM .%MMMMMMM%.              .M.  
// .M'M.             .%MMMMMMM %MM%' '%MM% MMMM.  .MMMM MM+'  '+M% MMMMMMMMMM MM         MMMMMMMMMI             MM         MM.  .MM MM+'  '+M% MMMMMMMMMM .%MMMMMMM %MM%' '%MM%             .M'M. 
// M' 'M             %MM%'     MM'     'MM MM'MM  MM'MM MM      MM     MM     MM         MM+                    MM         'MM  MM' MM      MM     MM     %MM%'     MM'                     M' 'M 
//                   MMM'      MM       MM MM MM..MM MM MM+.  .+M%     MM     MM         MM........             MM          MM..MM  MM+.  .+M%     MM     MMM'      MM%.......                    
//                   MMM       MM       MM MM 'MMMM' MM MMMMMMMM%'     MM     MM         MMMMMMMMMM             MM          'MMMM'  MMMMMMMM%'     MM     MMM        %MMMMMMM%.                   
//                   MMM.      MM       MM MM  'MM'  MM MM             MM     MM         MM''''''''             MM           'MM'   MM  'MM.       MM     MMM.        ''''''%MM                   
//                   %MM%.     MM.     .MM MM        MM MM             MM     MM         MM+                    MM            MM    MM   'MM.      MM     %MM%.             .MM                   
//                   '%MMMMMMM %MM%. .%MM% MM        MM MM         mmmmMMmmmm MM........ MMMMMMMMMI             MM........    MM    MM    'MM. mmmmMMmmmm '%MMMMMMM %MM%. .%MM%                   
//                    '%MMMMMM '%MMMMMMM%' +M        M+ +M         MMMMMMMMMM +MMMMMMMM% +MMMMMMMMI             +MMMMMMMM%    MM    +M     'MM MMMMMMMMMM  '%MMMMMM '%MMMMMMM%'                   



function dogEscape() {      // used to exit dog (how could you??)
    doglock = false;
    mainlock = true;
    dog = false;
    shell.value = "";
    dogsong.pause();
    clearScreen();
    clearInterval(dog_timer);
    if (dog_pets == 1) {
        displayAnim(`you pet the dog ${dog_pets} time!`);
    } if (dog_pets == 0) {
        displayAnim(`you didnt pet the dog at all :(`);
    } else if (dog_pets != 1 && dog_pets != 0) {
        displayAnim(`you pet the dog ${dog_pets} time(s)!`);
    }    
}
function dogInteract() {    // function that is run every time the dog is interacted with
    doggy();
    dog_pets += 1;
    var divy = `${dog_pets / 100}`;
    if (divy.replace(".", "") == divy) {    // IS divisible because there are no decimal points
        doggy(true);
    } else if (dog_pets == 20 || dog_pets == 50) {
        doggy(true);
    }
    if (dog_pets >= 100) {
        dog_outfit = "sombrero";
    }                                                   // add if statements here for other level-ups
    if (dog_pets == 1) {
        dog_petelem.innerHTML = `${dog_pets} pet`;
    } else {
        dog_petelem.innerHTML = `${dog_pets} pets`;
    }
    // random chance of a wag
    var rand = getRandomInt(1,5);
    //rand = 1;
    if (rand == 1) {
        dog_anim_index = 0;
        dog_anim_len = puppy[dog_outfit]["wag"].length;
        dog_anim_go = true;
    }
}


function startDog() {
    // DOG!!!!
    doglock = true;
    mainlock = false;
    dog = true;
    consol.innerHTML = `<span id="dog">hehe</span><br><span id="pets">no pets</span>`;
    dog_elem = document.getElementById("dog");
    dog_petelem = document.getElementById("pets");
    dogtime = 0;
    dog_pets = 0;
    dog_elem.innerHTML = puppy[dog_outfit]["idle"];
    dog_timer = setInterval(() => {
        // dog animations here
        db(`current time in game: ${dogtime}`, "orange");
        shell.value = "press SPACE or ENTER to pet! press ESC to exit!";
        if (dog_anim_go == true) {
            if (dog_anim_index < dog_anim_len) {
                dog_elem.innerHTML = puppy[dog_outfit]["wag"][dog_anim_index];
                dog_anim_index += 1;
            }
        }
        dogtime += dog_speed;
    }, dog_speed);
    dogsong.currentTime = 0;
    dogsong.play();
}

function inColourReg(colour) {  // checks if a colour is in the colour registry
    if (internal_colours[colour]) {
        return true
    } else {
        return false
    }
}

function ta_save() {
    localStorage.setItem("text adventures", JSON.stringify(textadventures_saves));
}

function ta_point(point) {
    textadventures_saves[cur_ta].point = `${point}`;
}



function setShell(text) {
    if (text) {
        shell.value = `${text}`;
        return `${text}`;
    } else {
        shell.value = "";
        return "";
    }
}

function keyval(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function check_case(letter) {
    if (typeof letter == 'string') {
        if (letter == letter.toUpperCase()) {
            return "upper"
        } else if (letter == letter.toLowerCase()) {
            return "lower"
        } else {
            return undefined
        }
    } else {
        return undefined
    }
}


function crypt(direction, text, cipher) {
    
    
    var maptm_og = new Object();
    var str = `${text}`;
    var maptm = new Object();

    if (direction == "de") {
        maptm_og = ciphers[cipher]["code"];
        for (i in maptm_og) {
            var val = maptm_og[i];
            maptm[val] = i;
        }
    } else {
        maptm = ciphers[cipher]["code"];
    }

    db(maptm, "sizey");

    db(`STIRR'${str}'`, "sizey");

    var re = new RegExp(Object.keys(maptm).join("|"),"gi");         // dont even ask because i don't know either
    str = str.replace(re, function(matched){
        db(matched);
        debubgall(first);
        
        var result = "";

        matched = matched.toLowerCase();

        if (maptm[matched]) {
            result = `${maptm[matched]}`.toUpperCase();
        } else {
            result = matched;
        }

        db(result)
        return result
    });

    return str

}



function accspace(text) {
    var textsplit = text.split("");
    var final = `${text}`;
    if (textsplit[textsplit.length - 1] == " ") {
        textsplit.pop();
        final = textsplit.join("");
    }
    return final
}



// generate_image("colour_test.png", "exact", {"width": 50, "height": 50}, [true])

// displayImage(process_raw_image(test_image), 20);


// so you generate image, plug the generated image into process raw image, then plug the processed image into displayImage and the boom!!

/*
function generate_image(url, interpol, scale, shade) {
    
    //interpol: either 'exact' or 'fit'
    //    'exact' means that 1 pixel in the image will be 1 unicode block character
    //    'fit' means that since each block character is twice as tall as is wide, then each character will count as 2 pixels high
    //url: the image url
    //scale: a JSON object for width and height.
    //    'width'  is... the image width
    //    'height' is the image height
    //    
    //    if it's just one of those, for example, only 'width', then it will automatically calculate the height, using the same aspect ratio as the initial image.
    //    if both of them are declared, it will do the custom aspect ratio of whatever width and height ™
    //shade: an array
    //    shade[0]: if it should use ░
    //    shade[1]: if it should use ▒
    //    shade[2]: if it should use ▓
    

    // variable setup

    var img = document.getElementById("image-load");
    var ctx = img_canvas.getContext('2d');
    var img_og_width = 0;
    var img_og_height = 0;
    var img_width = 0;
    var img_height = 0;
    var img_og_aspectratio = 1;
    var img_aspectratio = 1;
    img.setAttribute('crossOrigin', '');
    
    img.src = url;

    img.onload = () => {                // when the image finishes loading then run all this stoof
        img_og_width = img.width;
        img_og_height = img.height;
        img_width = img.width;          // set all the heights n stuff
        img_height = img.height;

        // calculate aspect ratio

        img_og_aspectratio = img_og_width / img_og_height
        


        // set the fancy widths n stuff

        if (scale["width"] && scale["height"]) {            // if they set both the width and height
            img_width = scale["width"];
            img_height = scale["height"];
        } else if (scale["width"] && !scale["height"]) {    // just width
            img_width = scale["width"];
            img_height = img_width / img_og_aspectratio;
        } else if (!scale["width"] && scale["height"]) {    // juts height
            img_height = scale["height"];
            img_width = img_height * img_og_aspectratio;
        } else {                                            // it makey the oopsy
            img_width = 20;
            img_height = 20;
        }

        img_aspectratio = img_width / img_height;           // get new aspect ratio

        db(`IMG INFO:\nog width: ${img_og_width}\nog height: ${img_og_height}\nwidth: ${img_width}\nheight: ${img_height}\nog aspect ratio: ${img_og_aspectratio}\naspect ratio: ${img_aspectratio}`);

        img_canvas.width = img_width;
        img_canvas.height = img_height;

        //new thumbnailer(canvas, img, 188, 3);

        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(img, 0, 0, img_width, img_height); // Or at whatever offset you like



        dada = ctx.getImageData(0, 0, img_width, img_height);
    }
   
} */


function process_raw_image(raw_image) {
    var final_html = new Array();

    for (i in raw_image) {
        for (e in raw_image[i]) {
            var pixel = raw_image[i][e];
            final_html.push(`<span style="color: ${pixel["c"]};">${pixel["s"]}</span>`);
        }
        final_html.push("\n");
    }

    return final_html
}


function num_2dig(number) {
    if (`${number}`.length == 1) {
        return `0${number}`
    } else {
        return `${number}`
    }
}

function parse_date() {
    // fancy date stoof

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    // getting all the values

    var today = new Date();
    var td_year = today.getFullYear();
    var td_month = today.getMonth();
    var td_day = today.getDate();
    var td_hour = today.getHours();
    var td_minute = today.getMinutes();
    var td_second = today.getSeconds();
    var td_ampm = "UNPARSED";

    db(`current date: ${td_day}-${td_month}-${td_year} at ${td_hour}:${td_minute}:${td_second} ${td_ampm}`, "sizey");

    // parsing of variables

    td_month = months[td_month];


    // ====[ i stole this chunk from my vhs website lmao ]====

    if (td_hour < 12) {
        // AMPM
        if (td_hour == 0) {
            td_hour = 12;
        } else {
            td_hour = td_hour;
        }
        td_ampm = "AM";
    } else if (td_hour >= 12) {
        // PM
        td_hour = td_hour - 12;
        td_ampm = "PM";
    }
    // end of chunk stolen from myself
    
    // adding 0's to any number that is not in the double digits
    td_hour = num_2dig(td_hour);
    td_minute = num_2dig(td_minute);
    td_second = num_2dig(td_second);



    



    db(`parsed date: ${td_day}-${td_month}-${td_year} at ${td_hour}:${td_minute} ${td_ampm}`, "sizey");

    return {"day": `${td_day}`, "month": `${td_month}`, "year": `${td_year}`, "hour": `${td_hour}`, "minute": `${td_minute}`, "second": `${td_second}`, "ampm": `${td_ampm}`}
}

function yes_no(input) {            // check if it's a yes or no, using an advanced technology of different known words
    if (known_words["yes"].indexOf(input) > -1) {   // it's yes
        return true
    } else if (known_words["no"].indexOf(input) > -1) {   // it's no
        return false
    } else {
        return undefined
    }
}

function object_empty(obj) {
    if (Object.keys(obj).length == 0) {
        return true
    } else {
        return false
    }
}

function cut_string(str, wid) {
    var in_sting = str.replaceAll(`"`, `\\"`);
    return eval(`"${in_sting}".match(/.{1,${wid}}/g);`);
}


function make_note_vis(note_name) {
    var nt = notes[note_name];
    // view the note!!
    var cre_date = `${nt["date created"].day} ${nt["date created"].month} ${nt["date created"].year}, ${nt["date created"].hour}:${nt["date created"].minute} ${nt["date created"].ampm}`
    var mod_date = `${nt["date modified"].day} ${nt["date modified"].month} ${nt["date modified"].year}, ${nt["date modified"].hour}:${nt["date modified"].minute} ${nt["date modified"].ampm}`

    var vw_title = [`${nt.name}`, `${cre_date}`];
    var vw_title2 = [`${nt.author}`, `${mod_date}`];

    var widd = display_charsize[0] - 10;
    var hidd = display_charsize[1];
    //widd = widd - 20;
    db(widd, "sizey");
    var t1_ln = `"${nt.name}" created @ ${cre_date}`.length;
    var t2_ln = `by ${nt.author} modified @ ${mod_date}`.length;
    var t1_sp = widd - t1_ln;
    var t2_sp = widd - t2_ln;
    if (t1_sp < 0) {
        t1_sp = 0;
    }
    if (t2_sp < 0) {
        t2_sp = 0;
    }
    var di_t1 = `"${nt.name}"${" ".repeat(t1_sp)} created @ ${cre_date}`;
    var di_t2 = `by ${nt.author}${" ".repeat(t2_sp)} modified @ ${mod_date}`;
    var di_t3 = cut_string(nt.contents, widd).join("\n");
    var note_full = `\n${"-".repeat(widd)}\n${di_t1}\n${di_t2}\n${"-".repeat(widd)}\n\n${di_t3}`;
    return note_full
}

// WIP CODE!!!!
function check_json(in_json, template_json) {   // checks to see if in_json has the same structure as template_json
    var out_obj = {
        "valid": false,     // if it's valid json
        "reason": "",       // if it's invalid, it'll say what's wrong with the JSON
        "extra": false      // if there are any extra JSON keys
    }
    var crap = false;
    function check_inner(chunk) {
        for (key in chunk) { // for every key in json
        }
    }
    for (key in in_json) { // for every key in main json
        var chunk = in_json[key];
        if (typeof chunk == 'object' && Array.isArray(chunk) == false) {    // if it's an object but not an array (if it's json)

        }
    }
    return out_obj
}

function askNotificationPermission() {
    // function to actually ask the permissions
    function handlePermission(permission) {
        // set the button to shown or hidden, depending on what the user answers
        if(Notification.permission === 'denied' || Notification.permission === 'default') {
            notificationBtn.style.display = 'block';
        } else {
            notificationBtn.style.display = 'none';
        }
    }
  
    // Let's check if the browser supports notifications
    if (!('Notification' in window)) {
        db("This browser does not support notifications.", "lred");
    } else {
        if(checkNotificationPromise()) {
            Notification.requestPermission()
            .then((permission) => {
            handlePermission(permission);
        })
        } else {
            Notification.requestPermission(function(permission) {
                handlePermission(permission);
            });
        }
    }
}
function checkNotificationPromise() {
    try {
        Notification.requestPermission().then();
    } catch(e) {
        return false;
    }

    return true;
}

function send_notif(in_json) {
    try {
        if (in_json) {
            if (!in_json.title) {
                in_json.title = "CONSOLE";
            }
            if (!in_json.text) {
                in_json.text = "this is a notification!!!";
            }
            if (!in_json.icon) {
                in_json.icon = "icon.png";
            }
            var notification = new Notification(in_json.title, { body: in_json.text, icon: in_json.icon });
        } else {
            erry("you didnt input any notification json you idiot!!");
        }
    } catch (err) {
        console.err("no")
    }
    
}

function moyai() {
    console_id += 1;
    displayAppend("\n", console_id);
    displayImage(process_raw_image(moyai_img), 0);
}

function parseBool(boolStr) {   // parse a true or false in dtring form into a bool form for easy™
    if (boolStr == 'true' || boolStr == true) {
        return true
    } else if (boolStr == 'false' || boolStr == false) {
        return false
    } else {
        return undefined
    }
}


function convert_asciifont(font) {
    var out = "";
    for (i in font) {
        var he = String.fromCharCode(i);
        if (he == "\\") {
            he = "\\\\";
        } else if (he == '"') {
            he = "\\\"";
        }
        if (i == 0) {
            out += `"${he}":[
`;
        } else {
            out += `,
"${he}":[
`;
        }
        
        for (e in font[i]) {
            // for each line in ascii character
            if (e == 0) {
                out += `    "${`${font[i][e]}`.replaceAll("\\", "\\\\")}"`;
            } else {
                out += `,
    "${`${font[i][e]}`.replaceAll("\\", "\\\\")}"`;
            }
        }
        out += `
]`;
    }
    return out
}

function strip_symbols(string) {
    // strip any symbols from a string
    return string.replace(/[^a-zA-Z0-9 ]/g, '');
}

// snake game


function snake_init() {
    // generate new variables n stuffs
    db(`[SNAKE]: new snake game shall be generating...`);
    snk_save = new Array();
    snk_limit = snk_set.size;
    mainlock = false;
    snakelock = true;
    document.getElementById("input-div").style.display = "none";
    clearScreen();
    snk_save = [[0,0]]; // set the beginning tm
    snk_extra.dir = 'right';
    snk_dir = [0, 1];
    snk_speed = snk_set.speed;

    var he = new Array();
    var ha = new Array();
    for (let i = 0; i < snk_set.size; i++) {
        he.push(".");
    }
    for (let i = 0; i < snk_set.size; i++) {
        ha.push([...he]);
    }
    
    snk_extra.template_board = ha;

    genFood();

    snk_int = setInterval(snake_tick, snk_set.speed);
    db(`[SNAKE]: finished generating and started the snake tick thingy`);
}


function snake_end() {

    snakelock = false;
    mainlock = true;
    document.getElementById("input-div").style.display = "";
    shell.focus();
    clearInterval(snk_int);

}

function snake_display() {
    try {
        var le_obama = "";
        var he = new Array();
        var la_obama = new Array();
        for (let i = 0; i < snk_set.size * 2; i++) {
            he.push(".");
        }
        for (let i = 0; i < snk_set.size; i++) {
            la_obama.push([...he]);
        }

        for (i in snk_save) {
            var cord = snk_save[i];
            //db(`cord: ${cord}`);
            la_obama[cord[0]][cord[1]] = "#";
        }

        la_obama[snk_food[0]][snk_food[1]] = "@";

        for (i in la_obama) {

            for (e in la_obama[i]) {
                le_obama += la_obama[i][e];
            }
            le_obama += "\n";
        }
        return le_obama;
    } catch (err) {
        bluescreen_page({"msg": err.message});
    }
}

function indexThing(cords) {
    var he = false;
    for (i in snk_save) {
        var sav = snk_save[i];
        if (sav[0] == cords[0] && sav[1] == cords[1]) {
            he = true;
        }
    }
    return he
}

function genFood() {
    var got = false;
    
    while (got == false) {

        var gen_cords = [getRandomInt(0, snk_set.size - 1), getRandomInt(0, snk_set.size - 1)];

        console.log(gen_cords)

        if (indexThing(gen_cords) == false) {

            snk_food = [...gen_cords];  // set da food

            got = true;
        }

    }

}


function snake_tick() {
    // run every snake tick

    try {
        // check cord
        var snk_len = snk_save.length;
        var cur_cord = snk_save[snk_len - 1];
        var new_cord = [ cur_cord[0] + snk_dir[0], cur_cord[1] + snk_dir[1] ];
        var end_screen = false;
        var end_reason = "";
        var len_snek = true;

        if (snk_extra.dir2 == 'left') {
            snk_dir = [0, -1];
            snk_extra.dir = 'left';
        } else if (snk_extra.dir2 == 'up') {
            snk_extra.dir = 'up';
        } else if (snk_extra.dir2 == 'right') {
            snk_extra.dir = 'right';
        } else if (snk_extra.dir2 == 'down') {
            snk_extra.dir = 'down';
        }
        

        db(`\nold cords: ${cur_cord}\nnew cords: ${new_cord}\ndir: ${snk_dir}`);

        if (new_cord[0] == snk_food[0] && new_cord[1] == snk_food[1]) {

            db("food found!");
            genFood();      // generate new food
            len_snek = false;

            if ((snk_len / 4) == parseInt(snk_len / 4)) {   // whole numby
                snk_speed = (snk_speed * 0.25) + 10;
                clearInterval(snk_int);
                snk_int = setInterval(snake_tick, snk_speed);
            }

        }

        
        if (indexThing(new_cord) == true) {
            end_screen = true;
            end_reason = "hit snake";
        } else if (new_cord[0] > -1 && new_cord[1] > -1 && new_cord[0] < snk_set.size && new_cord[1] < snk_set.size * 2) {   // within the board

            snk_save.push(new_cord);

        } else {    // you hit the edge
            end_screen = true;
            end_reason = "hit edge";
        }


        if (end_screen == true) {

            snake_end();

            var snk_len = snk_save.length;
            displayAnim(`YOU LOSE! your snake length was ${snk_len}! reason: '${end_reason}'`, 7);

        }

        if (len_snek == true) {
            snk_save.shift();
        }


        console.log(snk_save);
        setScreen(snake_display());
    } catch(err) {
        bluescreen_page({"msg": err.message});
    }
}

db("snake init finished...", "init");


// GAME O' LIFE TM


function gol_start() {
    // start game of life
    // generate new variables n stuffs
    db(`[GOL]: new game of life shall be generating...`);
    gol_save = new Array();
    mainlock = false;
    gol_lock = true;
    document.getElementById("input-div").style.display = "none";
    clearScreen();
    gol_gen = 0;

    gol_extra.width = gol_set.size;
    gol_extra.height = gol_set.size;
/*
    ##
    # #

*/
    debubgall("ee");
    gol_save = new Array();

    for (let i = 0; i < gol_extra.height; i++) {
        for (let e = 0; e < gol_extra.width; e++) {
            debubgall("a");
            var is_cell = getRandomInt(gol_chance[0], gol_chance[1]);
            debubgall(is_cell);
            var cord = [i, e];
            if (is_cell == 0) {
                gol_save.push(cord);
            }
        }
    }
    db(gol_save);

    //gol_save = [[0, 0], [1, 0], [0, 1], [1, 2]]; // set the beginning tm
    
    
    clearInterval(gol_int);
    gol_display();
    gol_int = setInterval(gol_tick, gol_set.speed);
    db(`[GOL]: finished generating and started the game of life tick thingy`);

}

function gol_end() {
    // end game of life
    gol_lock = false;
    mainlock = true;
    document.getElementById("input-div").style.display = "";
    shell.focus();
    clearInterval(gol_int);

}

function gol_display() {
    // display game of life save
    var disp = new Array();
    var fin = "";
    for (let i = 0; i < gol_extra.height / 2; i++) {
        disp.push([]);
        for (let e = 0; e < gol_extra.width; e++) {
            disp[i].push(gls);
        }
    }
    // generated empty array
    for (i in gol_save) {
        var h = gol_save[i][0];
        var w = gol_save[i][1];
        var short_h = parseInt(((h - 1) / 2) + 0.9);
        debubgall(`save: [${gol_save[i]}]\ntop: ${h}\nleft:${w}\nshort top: ${short_h}`);
        if (disp[short_h][w] == gls) { //if its empty
            var level = h - short_h;
            if (level == 0) {
                disp[short_h][w] = "▀";
            } else {
                disp[short_h][w] = "▄";
            }
        } else {
            disp[short_h][w] = "█";
        }
    }
    // parsed cell points into the ascii blocks (including meshing them into the half half pixel ones ™)
    for (i in disp) {
        for (e in disp[i]) {
            fin += `${disp[i][e]}`;
        }
        fin += `\n`;
    }
    return fin
}

function make_alcells() {
    var cells = new Array();
    for (i in gol_save) {
        cells.push(`${gol_save[i][0]}${gol_save[i][1]}`);
    } // make a thing
    return cells
}
function make_dcells() { // makes a list of all dead cells
    var dcells = new Array();
    var h_index = 0;
    var w_index = 0;
    var cells = make_alcells();
    for (let i = 0; i < gol_extra.height; i++) {
        for (let e = 0; e < gol_extra.width; e++) {
            if (cells.indexOf(`${h_index}${w_index}`) < 0) { // if it doesnt exist as a cell
                dcells.push([h_index, w_index]);
            }
            w_index += 1;
        }
        h_index += 1;
        w_index = 0; // reset width for next line
    }
    return dcells
}

function check_cell(cell) {
    var h = cell[0];
    var w = cell[1];
    var nei = 0;
    debubgall(`[GOL]: checking cell ${h} ${w}`);
    var cells = make_alcells();
    var dcells = make_dcells();
    debubgall(cells);
    //check if it has neighbours
    debubgall(`checking ${h + 1}${w}`);
    if (cells.indexOf(`${h + 1}${w}`) > -1) {
        nei += 1;
    }
    debubgall(`checking ${h - 1}${w}`);
    if (cells.indexOf(`${h - 1}${w}`) > -1) {
        nei += 1;
    }
    debubgall(`checking ${h}${w + 1}`);
    if (cells.indexOf(`${h}${w + 1}`) > -1) {
        nei += 1;
    }
    debubgall(`checking ${h}${w - 1}`);
    if (cells.indexOf(`${h}${w - 1}`) > -1) {
        nei += 1;
    }
    // neighbours have been checked
    return nei
}

function dead_cells() { // makes a list of all dead cells
    var ncells = new Array();
    var h_index = 0;
    var w_index = 0;
    var cells = make_alcells();
    for (let i = 0; i < gol_extra.height; i++) {
        for (let e = 0; e < gol_extra.width; e++) {
            if (cells.indexOf(`${h_index}${w_index}`) < 0) { // if it doesnt exist as a cell
                var check = [h_index, w_index];
                var checked = check_cell(check);
                debubgall(`isnt a cell!! ${checked} ${check}`);
                if (checked == 3) {
                    ncells.push([h_index, w_index]);    
                }
            }
            w_index += 1;
        }
        h_index += 1;
        w_index = 0; // reset width for next line
    }
    return ncells
}

function gol_tick() {
    // gets run every game of life generation
    var new_save = new Array();
    db(`generation: ${gol_gen}`);


    var new_cells = dead_cells();

    for (i in new_cells) {
        new_save.push(new_cells[i]);
    }

    for (i in gol_save) {
        var ch_h = gol_save[i][0];
        var ch_w = gol_save[i][1];

        var check = [ch_h, ch_w];
        var checked = check_cell(check);

        if (checked < 2) {
            // dead
        } else if (checked == 2 || checked == 3) {
            // live
            new_save.push(check);
        } else if (checked > 3) {
            // dead
        }

    }

    
    gol_save = [...new_save];
    setScreen(gol_display());
    gol_gen += 1;
}


/*
Any live cell with fewer than two live neighbors dies, as if caused by under population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by overcrowding.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.


to get this thing to start without the user setting the squares, imma just have it go through all the pixels and 
have a 50/50 chance of the squares being filled

that should work hopefully
*/

function getErrorObject(){
    try { throw Error('') } catch(err) { return err; }
}

function test_get_line() {
/*
    var err = getErrorObject();
    var caller_line = err.stack.split("\n")[4];
    var index = caller_line.indexOf("at ");
    var clean = caller_line.slice(index+2, caller_line.length);
*/

    var line_raw = (new Error).stack.split("\n")[1]

    var change = line_raw.split("(")[1]
    change = change.replace(")", "");
    change = change.split("/")[3];
    db(change);
}

function make_list_thingymabob(jsonobj) {
    jsonobj = JSON.parse(JSON.stringify(jsonobj));
    // var longest_key = 0;
    // var final_out = "";
    // var first = true;
    // for (i in jsonobj) {
    //     if (i.length > longest_key) {
    //         longest_key = i.length;
    //     }
    // }

    // for (i in jsonobj) {
    //     if (first == true) {
    //         first = false;
    //     } else {
    //         final_out += "\n";
    //     }
    //     final_out += `${stringWidth(i, longest_key, false, ".")} | ${jsonobj[i]}`;
    // }

    for (i in jsonobj) {
        try {
            jsonobj[i] = JSON.parse(jsonobj[i].replaceAll('\\"', '"'))
        } catch (err) {

        }
    }

    final_out = JSON.stringify(jsonobj, null, 2);

    return(final_out)
}



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
db("extra tool functions init finished...", "init");



function generateEncryptionKey() {  // generate a fancy prancy encryption key ™
    var encryption_key_obj = new Object();
    var enc_sym = [...encryption_encodedtext]   // make a duplicate object of the symbols object
    

    for (i in encryption_plaintext) {   // for all possible plaintext characters
        var letter = encryption_plaintext[i];
        debubgall(`getting unicode for letter '${letter}'`);
        var sym_len = enc_sym.length - 1;
        var sym_id = getRandomInt(0, sym_len);  // get a random integer from value 0 to however long all the symbols are

        db(`pt:${letter},id:${sym_id},ct:${enc_sym[sym_id]},le:${sym_len}`);
        encryption_key_obj[letter] = enc_sym[sym_id];
        enc_sym.splice(sym_id, 1);
    }

    return encryption_key_obj
}

function crypt_tm(direction, text, cipher) {
    var maptm_og = new Object();
    var str = `${text}`;
    var maptm = new Object();
    if (direction == "de") {
        maptm_og = cipher;
        for (i in maptm_og) {
            var val = maptm_og[i];
            maptm[val] = i;
        }
    } else {
        maptm = cipher;
    }
    console.debug(maptm);
    console.debug(`STIRR'${str}'`);
    var re = new RegExp(Object.keys(maptm).join("|"),"gi");         // dont even ask because i don't know either
    str = str.replace(re, function(matched){
        db(matched);
        //debubgall(first);
        var result = "";
        matched = matched.toLowerCase();
        if (maptm[matched]) {
            result = `${maptm[matched]}`.toUpperCase();
        } else {
            result = matched;
        }
        db(result)
        return result
    });
    return str
}






db("encryption functions init finished...", "init");

//  .M.              +MMMMMMMMI +MM.      M+  .%MMMMMM +MMMMMMM%. MM    MM +MMMMMMM%. %MMMMMMMM% mmmmmmmmmm .%MMMMMMM%. +MM.      M+              .M.  
// .M'M.             MMMMMMMMMI MMMM.     MM .%MMMMMMM MM+'  '+M% MM.  .MM MM+'  '+M% %MMMMMMMM% MMMMMMMMMM %MM%' '%MM% MMMM.     MM             .M'M. 
// M' 'M             MM+        MM'MM.    MM %MM%'     MM      MM 'MM  MM' MM      MM     MM         MM     MM'     'MM MM'MM.    MM             M' 'M 
//                   MM........ MM 'MM.   MM MMM'      MM+.  .+M%  MM..MM  MM+.  .+M%     MM         MM     MM       MM MM 'MM.   MM                   
//                   MMMMMMMMMM MM  'MM.  MM MMM       MMMMMMMM%'  'MMMM'  MMMMMMMM%'     MM         MM     MM       MM MM  'MM.  MM                   
//                   MM'''''''' MM   'MM. MM MMM.      MM  'MM.     'MM'   MM             MM         MM     MM       MM MM   'MM. MM                   
//                   MM+        MM    'MM.MM %MM%.     MM   'MM.     MM    MM             MM         MM     MM.     .MM MM    'MM.MM                   
//                   MMMMMMMMMI MM     'MMMM '%MMMMMMM MM    'MM.    MM    MM             MM     mmmmMMmmmm %MM%. .%MM% MM     'MMMM                   
//                   +MMMMMMMMI +M      'MM+  '%MMMMMM +M     'MM    MM    +M             MM     MMMMMMMMMM '%MMMMMMM%' +M      'MM+                   




db("jQuery functions init finished...", "init");

//  .M.                     MMMM .%MMMMMMM%. MM       MM +MMMMMMMMI +MMMMMMM%. MM    MM             +MMMMMMMMI MM       MM +MM.      M+  .%MMMMMM %MMMMMMMM% mmmmmmmmmm .%MMMMMMM%. +MM.      M+ .%MMMMMMM%.              .M.  
// .M'M.                    ''MM %MM%' '%MM% MM       MM MMMMMMMMMI MM+'  '+M% MM.  .MM             MMMMMMMMMI MM       MM MMMM.     MM .%MMMMMMM %MMMMMMMM% MMMMMMMMMM %MM%' '%MM% MMMM.     MM %MM%' '%MM%             .M'M. 
// M' 'M                      MM MM'     'MM MM       MM MM+        MM      MM 'MM  MM'             MM+        MM       MM MM'MM.    MM %MM%'         MM         MM     MM'     'MM MM'MM.    MM MM'                     M' 'M 
//                            MM MM       MM MM       MM MM........ MM+.  .+M%  MM..MM              MM........ MM       MM MM 'MM.   MM MMM'          MM         MM     MM       MM MM 'MM.   MM MM%.......                    
//                            MM MM       MM MM       MM MMMMMMMMMM MMMMMMMM%'  'MMMM'              MMMMMMMMMM MM       MM MM  'MM.  MM MMM           MM         MM     MM       MM MM  'MM.  MM  %MMMMMMM%.                   
//                            MM MM       MM MM       MM MM'''''''' MM  'MM.     'MM'               MM'''''''' MM       MM MM   'MM. MM MMM.          MM         MM     MM       MM MM   'MM. MM   ''''''%MM                   
//                            MM MM.    MMMM MM       MM MM+        MM   'MM.     MM                MM         MM       MM MM    'MM.MM %MM%.         MM         MM     MM.     .MM MM    'MM.MM         .MM                   
//                   %MM%   %MM% %MM%.  %MM% %MM%   %MM% MMMMMMMMMI MM    'MM.    MM                MM         %MM%   %MM% MM     'MMMM '%MMMMMMM     MM     mmmmMMmmmm %MM%. .%MM% MM     'MMMM %MM%. .%MM%                   
//                    %M;MMMMMM%  '%MMMMMMM%M  %MMMMMMM%  +MMMMMMMMI +M     'MM    MM                MM          %MMMMMMM%  +M      'MM+  '%MMMMMM     MM     MMMMMMMMMM '%MMMMMMM%' +M      'MM+ '%MMMMMMM%'                   





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
    db(`[WORBLE INFO]: worble word is ${worble_word}`);
    
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
    db("aaa");
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
    await displayAnim("\n", 1);
    await displayAnim(musicText, 4);
}

async function themelist(table1, table2) {
    await displayAnim("\nBuilt-in Themes:\n", 7);
    await displayAnim(table1, 0.5);
    await displayAnim("\nCustom Themes:\n", 7);
    await displayAnim(table2, 0.5);
    await displayAnim("\nTo use a theme, type 'theme use [name]', To save a theme, type 'theme save [name]'");
}
async function bluescreen_page(inf) {
    if (bluescreening == true) {
        try {
            bluescreen = true;
            inputlock = true;
            bluescreen_done = false;
            debug = false;
            debugvar = false;
            sfx = false;
            rw_sound.loop = false;
            rw_sound.pause();
            document.getElementById("songinfo").style.display = "none";
            document.getElementById("p2cred").style.display = "none";
            document.getElementById("p1cred").style.display = "none";
            document.getElementById("p1ascii").style.display = "none";
            document.getElementById("input-div").style.display = "none";
            document.getElementById("consy").style.fontFamily = "MSDOS, monospace";     // change font
            document.getElementById("consy").style.textAlign = "center";
            document.getElementById("regtext").style.fontFamily = "MSDOS, monospace";   // change for the character size default as well
            await sizeCheck();                                                                // re-calculate the size of characters
            var dat = new Date();
            var tim = `${dat.getHours()}:${dat.getMinutes()}:${dat.getSeconds()}:${dat.getMilliseconds()}`;
            var le = "DP-LOL_CNSL";
            var l1 = `

A fatal error '${inf["msg"]}' has occurred at [${tim}] in command '${current_command}' -        
The current process will be terminated.                    ${" ".repeat(inf["msg"].length)}${" ".repeat(tim.length)}${" ".repeat(current_command.length)}`;
            var l2 = `

*  Press any key to terminate the current application.     ${" ".repeat(inf["msg"].length)}${" ".repeat(tim.length)}${" ".repeat(current_command.length)}
*  Press CTRL+ALT+END to restart the console. You will lose${" ".repeat(inf["msg"].length)}${" ".repeat(tim.length)}${" ".repeat(current_command.length)}
   any unsaved information.                                ${" ".repeat(inf["msg"].length)}${" ".repeat(tim.length)}${" ".repeat(current_command.length)}`;
            var l3 = `

Press any key to continue.`;
            var l4 = `
    
[warning: pressing any key to restart is disabled for user 'dev' for debug purposes!]`;
            for (i in TMO_push) {
                clearTimeout(TMO_push[i]);  // clear any current stuffs
            }
            clearInterval(snk_int);
            clearInterval(gol_int);
            music.pause();
            await clearScreen()
            await setColour("#cccded", false, "#0102ac", false, "#0102ac", false);    // set colour
            await displayAnim("\n\n\n", 82);
            await displayAnim(le, 0, "#0102ac", "", "background-color: #b1acaf; padding-left: 5px; padding-right: 5px; padding-top: 5px; padding-bottom: 3px;");
            await displayAnim(l1, 0, "", "", "text-align: left;");
            await displayAnim(l2, 0, "", "", "text-align: left;");
            await displayAnim(l3, 0);
            if (user == "dev") {
                await displayAnim(l4, 0);
            }
    
    
            bluescreen_done = true;
        } catch (err) {
            alert("console is so broken that the function to show a bluescreen broke. try restarting the page");
            location.reload();
        }
        
    }
    
    


}

async function gptPage() {
    displayNewline();
    await displayAnim(asciiText("slant", `gpt`), 2);
    displayNewline();
    await displayAnim(gpt_info_1, 2);
    displayNewline();
}

async function welcomePage() {
    displayNewline();
    await displayAnim(asciiText("slant", "console!"), 2);
    displayNewline();
    await displayAnim(welcome_page, 2);
    displayNewline();
}


db("async command functions init finished...", "init");


//  .M.                  :MMMM:     .%MMMMMMM%. MM    MM +MM.      M+  .%MMMMMM             +MMMMMMMMI MM       MM +MM.      M+  .%MMMMMM %MMMMMMMM% mmmmmmmmmm .%MMMMMMM%. +MM.      M+ .%MMMMMMM%.              .M.  
// .M'M.                :MMMMMM:    %MM%' '%MM% MM.  .MM MMMM.     MM .%MMMMMMM             MMMMMMMMMI MM       MM MMMM.     MM .%MMMMMMM %MMMMMMMM% MMMMMMMMMM %MM%' '%MM% MMMM.     MM %MM%' '%MM%             .M'M. 
// M' 'M                IMM::MMI    MM'         'MM  MM' MM'MM.    MM %MM%'                 MM+        MM       MM MM'MM.    MM %MM%'         MM         MM     MM'     'MM MM'MM.    MM MM'                     M' 'M 
//                     :MM:  :MM:   MM%.......   MM..MM  MM 'MM.   MM MMM'                  MM........ MM       MM MM 'MM.   MM MMM'          MM         MM     MM       MM MM 'MM.   MM MM%.......                    
//                     IMM:  :MMI    %MMMMMMM%.  'MMMM'  MM  'MM.  MM MMM                   MMMMMMMMMM MM       MM MM  'MM.  MM MMM           MM         MM     MM       MM MM  'MM.  MM  %MMMMMMM%.                   
//                    :MMMMMMMMMM:    ''''''%MM   'MM'   MM   'MM. MM MMM.                  MM'''''''' MM       MM MM   'MM. MM MMM.          MM         MM     MM       MM MM   'MM. MM   ''''''%MM                   
//                    IMM:    :MMI          .MM    MM    MM    'MM.MM %MM%.                 MM         MM       MM MM    'MM.MM %MM%.         MM         MM     MM.     .MM MM    'MM.MM         .MM                   
//                   :MM%      %MM: %MM%. .%MM%    MM    MM     'MMMM '%MMMMMMM             MM         %MM%   %MM% MM     'MMMM '%MMMMMMM     MM     mmmmMMmmmm %MM%. .%MM% MM     'MMMM %MM%. .%MM%                   
//                   :MM:      :MM: '%MMMMMMM%'    MM    +M      'MM+  '%MMMMMM             MM          %MMMMMMM%  +M      'MM+  '%MMMMMM     MM     MMMMMMMMMM '%MMMMMMM%' +M      'MM+ '%MMMMMMM%'                   















// colour setting automatically tm

//setTextColour(textcolour);
//setBackColour(backcolour);
//setAccyColour(accycolour);
setColour(textcolour, true, backcolour, true, accycolour, true);

if (sfx == true) {
    ambient_audio();
}

setTimeout(sizeCheck(), 200);

window.scrollTo(0, 0);  // askew breaks scrolling for some reason

/*
 EXAMPLE INLINE FNCTIONS WHERE THEY ONLY rUN ONE THING AT A TIME INSTEAD OF EVERYTHING RUNNING AT HE SAME TIME
function exampleInline() {
    return new Promise((resolve,reject)=>{
        // your code
        resolve();
    })
}
async function exampleInline2() {
    await exampleInline();
    await exampleInline();
}
 EXAMPLE REPEAT FOR X TIMES:
for (let i = 0; i < amountVAr; i++) {

    console.debug(`the current loop is ${i}`);

}
 https://keycode.info/
 making it so when you press enter in the input itll run the thing



 IF YOU WANT SOEMTHING TO RUN IF DOING A SPECIFIC THING RETURNS AN ERROR USE THIS:

  let request = doThisThing;

  request.onerror = function();

  request.onsuccess = function();



  IDEAS TO ADD:

  be able to set like ?debug=true in the URL and have it turn on debug if so

  same for variable debug

  and then also have ?command=lovejoy

  where itll run a command as the window opens

  but also right now i need to finish the comments


  OPEN SEPERATE WINDOW:

  var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
  win.document.body.innerHTML = "HTML";




*/

shell.onkeyup = function keyParse(e){

    if (inputlock == false) {
        
        if (mainlock == true) {
            if(e.keyCode == 13) {
                if (shell.value != "") {
                    if (enterlock == false) {
                        // stinky old code is gone!!!!

                        // *crab rave*
                        if (listening_input == true) {  // if its listening for a text input
                            ask_return = shell.value;
                            try {
                                ask_do();
                            } catch (err) {
                                bluescreen_page({"msg": err.message});
                            }
                            
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
                            
                        debubgall(consoltext);
                        debubgall(commang);
                    }
                }
                boom();
            }  else if(e.keyCode == 37) {
                if (snakeinputs == true) {
                    db("left arrow detected");
                }
            } else if(e.keyCode == 38) {
                if (snakeinputs == true) {
                    db("up arrow detected");

                } else if (commandhistorylock == false) {
                    // get out of here old command history code, you stinky
                    var indexed = historyIndex(1); // index history up by 1
                    shell.value = `${indexed}`;

                }
                
            } else if(e.keyCode == 39) {
                if (snakeinputs == true) {
                    db("right arrow detected");
                }
            } else if(e.keyCode == 40) {
                if (snakeinputs == true) {
                    db("down arrow detected");

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
        else if (doglock == true) {
                       
           if (e.keyCode == 32 || e.keyCode == 13) {   // either enter or space
               dogInteract();
           } else if (e.keyCode == 27) {               // escape
               dogEscape();
           }
       
       
        } else if (adventure_lock == true) {
        
            ta_input = shell.value;
            ta_key = e.key;             // https://keycode.info/
            adventure_exe();
        } else if (bluescreen == true) {
            shell.value = "";
            if (bluescreen_done == true) {
                bluescreen = false;
                mainlock = true;
                setColour(og_textcolour, true, og_backcolour, true, og_accycolour, true);
            }
        }
            
        
    }
}

window.onkeydown = function kee(e) {
    var keycode = e.keyCode;
    keys_pressed[keycode] = true;       // object with all the keycodes of keys that are being pressed

    if (keys_pressed[17] == true && keys_pressed[18] == true && keys_pressed[35] == true) { // reload page (but fancy)
        location.reload();
    }

}

window.onkeyup = function kee(e) {

    var keycode = e.keyCode;
    keys_pressed[keycode] = false;       // object with all the keycodes of keys that are being pressed

    if (bluescreen_done == true) {
        if (user != "dev") {
            location.reload();
        }
    }

    if (snakelock == true) {
        // snake stuff

        db("snake key pressed!!!");

        console.debug(snk_dir);

        if (e.keyCode == 37) {          // left
            if (snk_extra.dir != 'right') {
                snk_dir = [0, -1];
                snk_extra.dir2 = 'left';
            }
        } else if (e.keyCode == 38) {   // up
            if (snk_extra.dir != 'down') {
                snk_dir = [-1, 0];
                snk_extra.dir2 = 'up';
            }
        } else if (e.keyCode == 39) {   // right
            if (snk_extra.dir != 'left') {
                snk_dir = [0, 1];
                snk_extra.dir2 = 'right';
            }
        } else if (e.keyCode == 40) {   // down
            if (snk_extra.dir != 'up') {
                snk_dir = [1, 0];
                snk_extra.dir2 = 'down';
            }
        } else if (e.keyCode == 27) {   // esc

            snake_end();

        }


        console.debug(snk_dir);

    } else if (gol_lock == true) {
        // game of life

        if (e.keyCode == 27) {  // pressed escape!
            // exit game of life
            gol_end();
        }

    }

}


/*



else if (adventure_lock == true) {

    ta_input = shell.value;
    ta_key = e.key;             // https://keycode.info/
    adventure_exe();
}

*/



music.addEventListener('ended', (event) => {
    document.getElementById("songinfo").style.display = "none";
    music_playing = false;
    clearInterval(lyric_interval);
    lyr_status = new Object();
    
    if (in_queue == true) {
        music_queue.shift();
        if (music_queue[0]) {
            in_queue = false;
            parseCommand(`music play ${music_queue[0]}`);
            in_queue = true;
        } else {
            in_queue = false;
            displayAnim("\nqueue ended!", 7);
        }
    }

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
        document.getElementById("songinfo").style.backgroundColor = og_backcolour;
    } else if (credits_playing == true) {
        credits_playing = false;
        inputlock = false;
        setColour(og_textcolour, true, og_backcolour, true, og_accycolour, true);

    }
    boom();
});

/*                                              old lyric crap
music.addEventListener('canplaythrough', (event) => {
    //if (music.currentTime == 0) { // if it has just started tm
        if (song_err == false) {
            displayLyrics(lyr_disp);
        }
    //}
});
*/

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState == 'visible') {
        console_visible = true;
        db("console is now visible again!!");
    } else {
        console_visible = false;
        db("console is no longer visible!");
    }
});


window.onresize = sizeCheck;

function closeDebuG() {
    if (debug == true) {
        // DEBUG WIN ADDITION POINT
        clearInterval(var_debug_check);
        debug_win.close();
        var_debug_win.close();
        debugwin_status = false;
        var_debugwin_status = false;
    }
}

window.onclose = closeDebuG;


consol.addEventListener('mousemove', (event) => {
    consol.style.cursor = "auto";
    cursor_pos = [event.pageX + 1, event.pageY];     // sets the current pos (not needed for this system but may be useful in the future)
    clearTimeout(cursor_hide_timer);
    cursor_hide_timer = setTimeout(function timer() {
        consol.style.cursor = "none";
        debubgall("the letter a");
    }, 2000);
});

music.addEventListener('error', (event) => {

    var message = ""

    
    // console.log("WAHHHHHHHHHHHHHHHHHHh")
    // console.log(music)
    // console.log(event)
    // console.log(event.path)

    // if (event.path[0].error.message) {
    //     message = `${event.path[0].error.message}`;
    // } else if (event.error) {
    //     message = `${event.error}`;
    // } else {
    //     message = "[no error message found]";
    // }
    
    
    bluescreen_page({"msg": "something with the audio is broken"});
})


/*

music.addEventListener('timeupdate', (event) => {
    console.debug(music.currentTime);
});
*/

db("listeners added...", "init");

cns_session_id += 1;
localStorage.setItem("session id", cns_session_id);