

// guys it literally says you are sus with a phone number on it



function parseCommand(command) {
    // tje actual command stuff

    coopy = false;

    var copymaybe = command.slice(0, 5);
    //debubg(copymaybe);
    debubg(`> ${command}`);
    if (copymaybe == "copy ") {
        coopy = true;
        command = command.substring(5);
        debubg("command copy has been set.");
    } else {
        debubg("command copy not set.");
    }

    commandInit = command;
    command = command.toLowerCase();
    argCommand = command.split(" ")[0];
    
    //debubg(command);
    //debubg(command);
    if (command == "eef") {
        newLine();
        var marky = [
            "MARK!                  ",
            "A LIME!                  ",
            "can i have it?"
        ];
        animArt(marky, 20);


    } else if (command == "test") {
        newLine();
        newAnim("this is working", 20)
    } else if (command == "clear") {
        setTimeout(function() {
            cleary();
        }, 500)
        
    } else if (command.split(" ")[0] == "echo") {
        newLine();
        newAnim(commandInit.slice(5), 20);
    } else if (command == "help") {
        newLine();
        animArt(hlep, 1);
    } else if (argCommand == "login") {

        var mmm = argComm(commandInit);
        var ooo = argComm(commandInit);

        var rawaccountregistry = `{${localStorage.getItem("accounts")}}`;

        //debubg(rawaccountregistry);

        var inusername = mmm[1];
        ooo.splice(0,2);

        var accountregistry = JSON.parse(rawaccountregistry);

        //debubg(accountregistry);

        debubg(`attempting to log in using username '${inusername}' and password '${ooo}'.`);

        if (accountregistry[inusername] != undefined) {    // if account name exists in registry
            debubg("username found in registry. continuing.");

            var realpassword = accountregistry[inusername];
            //debubg(`password to account is ${realpassword}`);

            if (ooo == realpassword) {
                // password success
                debubg("password succesful password tm tm");
                newLine();
                newAnim(`logged into ${inusername}.`, 10);
                setUser(inusername);
            } else {
                debubg("hah you tried but the password was incorrect lmao")
                newLine();
                newAnim("password incorrect.", 10);
            }

        } else {
            newLine();
            newAnim("invalid username. use 'signup' to sign up with a new account.", 10);
        }




    } else if (argCommand == "signup") {
        // sign up
        var mmm = argComm(commandInit);
        var ooo = argComm(commandInit);

        let rawaccountregistry = localStorage.getItem("accounts");        

        var inusername = mmm[1];
        ooo.splice(0,2);

        debubg(rawaccountregistry);

        var accountregistry = JSON.parse(`{${rawaccountregistry}}`);

        if (accountregistry[inusername] != undefined) {    // if account name exists in registry (agaim)
            newLine();
            newAnim("user already exists in registry.", 10);
        } else {
            // yes
            debubg("user does not exist in registry!!!! making!!!! tm!!!!");
            let newRegistry = `${rawaccountregistry}, "${inusername}": "${ooo}"`;
            localStorage.setItem("accounts", newRegistry);
            setUser(inusername);
            newLine();
            newAnim(`created new account '${inusername}'.`);

        }
    }
    
    
    else if (commandInit == "oh") {
        newLine();
        newAnim("oh...", 20);
    } else if (commandInit == "OH") {
        newLine();
        newAnim("oH.............................................................................................................................................................................................................................................................", 20);
    } else if (command == "hack") {
        newLine();
        newAnim("hack hack beep boop 011010101010011000001101010010101", 20);
        user = "hacker"
    } else if (command == "secret") {
        newLine();
        newAnim("there are no secrets.", 20);
    } else if (command == "aperture") {
        newLine();
        animArt(apertureLogo, 1);                                                                                
    } else if (command == "secrets") {
        newLine();
        newAnim("there is not a secret.js file.", 20);
    } else if (command == "cake") {
        newLine();
        animArt(cake, 1);
    } else if (command == "info" || command == "about") {
        aboutPage();
    } else if (command == "ae394") {
        newLine(); 
        var poopy = [
            "there are no secrets in this console.                 ",
            "none.                 ",
            "none."
        ];
        animArt(poopy, 20);
    } else if (command == "doe" || command == "doe's world" || command == "does world") {
        newLine();
        newAnim("TWITCH.TV/DOESWORLDLIVE LETS GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO", 20);
    } else if (command == "logout") {
        newLine();
        newAnim("logged out to generic user.", 20);
        setUser("user");
    } else if (command == "what is the meaning of life?" || command == "what is the meaning of life" || command == "the meaning of life" || command == "meaning of life?" || command == "meaning of life") {
        newLine();
        newAnim("42.", 40);
    } else if (command == "fast-clear") {
        clearScreen();
    } else if (command == "ls") {
        newLine();
        animArt(listy, 5);
    } else if (command == "colour text" || command == "colour text " || command == "colour back" || command == "colour back ") {
        newLine();
        newAnim("please input a proper colour code.", 10);
    } else if (command.split(" ")[0] == "color" || command.split(" ")[0] == "colour") {
        if (commandInit.split(" ")[1] == "text") {
            newLine();
            var colour = commandInit.split(" ")[2];
            debubg(`setting text colour to ${colour}`);
            var iffy = /^#[0-9A-F]{6}$/i.test(colour);
            if (iffy == true) {
                setTextColour(colour);
                newAnim(`setting text colour to ${colour}`, 15);
            } else if (iffy == false && colour.toLowerCase() == "reset") {
                setTextColour("#7cfc00");
                newAnim(`resetting text colour`, 15);
            } else if (iffy == false) {
                newLine();
                newAnim("invalid colour code.", 10);
            }
            else {
                newAnim("invalid colour code.", 20);
            }
        } else if (commandInit.split(" ")[1] == "background") {
            newLine();
            var colour = commandInit.split(" ")[2];
            debubg(`setting text colour to ${colour}`);
            var iffy = /^#[0-9A-F]{6}$/i.test(colour);
            if (iffy == true) {
                setBackColour(colour);
                newAnim(`setting background colour to ${colour}`, 15);
            } else if (iffy == false && colour.toLowerCase() == "reset") {
                setBackColour("#000000");
                newAnim(`resetting background colour`, 15);
            } else if (iffy == false) {
                newLine();
                newAnim("invalid colour code.", 5);
            }
            else {
                newAnim("invalid colour code.", 20);
            }
        } else if (commandInit.split(" ")[1] == "reset") {

            setTextColour("#7cfc00");
            setBackColour("#000000");
            newLine();
            newAnim("colours have been reset", 5);

        } else if (command == "color" || command == "color " || command == "colour" || command == "colour "){
            newLine();
            newAnim("invalid colour. check the help page", 20);
        }
    
    } else if (command == "filesys") {
        toggleFileSys();
        newLine();
        var switchy = [
            "Switching to FILESYS."
        ];
        animArt(switchy, 20);

    } else if (command == "sys") {
        newLine();
        newAnim("you are currently in MAINSYS.", 20);
    } else if (command == "charmount") {
        var mmm = consoltext.split("");
        var long = mmm.length;
        newLine();
        newAnim(`${long}`, 20);
    } else if (command == "syslist") {
        newLine();
        
        animArt(syslist, 5);
    } else if (command == "sus" || command == "among us" || command == "amogus" || command == "amongus" || command == "amon gus" || command == "sussy") {
        newLine();
        animArt(amogus, 1);
    } else if (command == "lovejoy") {
        newLine();
        animArt(lovejoy, 1);
    } else if (argCommand == "arg-test") {
        newLine();
        var mmm = argComm(commandInit);
        var inbo = [
            `FULL COMMAND: ${commandInit}`,
            `COMMAND: ${mmm[0]}`,
            `FIRST ENTRY: ${mmm[1]}`,
            `SECOND ENTRY: ${mmm[2]}`
        ];
        animArt(inbo, 10);

    } else if (command == "help -art") {
        newLine();
        animArt(hlepart, 1);
    } else if (command == "help -dev") {
        newLine();
        animArt(hlepdev, 1);
    } else if (argCommand == "comment") {
        newLine();
        if (command == "comment" || command == "comment ") {
            newAnim("please enter a valid argument.", 20);
        } else {


            var mmm = argComm(commandInit);

            if (mmm[1].toLowerCase() == "add") {
                // add comment
                var eee = mmm;
                eee.shift();
                eee.shift();
                var yaya = eee.length;
                var tata = "";
                for (let i = 0; i < yaya; i++) {
                    tata = `${tata}${eee[i]} `;
                }
                


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
                var td_ampm = "UNPARSED";

                debubg(`current date: ${td_day}-${td_month}-${td_year} at ${td_hour}:${td_minute} ${td_ampm}`);

                // parsing of variables

                td_month = months[td_month];

    
                // ====[ i stole this chunk from my vhs website lmao ]====

                if (td_hour < 12) {
                    // AMPM
                    td_hour = td_hour + 1;
                    td_ampm = "AM";
                } else if (td_hour >= 12) {
                    // PM
                    td_hour = td_hour - 12;
                    td_ampm = "PM";
                }
                // adding 0's to any number that is not in the double digits
                if ( td_hour.toString().length == 1) {
                    td_hour = `0${td_hour}`;
                }
                if ( td_minute.toString().length == 1) {
                    td_minute = `0${td_minute}`;
                }
                // make sure all of this runs properly

                // end of chunk stolen from myself



                debubg(`parsed date: ${td_day}-${td_month}-${td_year} at ${td_hour}:${td_minute} ${td_ampm}`);

                // var commentToPush = {
                //     "comments" : [
                //         [ "yes", "1", "2" , "3"],
                //         [ "editors", "4", "5" , "6"],
                //     ]
                // }

                // var commentToPush = {
                //     "comments" : [
                //         { "username": "johndoe", "comment": "this is cool"},
                //         { "username": "johndoe2", "comment": "this is cool lol"}
                //     ]
                // }



                // for (i in siteInfo .users) 
                // {
                //     for (j in siteInfo.users[i]) 
                //     {
                //         x = siteInfo.users[i][j];
                //         console.log(x);
                //     }
                // }



                var commentToPush = `, { "username": "${user}", "comment": "${tata}", "day": "${td_day}", "month": "${td_month}", "year": "${td_year}", "hour": "${td_hour}", "minute": "${td_minute}", "ampm": "${td_ampm}" }`;

                debubg(commentToPush);

                comments += commentToPush;

                debubg(comments)

                localStorage.setItem("comments", comments);

                // MAKE IT PUSH JSON INSTEAD OF AN ARRAY
                // THINGS TO MAKE IT PUSH:
                // NAME
                // COMMENT
                // DATE
                // TIME

                // STRUCTURE:

                // new structure idea from my father (thank you dad)

                // json is dumb and im just gonna make it use a list because that's easier

                // nevermind there's no easy way to parse a list from a string which is what i want

                // thank you codegrepper.com for this
                // 
                // storing array in localStorage
                // var colors = ["red","blue","green"];
                // localStorage.setItem("my_colors", JSON.stringify(colors)); //store colors
                // var storedColors = JSON.parse(localStorage.getItem("my_colors")); //get them back

                // what i'll do so i can properly append to the json without needing to remove the ending json bits is:

                // i'll just store the list part of the json in local storage and then when i need to actually display the stuff ill just have it get the list part, and then add the beginning and end parts of the json as needed



                // DATABASE
                //   |
                //   +-COMMENTS
                //   | |
                //   | +-0
                //   | | + name
                //   | | + comment
                //   | | + date
                //   | | + time

                newAnim(`comment "${tata}" from user ${user} has been added.`, 15);
            } else if (mmm[1].toLowerCase() == "list") {


                debubg("retrieving comments from local storage...");
                var rawJSON =  localStorage.getItem("comments");
                debubg("data successfully retrieved");

                debubg(`raw json: ${rawJSON}`);


                var commentJSON = JSON.parse(`{ "comments": [ ${rawJSON} ] }`);

                debubg(commentJSON);

                // YES IT WORKS!!!!

                // referebce

                // var commentToPush = {
                //     "comments" : [
                //         { "username": "johndoe", "comment": "this is cool"},
                //         { "username": "johndoe2", "comment": "this is cool lol"}
                //     ]
                // }

                var allComments = [];

                for (i in commentJSON["comments"]) {
                    debubg(commentJSON["comments"][i]);
                    if (i != 0) {
                        var cm_user = commentJSON["comments"][i]["username"];
                        var cm_comment = commentJSON["comments"][i]["comment"];
                        var cm_day = commentJSON["comments"][i]["day"];
                        var cm_month = commentJSON["comments"][i]["month"];
                        var cm_year = commentJSON["comments"][i]["year"];
                        var cm_hour = commentJSON["comments"][i]["hour"];
                        var cm_minute = commentJSON["comments"][i]["minute"];
                        var cm_ampm = commentJSON["comment"][i]["ampm"];

                        
                        allComments.push(` `);
                        allComments.push(`${cm_user}@dapug.lol at ${cm_hour}:${cm_minute} ${cm_ampm} on ${cm_day} ${cm_month}, ${cm_year}:`);
                        allComments.push(`${cm_comment}`);
                        
                    }
                }

                debubg(allComments);

                animArt(allComments, 5);

                // list comments
                //animArt(comments, 5);
            } else if (mmm[1].toLowerCase() == "-clear") {

                if (confirm("WARNING: clearing comments will remove ALL comments. Are you sure?")) {
                    localStorage.setItem("comments", '{ "why": "yes" }')
                    debubg("comments cleared");
                    newAnim("comments cleared.", 20);
                } else {
                    newLine();
                    newAnim("comments have not been cleared.", 20);
                    debubg("user thought about their decisions and did not clear the comments"); // i know i just copy pasted this from clear cache shoosh
                }
                
            } else {
                newAnim("please enter a valid argument.", 20);
            }
        }
  



    } else if (command == "clear -cache") {

        if (confirm("WARNING: clearing the cache will remove ALL DATA saved from your adventures on this site. Are you sure you want to clear the cache?")) {
            localStorage.clear();
            debubg("cache cleared");
            location.reload();
        } else {
            newLine();
            newAnim("cache has not been cleared.");
            debubg("user thought about their decisions and did not clear the cache")
        }
        
    } else if (command == "clear -cache -ignore") {
        localStorage.clear();
        debubg("cache cleared");
        location.reload();
    } else if (command == "debug") {
        if (debug == false ) {
            debug = true;
            document.getElementById("debub").style.display = "";
        } else {
            debug = false;
            document.getElementById("debub").style.display = "none";
        }
    } else if (command == "reboot") {
        location.reload();
    } else if (command == "cheese") {
        newLine();
        animArt(cheese, 1);
    } else if (command == "snake") {
        snakeGameStart();

    } else if (argCommand == "ascii") {
        var mmm = argComm(commandInit);
        var fonty = mmm[1];
        debubg(mmm);
        mmm.shift();
        mmm.shift();
        debubg(mmm);
        var tata = "";
        var yaya = mmm.length;
        for (let i = 0; i < yaya; i++) {
            tata = `${tata}${mmm[i]} `;
        }
        debubg(tata);
        newLine();
        //newAnim(`${tata}`, 20);
        var asciifinal = asciiText(fonty, `${tata}`);
        animArt(asciifinal, 0.1);

        coopyIf(asciifinal);

        coopy = false;
        
    } else if (command == "history") {
        //debubg(commang);
        newLine();
        if (commandHistory.length > 0) {
            var YAYA = commandHistory.slice(0);
            YAYA.unshift("COMMAND HISTORY:");
            animArt(YAYA, 5);
            //debubg(commang);
        } else {
            newAnim(`Command history is empty. type a command to make it not empty!`);
        }
    } else if (argCommand == "cinfo") {
        var mmm = argComm(commandInit);
        mmm.shift();
        debubg(mmm);
        var egg = mmm.join(" ");
        debubg(egg);
        var fried = egg.split("");
        debubg(fried);
        var code = "";
        var legy = egg.length;
        debubg(`input length: ${legy}`);
        if (legy == 1) {
            code = mmm[0].charCodeAt(0);
        } else {
            for (let i = 0; i < legy; i++) {
                var yoya = fried[i].charCodeAt(0);
                if (i != 0) {
                    code = `${code}, ${yoya}`;
                } else {
                    code = yoya;
                }
            }
        }

        
        newLine();
        newAnim(`${code}`, 20);
    } else if (command == "font list") {
        newLine();
        animArt(fomb, 5);
    } else if (command == "copylist") {
        newLine();
        animArt(cpoylist, 1);
    } else if (argCommand == "copycomm") {
        var mmm = argComm(commandInit);
        var commen = mmm[1];
        copycomm = commen;
        newLine();
        debubg(`set copy comment to ${copycomm}`);
        newAnim(`set copy comment to ${copycomm}`);
        
    } else if (command == "debug -v") {
        if (debugvar == false ) {
            debugvar = true;
            document.getElementById("debubvar").style.display = "";
        } else {
            debugvar = false;
            document.getElementById("debubvar").style.display = "none";
        }
    } else if (command == "convert -list") {
        newLine();
        animArt(convertlist, 1);
        
        
    } else if (command == "convert") {
        
        newLine();
        newAnim("please check the convert manpage. ('man convert')", 5);
        
    } else if (argCommand == "convert") {

        // the test development command for the new convert which should hopefully do things automatically

        // no longer test development lol

        var mmm = argComm(commandInit);
        // convert 10 cm in
        var unittype = mmm[1];
        var amount = mmm[2];
        var fromunit = mmm[3];
        var tounit = mmm[4];
        var output = "something is broken and it did not output any conversion";
        var error = false;
        var OUTY = "a";
        // ALL CONVERSIONS (in a fancy json lol)

        var units = {
            "l": {
                "mm": 0.1,
                "cm": 1,
                "m": 100,
                "km": 100000,
                "in": 2.54,
                "ft": 30.48,
                "yd": 91.44,
                "mi": 160934.4,
                "hm": 10.16
            },
            "m": {
                "mg": 0.001,
                "g": 1,
                "kg": 1000,
                "lb": 453.592,
                "oz": 28.3495,
            }
        }
        
        debubg(`converting ${unittype} ${amount} ${fromunit} to ${tounit}...`);
        amount = parseInt(amount);

        // removing the '-' so that way itll properly search from the json
        var unitTypeRaw = unittype.split("")[1];

        debubg(`unit type: ${unitTypeRaw}`);


        var typeTest = keyExists(units, `${unitTypeRaw}`);
        

        if (typeTest == true){
            debubg("unit type found. continuing.");

            var fromTest = keyExists(units[unitTypeRaw], `${fromunit}`);
            var toTest = keyExists(units[unitTypeRaw], `${tounit}`);

            if (fromTest == true && toTest == true) {
                debubg("from unit found. continuing.")

                // CONVERT
                
                var BASE = 0;
                var value_tm_1 = units[unitTypeRaw][fromunit];
                var value_tm_2 = units[unitTypeRaw][tounit];

                eval(`BASE = ${amount} * ${value_tm_1}`);
                eval(`OUTY = ${BASE} / ${value_tm_2}`);

                debubg(`OUT: ${OUTY}`);

                output = `${OUTY}`;


            } else {
                if (fromTest == false && toTest == true) {
                    output = "from unit not found. check 'convert -list' for a list of all the supported units";
                } else if (fromTest == true && toTest == false) {
                    output = "to unit not found. check 'convert -list' for a list of all the supported units";
                } else {
                    output = "from unit and to unit not found. check 'convert -list' for a list of all the supported units";
                }
            }

        } else {
            debubg("unit type not found lmao");
            output = "unit type not found. check 'convert -list' for a list of all the supported units";
        }
        

    
        newLine();
        newAnim(output, 5);
        coopyIf(output);
    
    
    
    } else if (command == "pebblebrain" || command == "pebble brain") {
        newLine();
        animArt(pebblebrain, 1);
        coopyIf(pebblebrain);
    } else if (argCommand == "man") {
        var incommand = commandInit.slice(4);
        debubg(`[MAN] queueing command ${incommand}.`);
        var yee = incommand.replace(" ", "_");
        yee = yee.replace("-", "0");
        debubg(`command name after processed: ${yee}`);
        var manvar = `MAN_${yee}`;
        debubg(`full man var is ${manvar}.`);
        
        var existent = false;
        // the internet tells me to never use eval() but i don't care because this is not running on a full on web server so crime war
        eval(`if (typeof ${manvar} !== 'undefined') { existent = true;}`)

        var haha;
        if (existent == true) {
            debubg("command is in man registry.");
            eval(`haha = ${manvar}`);
        } else {
            debubg("command is not in man registry.")
            haha = "there is no current man page for this command.";
        }

        newLine();
        smartAnim(haha, 3);
       
    } else if (command == "benson") {
        newLine();
        animArt(benson, 5)
        coopyIf(benson);
    } else if (command == "github" || command == "git") {
        // shows a fancy github info page lol
        githubPage();
    } else if (command == "share") {
        // SHARE
        var elem = document.getElementById("consoleinput");
        var suggest;
        if (elem.value == "") {
            suggest = "";
        } else {
            suggest = `&suggestion=${elem.value}`;
        }
        var shareLink = `https://dapug.lol/console?debug=${debug}&debugvar=${debugvar}${suggest}&textcolour=${textcolour.split("#")[1]}&backcolour=${backcolour.split("#")[1]}`;
        debubg(`share link generated: ${shareLink}`);
        copyclip(shareLink);

        async function eyes(){
            newLine();
            await newLinkAnim("generated link", 10, shareLink);
            newAnim(" copied to clipboard.", 10);
        }

        eyes();

        
    } else if (command == "reset" ) {
        // full hard reset on everything
        if (confirm("WARNING: clearing the cache will remove ALL DATA, and ALL SETTINGS. Are you sure you want to reset?")) {
            localStorage.clear();
            debubg("cache cleared");
            let path = window.location.href.split('?')[0];
            debubg(path);
            window.location.replace(path);
        } else {
            newLine();
            newAnim("cache has not been cleared.");
            debubg("user thought about their decisions and did not reset literally everything");
        }



    } else if (command == "worble" || command == "worble ") {
        // show worble main page
        worblePage();
        
        
    } else if (argCommand == "worble") {
        // lmao wordle extreme mode activated

        var mmm = argComm(commandInit);
        var gses = argComm(commandInit);

        if (mmm[1] == "colourblind" || mmm[1] == "colorblind") {
            if (worble_colourblind == false) {
                worbleColourblind(true);
                newLine();
                newAnim("colourblind mode has been turned on.", 10);
            } else {
                worbleColourblind(false);
                newLine();
                newAnim("colourblind mode has been turned off.", 10);
            }
        } else if (mmm[1] == "guess") {
            // guess worble
            var guessword = mmm.slice(2);

            if (worble_status == false) { // not in game
                // make a new worble
                newWorble(false);
            }

            if (`${guessword}`.length != worble_word.length) {
                var long = "";
                if (`${guessword}`.length > worble_word.length) {
                    long = "too long";
                } else {
                    long = "too short";
                }
                newLine();
                newAnim(`uh oh! worble word is ${long}! the word is ${worble_word.length} characters long.`, 10);
            } else {
            
                
                // do the guessing
                guessWorble(guessword);

                if (worble_status == false) {
                    worbleDone();
                }
            }

        } else if (mmm[1] == "start") {
            if (worble_status == true) { // in game
                // make a new worble
                newLine();
                animArt(worble_error_1, 10);
            } else {
                newWorble(false);
            }
        } else if (mmm[1] == "restart" || mmm[1] == "reset") {
            newWorble(true);
        } else if (mmm[1] == "info") {
            worbleInfoPage();
            coopyIf(worble_infoscreen.slice(6));
        } else if (mmm[1] == "share") {
            shareWorblePage();
        } else if (mmm[1] == "custom") {
            var guessword = mmm.slice(2);
            if (worble_status == true) { // in game
                // make a new worble
                newWorble(true, guessword);
            } else {
                newWorble(false, guessword);
            }
        } else {
            newLine();
            newAnim("invalid sub command! use 'worble' or 'man worble' to see all the options!");
        }





    } 
    else {
        newLine();
        newAnim(`command error: ${commandInit} is not an existing command.`, 10);
    }
    coopy = false;
}