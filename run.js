

// guys it literally says you are sus with a phone number on it



function parseCommand(command) {
    // tje actual command stuff
    try {
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

        var commandsplit = command.split("")

        if (commandsplit[commandsplit.length - 1] == " ") {
            commandsplit.pop();
            command = commandsplit.join("");
        }
        
        current_command = argCommand;

        //debubg(command);
        //debubg(command);
        if (command == "eef") { //lyrics should be done to this
            var marky = [ " ",
                "MARK!                  ",
                "A LIME!                  ",
                "can i have it?"
            ];
            displayAnim(marky, 20);


        } else if (command == "test") {
            displayAnim("\nthis is working", 20);
        } else if (command == "clear") {
            clearScreen();
        } else if (command.split(" ")[0] == "echo") {
            displayAnim(`\n${commandInit.slice(5)}`, 20);
        } else if (command == "help" || command == "help ") {
            displayAnim(`\n${help["main"]}`, 0.25);
        } else if (argCommand == "help") {
            var page = command.slice(5)
            //page.slice(0, -5);
            
            if (help[page]) {
                // the page exists
                displayAnim(`\n${help[page]}`, 0.25 );
            } else {
                displayAnim("\nthat help page does not exist! run 'help' to get a list of help pages!");
            }


        } else if (argCommand == "login") {
            var mmm = argComm(commandInit);
            accountsregistry = JSON.parse(localStorage.getItem("accounts"));
            var inusername = mmm[1];
            login_username = inusername;
            debubg(`attempting to log in using username '${inusername}'`);
            if (locked_accounts.indexOf(inusername) > -1) { // it's a locked account
                displayAnim("\nsorry, that account cannot be logged into.", 7);    // youtuber apology video
            } else if (accountsregistry[inusername]) {           // if it's in the custom account registry
                displayAnim(`\nplease type in the password for user '${inusername}'`);
                askInput(() => {
                    var realpassword = accountsregistry[login_username];
                    if (ask_return == realpassword) {  // if it's the password
                        debubg("password succesful password tm tm");
                        displayAnim(`\nsuccessfully logged into '${login_username}'`, 10);
                        setUser(login_username);
                    } else {    // else
                        debubg("hah you tried but the password was incorrect lmao")
                        displayAnim("\npassword incorrect.", 10);
                    }
                });
            } else if (default_accounts[inusername]) {              // if it's in default account registry
                displayAnim(`\nplease type in the password for user '${inusername}'`);
                askInput(() => {
                    var realpassword = default_accounts[login_username];
                    if (ask_return == realpassword) {  // if it's the password
                        debubg("password succesful password tm tm");
                        displayAnim(`\nsuccessfully logged into '${login_username}'`, 10);
                        setUser(login_username);
                    } else {    // else
                        debubg("hah you tried but the password was incorrect lmao")
                        displayAnim("\npassword incorrect.", 10);
                    }
                });
            } else {                    // it literally just does not exist
                displayAnim("\nthat account does not exist! use 'signup' to sign up with a new account!", 7);
            }
        } else if (argCommand == "signup") {
            // sign up
            var mmm = argComm(commandInit);
            accountsregistry = JSON.parse(localStorage.getItem("accounts"));
            var inusername = mmm[1];
            signup_username = inusername;

            if (locked_accounts.indexOf(inusername) > -1) { // it's a locked account
                displayAnim("\nsorry, that account is locked.", 7);    // youtuber apology video
            } else if (accountsregistry[inusername]) {           // if it's in the custom account registry
                displayAnim(`\nsorry, that account already exists. use 'login ${inusername}' to log into that account.`);
            } else if (default_accounts[inusername]) {              // if it's in default account registry
                displayAnim(`\nsorry, that account already exists. use 'login ${inusername}' to log into that account.`);
            } else {                    // it literally just does not exist
                displayAnim(`\nplease type in a password for new user '${inusername}'`);
                askInput(() => {
                    
                    accountsregistry[signup_username] = ask_return;

                    localStorage.setItem("accounts", JSON.stringify(accountsregistry));

                    displayAnim(`\nsuccessfully signed up and logged in as '${signup_username}'`, 10);
                    setUser(signup_username);
                });
            }
        } else if (commandInit == "oh") {
            displayAnim("\noh...", 20);
        } else if (commandInit == "OH") {
            displayAnim("\noH.............................................................................................................................................................................................................................................................", 20);
        } else if (command == "hack") {
            displayAnim("\nhack hack beep boop 011010101010011000001101010010101", 20);
            user = "hacker"
        } else if (command == "secret") {
            displayAnim("\nthere are no secrets.", 20);
        } else if (command == "aperture") {
            displayAnim(apertureLogo, 1);                                                                                
        } else if (command == "secrets") {
            displayAnim("\nthere is not a secret.js file.", 20);
        } else if (command == "cake") {
            displayAnim(cake, 1);
        } else if (command == "info" || command == "about") {
            aboutPage();
        } else if (command == "ae394") {
            var poopy = [
                "\nthere are no secrets in this console.                 \nnone.                 \nnone.",
            ];
            displayAnim(poopy, 20);
        } else if (command == "doe" || command == "doe's world" || command == "does world" || command == "catdoe" || command == "catdoe's world" || command == "catdoes world") {
            displayAnim("\nTWITCH.TV/DOESWORLDLIVE LETS GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO", 20);
        } else if (command == "logout") {
            displayAnim("\nlogged out to generic user.", 20);
            setUser("user");
        } else if (command == "what is the meaning of life?" || command == "what is the meaning of life" || command == "the meaning of life" || command == "meaning of life?" || command == "meaning of life") {
            displayAnim("\n42.", 40);
        } else if (command == "fast-clear") {
            clearScreen();
        } else if (command == "ls") {
            displayAnim(listy, 5);
        } else if (command == "colour text" || command == "colour text " || command == "colour back" || command == "colour back ") {
            displayAnim("\nplease input a proper colour code.", 10);
        } else if (argCommand == "color" || argCommand == "colour") {
            // check colours here
            // text: 7cfc00
            // background: 000000
            // accent: 1e1e1e
            var mmm = argComm(commandInit);
            var place = mmm[1];
            var colour = mmm[2];
            colour = `${colour}`.toLowerCase();  // for user easybility ™
            place = `${place}`.toLowerCase();
            console.log(colour)
            if (colour == "reset") {
                if (place == "text") {
                    colour = "#7cfc00";
                } else if (place == "background") {
                    colour = "#000000";
                } else if (place == "accent") {
                    colour = "#1e1e1e";
                }
            }
            if (place == "reset") {
                set_place = -10;
                colour = "#000000";
            }
            var code_wo_hash_test = /^[0-9A-F]{6}$/i.test(colour);      // i hate regex
            var code_w_hash_test = /^#[0-9A-F]{6}$/i.test(colour);
            debubg(`valid colour code but has no hash: ${code_wo_hash_test}`);
            debubg(`valid colour code that has hash: ${code_w_hash_test}`);
            debubg(`processing colour: ${colour}`);
            if (code_wo_hash_test == true || code_w_hash_test == true || inColourReg(colour) == true) { // if it's a valid colour code with OR without hash at beginning, or if it's in the colour registry
                // if its either a valid colour code with or without hash
                var in_colour = colour;
                if (inColourReg(colour) == true) {
                    in_colour = internal_colours[colour];
                }
                var contrast = true;
                var set_place = -1;
                var err_msg = "error: something has gone wrong and it didn't even set an error message, so something is DEFINITELY wrong";
                if (code_wo_hash_test == true) {    // if it doesnt have a hash
                    in_colour = `#${colour}`;       // add a hash
                }
                if (place == "text") {                                  // change text
                    set_place = 1;
                } else if (place == "background" || place == "back") {  // change background
                    set_place = 2;
                } else if (place == "accent") {                         // change accent
                    set_place = 3;
                } else if (place == "reset") {
                    set_place = -10;
                }
                debubg(`set place: ${set_place}`);
                var in_rgb = hexToRgb(in_colour);       // get rgb values of the stuff
                var text_rgb = hexToRgb(textcolour);
                var back_rgb = hexToRgb(backcolour);
                var accy_rgb = hexToRgb(accycolour);
                /*
                    time to do some teting in gimp to get data on the minimal rgb value change thats legible (tm)
                    
                    52 is the magic value
                */
                debubg("checking contrast values...");
                if (set_place == 1) {       // text
                    var back_diff = {
                        "r": Math.abs(back_rgb.r - in_rgb.r),
                        "g": Math.abs(back_rgb.g - in_rgb.g),
                        "b": Math.abs(back_rgb.b - in_rgb.b)
                    }
                    console.log(back_diff);
                    if (back_diff.r < 52 && back_diff.g < 52 && back_diff.b < 52) {
                        debubg("contrast is not contrasty enough to have the text be legible!!");
                        contrast = false;
                    }
                } else if (set_place == 2) {     // background
                    var text_diff = {
                        "r": Math.abs(text_rgb.r - in_rgb.r),
                        "g": Math.abs(text_rgb.g - in_rgb.g),
                        "b": Math.abs(text_rgb.b - in_rgb.b)
                    }
                    console.log(text_diff);
                    if (text_diff.r < 52 && text_diff.g < 52 && text_diff.b < 52) {
                        debubg("contrast is not contrasty enough to have the text be legible!!");
                        contrast = false;
                    }
                } else if (set_place == -1) {
                    contrast = false;
                }
                if (contrast == true && set_place > 0) {
                    // check  the places (tm)
                    if (set_place == 1) {
                        setTextColour(in_colour, true);
                    } else if (set_place == 2) {
                        setBackColour(in_colour, true);
                    } else if (set_place == 3) {
                        setAccyColour(in_colour, true);
                    }
                    displayAnim(`\n${place} colour has been set.`)
                } else if (set_place == -10) {
                    setColour("#7cfc00", true, "#000000", true, "#1e1e1e", true);
                    displayAnim("\nall colours have been reset.", 7);
                } else {
                    if (set_place == -1) {
                        displayAnim("\ninvalid argument. use either 'text', 'background', or 'accent'!", 7);
                    } else {
                        // ask if you want to set it even if the contrast is low (REMEMBER TO MENTION TYPING 'RESET' TO RESET CONSOLE!!);
                        var yaya = "";
                        var tata = "";  // i didnt mention reset, it's fine
                        if (set_place = 1) {
                            yaya = "text";
                            tata = "background";
                        } else {
                            yaya = "background";
                            tata = "text";
                        }
                        displayAnim(`\nuh oh! the ${yaya} colour you would like to set is very close to the ${tata} colour, and you may not be able to see any text on the console. \nare you sure you would like to set the text colour? \n(type yes or no) \n(only do this if you know what you're doing!)`, 5);
                        cur_set_colour = in_colour;
                        cur_set_place = set_place;
                        askInput(() => {
                            if (ask_return == "yes" || ask_return == "y") {
                                // set the colour anyways
                                if (cur_set_place == 1) {
                                    setTextColour(cur_set_colour, true);
                                } else if (cur_set_place == 2) {
                                    setBackColour(cur_set_colour, true);
                                }
                            } else {
                                // dont
                                displayAnim("\ncolour set has been cancelled!", 7);
                            }
                        });
                    }
                }
            } else {
                async function invalid() {
                    await displayAnim("\ninvalid colour code. if you are having trouble, try copying the HEX colour code from this ", 7);    
                    await displayAnim("colour picker", 7, "inherit", "https://htmlcolorcodes.com/");
                    await displayAnim(".", 7);
                }
                invalid();
            }
        } else if (command == "sus" || command == "among us" || command == "amogus" || command == "amongus" || command == "amon gus" || command == "sussy") {
            displayAnim(amogus, 1);
        } else if (command == "lovejoy") {
            displayAnim(lovejoy, 1);
        } else if (argCommand == "arg-test") {
            var mmm = argComm(commandInit);
            var inbo = [
                `\nFULL COMMAND: ${commandInit}`,
                `\nCOMMAND: ${mmm[0]}`,
                `\nFIRST ENTRY: ${mmm[1]}`,
                `\nSECOND ENTRY: ${mmm[2]}`
            ];
            displayAnim(inbo, 10);

        } else if (command == "help -art") {
            displayAnim(hlepart, 1);
        } else if (command == "help -dev") {
            displayAnim(hlepdev, 1);
        } else if (command == "clear -cache") {

            if (confirm("WARNING: clearing the cache will remove ALL DATA saved from your adventures on this site. Are you sure you want to clear the cache?")) {
                var dev_ex = true;
                if (localStorage.getItem("dev-exploit") == 1) {
                    dev_ex = false;
                }
                localStorage.clear();

                if (dev_ex == false) {
                    localStorage.setItem("dev-exploit", 1);
                }
                
                debubg("cache cleared");
                location.reload();
            } else {
                displayAnim("\ncache has not been cleared.");
                debubg("user thought about their decisions and did not clear the cache")
            }
            
        } else if (command == "clear -cache -ignore") {
            localStorage.clear();
            debubg("cache cleared");
            location.reload();
        } else if (command == "debug") {
            debug = !debug;         // toggle it to be the opposite

            debugWindow(debug);     // do whatever it needs to to the window


        } else if (command == "reboot") {
            location.reload();
        } else if (command == "cheese") {
            displayAnim(cheese, 1);
        } else if (command == "snake") {
            snakeGameStart();

        } else if (command == "ascii" || command == "ascii ") {
            parseCommand("man ascii");
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
            displayAnim("\n");
            //displayAnim(`${tata}`, 20);
            var asciifinal = asciiText(fonty, `${tata}`);
            displayAnim(asciifinal, 0.1);

            coopyIf(asciifinal);

            coopy = false;
            
        } else if (command == "history") {
            //debubg(commang);
            displayAnim("\n");
            if (commandHistory.length > 0) {
                var YAYA = commandHistory.slice(0);
                YAYA.unshift("COMMAND HISTORY:");
                displayAnim(YAYA, 5);
                //debubg(commang);
            } else {
                displayAnim(`Command history is empty. type a command to make it not empty!`);
            }
        } else if (argCommand == "cinfo") {
            var mmm = argComm(commandInit);
            mmm.shift();
            debubg(mmm);
            var eggy = mmm.join(" ");
            debubg(eggy);
            var fried = eggy.split("");
            debubg(fried);
            var code = "";
            var legy = eggy.length;
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

            
            displayAnim("\n");
            displayAnim(`${code}`, 20);
        } else if (command == "font list") {
            displayAnim(fomb, 5);
        } else if (command == "copylist") {
            displayAnim(cpoylist, 1);
        } else if(command == "copycomm") {
            displayAnim("\nplease include a command to copy!", 7) // this way it doesn't copy `undefined`
        } else if (argCommand == "copycomm") {
            var mmm = argComm(commandInit);
            var commen = mmm[1];
            copycomm = commen;
            
            if (copycomm != "" && copycomm != undefined && copycomm != null) {  // if copycomm input is not empty
                debubg(`set copy comment to ${copycomm}`);
                displayAnim(`\nset copy comment to ${copycomm}`, 7);
            } else {    // else
                displayAnim("\nplease enter valid text!!", 7);
            }
            
            
        } else if (command == "debug -v") {
            debugvar = !debugvar;         // toggle it to be the opposite

            debugVarWindow(debugvar);     // do whatever it needs to to the window

            if (user == "dev") {
                displayAnim("\nWARNING: if you aren't using a local server to host this, debug -v doesn't work!! (i tried to fix it, trust me)", 1);
            }
        } else if (command == "convert -list") {
            displayAnim(convertlist, 1);
            
            
        } else if (command == "convert") {
            displayAnim("\nplease check the convert manpage. ('man convert')", 5);
            
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
            

            displayAnim(`\n${output}`, 5);
            coopyIf(output);
        
        
        
        } else if (command == "pebblebrain" || command == "pebble brain") {
            displayAnim(pebblebrain, 1);
            coopyIf(pebblebrain);
        } else if (argCommand == "man") {
            var mmm = argComm(commandInit);
            mmm.shift();
            var incommand = mmm.join(" ");

            updateMan();

            debubg(`[MAN] queueing command ${incommand}.`);
            
            // the internet tells me to never use eval() but i don't care because this is not running on a full on web server so crime war
            // haha im not using eval anymore get #trolled

            var haha;

            if (man[incommand]) {   // if it exists
                debubg("command is in man registry.");

                if (typeof man[incommand] == 'string') {
                    var hehe = man[incommand];
                    haha = man[hehe];
                } else {
                    haha = man[incommand];
                }
                
            } else {
                debubg("command is not in man registry.")
                haha = "there is no current man page for this command.";
            }

            
        

            displayAnim("\n");
            smartAnim(haha, 3);
        
        } else if (command == "benson") {
            displayAnim(benson, 5)
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
            var shareLink = `https://dapug.lol/console?debug=${debug}&debugvar=${debugvar}${suggest}&textcolour=${textcolour.split("#")[1]}&backcolour=${backcolour.split("#")[1]}&accentcolour=${accycolour.split("#")[1]}`;
            debubg(`share link generated: ${shareLink}`);
            copyclip(shareLink);

            async function eyes(){
                displayAnim("\n");
                await newLinkAnim("generated link", 10, shareLink);
                displayAnim(" copied to clipboard.", 10);
            }

            eyes();

            
        } else if (command == "reset" ) {
            // full hard reset on everything
            if (confirm("WARNING: clearing the cache will remove ALL DATA, and ALL SETTINGS. Are you sure you want to reset?")) {
                var dev_ex = true
                if (localStorage.getItem("dev-exploit") == 1) {
                    dev_ex = false;
                }
                localStorage.clear();
                if (dev_ex == false) {
                    localStorage.setItem("dev-exploit", 1);
                }
                debubg("cache cleared");
                let path = window.location.href.split('?')[0];
                debubg(path);
                window.location.replace(path);
            } else {
                displayAnim("\ncache has not been cleared.");
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
                    displayAnim("\ncolourblind mode has been turned on.", 10);
                } else {
                    worbleColourblind(false);
                    displayAnim("\ncolourblind mode has been turned off.", 10);
                }
            } else if (mmm[1] == "guess") {

                if (worble_status == false) { // not in game
                    // make a new worble
                    displayAnim("\n");
                    displayAnim(worble_error_2, 10);
                } else {
                    // guess worble
                    var guessword = mmm.slice(2).join(" ");
                    
                    if (worble_word.length < `${guessword}`.length) {
                        displayAnim(`\nuh oh! your guess is too long! the word is ${worble_word.length} characters long.`, 10);
                    
                    } else if (worble_word.length > 10) {  // more than 10 letters

                        debubg("AAAAAAAAAAAAA ITS LONGER THAN 10");
                        // do the guessing
                        guessWorble(guessword);

                        if (worble_status == false) {
                            worbleDone();
                        }


                    } else {// below or equal to 10 characters
                        if (`${guessword}`.length != worble_word.length) {
                            var long = "";
                            if (`${guessword}`.length > worble_word.length) {
                                long = "too long";
                            } else {
                                long = "too short";
                            }
                            displayAnim(`\nuh oh! your guess is ${long}! the word is ${worble_word.length} characters long.`, 10);
                    
                        } else {
                    
                            
                            // do the guessing
                            guessWorble(guessword);

                            if (worble_status == false) {
                                worbleDone();
                            }
                        }
                    }
                }
            
            
            } else if (mmm[1] == "start") {
                if (worble_status == true) { // in game
                    // make a new worble
                    displayAnim("\n");
                    displayAnim(worble_error_1, 10);
                } else {
                    newWorble(false);
                }
            } else if (mmm[1] == "restart" || mmm[1] == "reset") {
                if (worble_status == false) {
                    newWorble();
                } else {
                    restartWorble();
                }
            } else if (mmm[1] == "info") {
                worbleInfoPage();
                coopyIf(worble_infoscreen.slice(6));
            } else if (mmm[1] == "share") {
                shareWorblePage();
            } else if (mmm[1] == "stats") {
                worbleStats(false);
                coopyIf(infotm);
            } else if (mmm[1] == "custom") {
                worble_word_id = "custom";
                var guessword = mmm.slice(2).join(" ");
                if (worble_status == true) { // in game
                    // make a new worble
                    newWorble(true, guessword);
                } else {
                    newWorble(false, guessword);
                }
                
            } else {
                displayAnim("\ninvalid sub command! use 'worble' or 'man worble' to see all the options!", 10);
            }





        } else if (command == "fitness" || command == "fitness gram" || command == "fitness gram pacer" || command == "fitness gram pacer test") {
            fitnessGram();
        } else if (command == "uwu" || command == "uwu ") {
            displayAnim("\nincorrect usage. check 'man uwu' for how to use.", 10);
        } else if (argCommand == "uwu") {
            var mmm = argComm(commandInit);
            mmm.shift();
            var inputtext = mmm.join(" ");
            debubg(inputtext);
            inputtext = inputtext.toLowerCase();
            var translated = replaceFromJson(`${inputtext}`, uwu_translate);
            displayAnim(`\n${translated}`, 10);
            coopyIf(translated);
        } else if (command == "issue" || command == "issue " || command == "error" || command == "error ") {
            displayAnim("\nopening github...", 10);
            window.open("https://github.com/caeserlettuce/dapug-console/issues/new");
        } else if(command == "music" || command == "music ") {                  // the main music page
            musicPage();
        } else if (command == "music play" || command == "music play ") {       // playing (resuming) music
            if (music_playing == true) {
                if (paused_lyrics == true) {   // go and unpause the lyrics
                    music.play();
                    paused_lyrics = false;
                } else {
                    displayAnim(`\nmusic is already playing!`, 7);
                }
            } else {
                displayAnim(`\nthere's no music to play! check 'music' for help!`, 7);
            }
        } else if (command == "music pause" || command == "music pause ") {     // pausing music
            if (music_playing == true) {
                if (paused_lyrics == false) {   // go and pause the lyrics
                    music.pause()
                    displayAnim(`\nmusic has been paused.`, 7);
                    paused_lyrics = true
                } else {
                    displayAnim(`\nmusic is already paused!`, 7);
                }
            } else {
                displayAnim(`\nmusic is not playing!`, 7);
            }
        } else if (command == "music skip" || command == "music skip ") {       // skipping music
            if (music_playing == true) {
                music.currentTime = music.duration - 0.5; // put it at the end so it ends the song (tm)
                lyr_disp = new Object();
            } else {
                displayAnim(`\nthere is no current song playing!`, 7);
            }
        } else if (command == "music list") {
            parseCommand("songlist");
        } else if (argCommand == "music") {     // all the fancy music stuff
            var mmm = argComm(commandInit);
            var eee = [...mmm];
            eee.shift();
            eee.shift();

            if (mmm[1].toLowerCase() == "play") {                                             // you wanna play a song? hm? you wanna? wanna play a song???? try it??!?? bet you can't!! HM!!!
                var songname = eee.join(' ');
                songname = songname.toLowerCase();
                var songname = `${songname}`.replaceAll('"', "").replaceAll("-", " ").replaceAll("'", "");
                
                debubg(`[SONG™] queueing song ${songname}.`);
                
                debubg(songname);

                var existent = false;
                paused_lyrics = false;

                if (songs[songname]) {
                    existent = true;
                }
                
                if (existent == true) {     // song is in the system!!! yay!!!!11!1!11!
                    
                    if (in_queue == false) {

                        if (music_playing == true) {
                            clearInterval(lyric_interval);
                            lyr_status = new Object();
                        }


                        displayAnim("\n");
                        var song_lyrics = songs[songname]["lyrics"];

                    
                        music_loading = true;
                        playMusic(songname);
                        displayLyrics(songname);
                        checkNotificationPromise();
                        send_notif({"title": `now playing: ${songs[songname]["name"]}`, "text": `${songs[songname]["artist"]} - ${songs[songname]["album"]}`, "icon": `${songs[songname]["art"]}`});
                        
                        if (song_err == false) {
                            setSongInfo(`${songname}`);
                        }
                        

                        document.getElementById("songinfo").style.display = "";
                        
                        


                        if (song_err == true) {
                            debubg("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa");
                        }
                        
                        lyr_disp = song_lyrics; // set the current lyrics
                    } else {
                        displayAnim("\nyou're in a music queue! use 'queue leave' to leave the queue, and try again!", 7);
                    }
                } else {                    // hello gordon
                    displayAnim(`\nsong is not in registry. please use 'songlist' to get the list of songs supported.`, 10);
                }


            } else if (mmm[1].toLowerCase() == "volume") {
                var volum = mmm[2];
                volum = parseInt(volum);
                debubg(volum);
                if (isFinite(volum) == true) {// if its an integet
                    // set volume
                    var newVOL = volum / 100;
                    if (newVOL < 5 && newVOL >= 0) { // inside of range
                        music.volume = newVOL;
                        displayAnim(`\nvolume set to ${volum}`, 7);
                    } else {
                        displayAnim("\nplease enter a valid volume between 0 and 100.", 7);
                    }
                } else {
                    //displayAnim("\nplease enter a valid volume between 0 and 100.", 7);
                    displayAnim(`\nto change volume, please enter a valid number between 0 and 100. \ncurrent volume is ${music.volume * 100}`)
                }
            } else {
                displayAnim("\ninvalid music operation. check 'man music' for help.", 7);
            }
        } else if (command == "songlist") {
            var songlist = new Array();
            var namelist = new Array();
            var artistlist = new Array();
            var albumlist = new Array();
            var fulllist = new Array();
            var songlabel = "song id";
            var namelabel = "song name";
            var artistlabel = "artist";
            var albumlabel = "album";
            var keystm = Object.keys(songs);
            var songlen = new Array();
            var namelen = 0;
            var artistlen = 0;
            var albumlen = 0;
            for (i in keystm) {
                var key = keystm[i];
                var info = songs[key];
                //console.log(info);
                var song = `${key}`;
                var name = `${info["name"]}`;
                var artist = `${info["artist"]}`;
                var album = `${info["album"]}`;
                if (song.length > songlen) {
                    songlen = song.length;
                }
                if (name.length > namelen) {
                    namelen = name.length;
                }
                if (artist.length > artistlen) {
                    artistlen = artist.length;
                }
                if (album.length > albumlen) {
                    albumlen = album.length;
                }
                if (songlabel.length > songlen) {
                    songlen = songlabel.length;
                }
                if (namelabel.length > namelen) {
                    namelen = namelabel.length;
                }
                if (artistlabel.length > artistlen) {
                    artistlen = artistlabel.length;
                }
                if (artistlabel.length > artistlen) {
                    artistlen = artistlabel.length;
                }
            }
            for (i in keystm) {                 // for all the keys in song (for all the songs in registry);
                var key = keystm[i];
                var info = songs[key];
                //console.log(info);
                var song = `${key}`;
                var name = `${info["name"]}`;
                var artist = `${info["artist"]}`;
                var album = `${info["album"]}`;
                //console.log("before:");
                //console.log(`'${song}'`);
                //console.log(`'${name}'`);
                //console.log(`'${artist}'`);
                //console.log(`'${album}'`);
                if (song.length < songlen) {
                    var diff = songlen - song.length;
                    song = `${song}${" ".repeat(diff)}`;
                }
                if (name.length < namelen) {
                    var diff = namelen - name.length;
                    name = `${name}${" ".repeat(diff)}`;
                }
                if (artist.length < artistlen) {
                    var diff = artistlen - artist.length;
                    artist = `${artist}${" ".repeat(diff)}`;
                }
                if (album.length < albumlen) {
                    var diff = albumlen - album.length;
                    album = `${album}${" ".repeat(diff)}`;
                }
                if (songlabel.length < songlen) {
                    var diff = songlen - songlabel.length;
                    songlabel = `${songlabel}${" ".repeat(diff)}`;
                }
                if (namelabel.length < namelen) {
                    var diff = namelen - namelabel.length;
                    namelabel = `${namelabel}${" ".repeat(diff)}`;
                }
                if (artistlabel.length < artistlen) {
                    var diff = artistlen - artistlabel.length;
                    artistlabel = `${artistlabel}${" ".repeat(diff)}`;
                }
                if (albumlabel.length < albumlen) {
                    var diff = albumlen - albumlabel.length;
                    albumlabel = `${albumlabel}${" ".repeat(diff)}`;
                }
                //console.log("after:");
                //console.log(`'${song}'`);
                //console.log(`'${name}'`);
                //console.log(`'${artist}'`);
                //console.log(`'${album}'`);
                songlist.push(song);       // add the song to the list
                namelist.push(name);       // add the name to the list
                artistlist.push(artist);       // add the artist to the list
                albumlist.push(album);       // add the album to the list
            }
                //│┴┬├─┤┼┌┐└┘
                //┃┻┳┣━┫╋┏┓┗┛
                //║╩╦╠═╣╬╔╗╚╝
                // ╨╤╟ ╡╪╓╖╙╜
                // ╧╥╞ ╢╫╒╕╘╛
                //╿┸┯┞ ┦╀┍┑┖┚
                //╽┷┰┟ ┧╁┎┒┕┙
                // ┵┭┠╾┥┽╭╮╯╰
                // ┶┮┝╼┨┾
                // ┹┱┡ ┩╇
                // ┺┲┢ ┪╈
                //╹   ╸ ╃
                //╻   ╺ ╄
                //╵   ╴ ╅
                //╷   ╶ ╆
                //    ╳ ╉
                //    ╱ ╊
                //    ╲ ┿
                //      ╂
                //          ↖
                //▓▒░
                //▗▖▝▘▟▙▜▛▚▞█
                //▉▊▋▌▍▎▏
                //▇▆▅▄▃▂▁
                //

            
            for (i in songlist) {
                fulllist.push(`│${songlist[i]} │ ${namelist[i]} │ ${artistlist[i]} │ ${albumlist[i]}│`);
            }
            fulllist.sort();                    // sort by alphabet
            fulllist.unshift(`├${"─".repeat(songlen)}─┼─${"─".repeat(namelen)}─┼─${"─".repeat(artistlen)}─┼─${"─".repeat(albumlen)}┤`);
            fulllist.unshift(`│${songlabel} │ ${namelabel} │ ${artistlabel} │ ${albumlabel}│`);
            fulllist.unshift(`┌${"─".repeat(songlen)}─┬─${"─".repeat(namelen)}─┬─${"─".repeat(artistlen)}─┬─${"─".repeat(albumlen)}┐`);
            fulllist.unshift(" ");
            fulllist.unshift("Here's all the songs currently available for playback:");
            fulllist.unshift(" ");
            fulllist.push(`└${"─".repeat(songlen)}─┴─${"─".repeat(namelen)}─┴─${"─".repeat(artistlen)}─┴─${"─".repeat(albumlen)}┘`);
            fulllist.push(" ");
            fulllist.push("use 'music play [song id]' to play a song!");
            fulllist.push("and 'music volume [volume level]' to change the volume!");
            fulllist.push("(check 'music' for more options)");
            //console.log(songlist);
            displayAnim("\n");
            displayAnim(fulllist, 0.01);

        } else if (command == "portal") {   // play portal 1 music
            parseCommand("portal1");
        } else if (command == "portal1") {
            portal_playing = true;
            clearScreen();
            parseCommand("music play still alive");
            //setTextColour("#c6922b", false);
            //setBackColour("#010302", false);
            setColour("#c6922b", false, "#010302", false, "#1e1e1e", false);
            inputlock = true;
            document.getElementById("p1cred").style.display = "";
            document.getElementById("p1ascii").style.display = "";

        } else if (command == "portal2") {
            portal_playing = true;
            clearScreen();
            parseCommand("music play want you gone");
            //setTextColour("#ffb44d", false);// ACTRUAL : #ffb44d
            //setBackColour("#a15606", false);// ACTUAL: #a15606
            //setAccyColour("#f68309", false);
            setColour("#ffb44d", false, "#a15606", false, "#f68309", false);
            document.getElementById("songinfomouse").style.backgroundColor = "#f68309";
            document.getElementById("songinfomouse").style.color = "#ffb44d";
            document.getElementById("songinfo").style.borderColor = "#f68309";
            document.getElementById("songinfo").style.backgroundColor = "#a15606";
            inputlock = true;
            document.getElementById("p2cred").style.display = "";
        } else if (command == "egg") {
            egg = !egg;
            displayAnim("\n>:)", 20);

        }  else if (argCommand == "zoom") { // this modifies the text size
            var mmm = argComm(commandInit);

            if (isNaN(mmm[1]) == false) {
                if (mmm[1] >= 0.1 && mmm[1] <= 20) {
                    sizemod = mmm[1];
                    sizeCheck();
                    displayAnim(`\nset font size to ${sizemod}`);
                } else {
                    displayAnim("\nplease enter a value between 0.1 and 20!");
                }

            } else {
                displayAnim(`\nzoom level is at ${sizemod}, please enter a valid number or check the man page!`, 7);
            }
        } else if (command == "credits" || command == "credits ") {
            // display fancy credits
            clearScreen();
            setColour("#7cfc00", false, "#000000", false, "#1e1e1e", false);
            inputlock = true;
            credits_playing = true;
            debubg("playing credits!!! thank you for using this silly little website!");
            parseCommand("music play meal thyme");
            lyr_disp = site_credits;
            credits_playing = true;
        } else if (command == "theme" || command == "theme " || command == "theme import" || command == "theme import " || command == "theme install" || command == "theme install " || command == "theme export" || command == "theme export " || command == "theme share" || command == "theme share ") {                 // show theme manpage
            parseCommand("man theme");
        } else if (command == "themes" || command == "themes " || command == "themelist" || command == "themelist " || command == "theme list" || command == "theme list ") {      // show list of themes

            // make the table object tm

            var def_table = [
                {
                    "name": "name",
                    "contents": [
                    ]
                },
                {
                    "name": "author",
                    "contents": [
                    ]
                }
            ]
            var cus_table = [
                {
                    "name": "name",
                    "contents": [
                    ]
                },
                {
                    "name": "author",
                    "contents": [
                    ]
                }
            ]
            for (i in themes) {
                def_table[0]["contents"].push(themes[i]["name"]);
                def_table[1]["contents"].push(themes[i]["author"]);
            }
            for (i in custom_themes) {
                cus_table[0]["contents"].push(custom_themes[i]["name"]);
                cus_table[1]["contents"].push(custom_themes[i]["author"]);
            }

            var table1 = generateTable(def_table, "default");
            var table2 = generateTable(cus_table, "default");

            //console.log(def_table);
            //console.log(cus_table);

            console.log(table1);
            console.log(table2);

            themelist(table1, table2);

        } else if (argCommand == "theme") { // main parsing for theme command
            var mmm = argComm(commandInit);
            var eee = argComm(commandInit);

            var operation = mmm[1];     // if it's theme save, theme use, theme list, theme import, theme export (theme share), etc.

            eee.shift();        // remove first two entries to get the rest of the stuff
            eee.shift();

            var nametm = eee.join(" ");

            var actualname = nametm;
            
            var lastChar = nametm[nametm.length -1];

            if (lastChar == " ") {
                nametm = nametm.slice(0, -1);
            }

            nametm = nametm.replaceAll("-", " ");
        
            var lowname = nametm.toLowerCase();

            operation = operation.toLowerCase();

            debubg(`theme command has been called. parsed: operation: ${operation}, name: ${nametm}`);

            if (operation == "use") {
                if (custom_themes[lowname]) { // if it exists in the custom themes
                    debubg("theme exists as a customs theme!!");
                    // custom themes is first so that way if someone has a custom theme named, say, 'rose', and then we make a theme called rose, they can still access their theme
                    var tem = custom_themes[lowname]; // HOI IM TEMMIE!!!!!!!
                    setColour(tem["text colour"], true, tem["back colour"], true, tem["accy colour"], true);

                    if (tem["font"]) {  // if theme has a font
                        setFont(tem["font"]);
                    }


                    displayAnim(`\nusing theme '${lowname}'!`, 7);

                } else if (themes[lowname]) {   // if it exists in the default themes
                    debubg("theme exists as a default theme!!");
                    var tem = themes[lowname]; // HOI IM TEMMIE!!!!!!!
                    setColour(tem["text colour"], true, tem["back colour"], true, tem["accy colour"], true);


                    if (tem["font"]) {  // if theme has a font
                        setFont(tem["font"]);
                    }

                    displayAnim(`\nusing theme '${lowname}'!`, 7);

                } else {
                    debubg("theme does not exist this is stupid");
                    displayAnim("\nthe theme that you attempted to use does not exist! you can save your current colour scheme using 'theme save [name]',\nor list all available themes with 'theme list'");
                }

            } else if (operation == "save") {

                if (nametm == "" || nametm == undefined || nametm == null) {
                    displayAnim("\nplease enter a valid theme name!", 7)
                } else if (themes[lowname]) {   // if it exists in the default themes
                    debubg("theme exists as a default theme!!");
                    displayAnim("\nthere's already a default theme with that name! (default themes cannot be changed)", 7);
                } else if (custom_themes[lowname]) { // if it exists in the custom themes
                    debubg("theme exists as a customs theme!!");
                    // custom themes is first so that way if someone has a custom theme named, say, 'rose', and then we make a theme called rose, they can still access their theme
                    displayAnim(`\nthe theme '${lowname}' already exists. would you like to overwrite this theme? (y/n)`, 7);
                    askInput(() => {
                        if (ask_return == "y") {            // yes overwrite it
                            saveTheme(nametm);      // save the theme
                            displayAnim(`\nsaved theme '${nametm}' to your custom themes.`, 7);
                        } else if (ask_return == "n") {     // no dont overwrite it
                            displayAnim(`\ntheme has not been saved to custom themes. input a different name and try again!`, 7);
                        }
                    });
                } else {
                    debubg("theme does not exist");
                    saveTheme(nametm);              // save the theme
                    displayAnim(`\nsaved theme '${nametm}' to your custom themes.`, 7);
                }

            } else if (operation == "import" || operation == "install") {
                
        
                

                if (nametm != "" && nametm != undefined && nametm != null) {
                
                    console.log(nametm);

                    var broken = false;
                    // code redo (tm)

                    try {
                        // {"name":"Git","author":"18gallons","text colour":"#b1d1d9","back colour":"#0d1117","accy colour":"#238636"}
                        var in_ = JSON.parse(actualname);   // dont ask me why thats called actualname, because i don't know either, but it works so... ¯\_(ツ)_/¯

                        if (in_["name"] == undefined) {
                            broken = true;
                        } else if (in_["author"] == undefined) {
                            broken = true;
                        } else if (in_["text colour"] == undefined) {
                            broken = true;
                        } else if (in_["back colour"] == undefined) {
                            broken = true;
                        } else if (in_["accy colour"] == undefined) {
                            broken = true;
                        }

                        if (broken == true) {
                            throw new Error('aaaaaa!!!!!'); // if one of those values are undefined, throw an error and say it's invalid
                        } else if (broken == false) {

                            var theme_in = JSON.parse(actualname);
                            var theme_name = theme_in["name"].toLowerCase();
                            if (themes[theme_name] || custom_themes[theme_name]) {
                                // if that note already exists with that name
        
                                displayAnim(`\nuh oh! a theme with the name '${theme_name}' already exists! what would you like to name this theme?`, 4);
                                askInput(() => {
                                    // get new name
                                    var nam = ask_return;
                                    var nam_low = nam.toLowerCase();
        
                                    if (themes[nam_low] || custom_themes[theme_name]) {
                                        displayAnim("\nthere is a theme with that name also! please use 'themes' to get a list of all themes, and try again with a theme name that is not taken!", 4);
                                        debubg("bruh this is the second time that you have chosen a theme name that exists lmao try again nerd /lh");
                                    } else {
                                        // chose a good boy name that isnt taken ™
        
                                        theme_in["name"] = nam;  // sets the JSON name to the name you inputted
                                        
                                        rawSaveTheme(theme_in);
                                        
                                        displayAnim("\ntheme saved.", 7);
                                    }
                                            // i literally wrote this code like 7 minutes ago and i've already forgotten what half of it does
                                });
                            } else {    // if it doesn't exist in the notes already

                                rawSaveTheme(theme_in);
                                displayAnim("\ntheme saved.", 7);
                            }

                        }

                    } catch (err) {
                        erry("A!!! the theme JSON is invalid!!!");
                        displayAnim("\ninvalid theme!", 7);
                    }


                    /*
                    rawSaveTheme(naaa, aut, txt, bac, acc);
                    displayAnim(`\nthe theme '${naaa}' has been saved. use 'theme use ${lowname}' to use the theme!`, 7);
                    */       


                } else { // if it is bad
                    displayAnim("\nplease enter a valid theme! use 'theme export [theme name]' to export a theme!", 7);
                }

                






            } else if (operation == "export" || operation == "share") {
                // time to export theme
                
            
                if (nametm != "" && nametm != undefined && nametm != null) {
                    displayAnim("\nplease enter a valid theme name!", 7)
                } else if (themes[lowname]) {   // if it exists in the default themes
                    debubg("theme exists as a default theme!!");
                    var share = JSON.stringify(themes[lowname]);
                    debubg(`exported theme: ${share}`);
                    copyclip(share);
                    displayAnim("\nexported theme copied to clipboard. import it again by using 'theme import [exported theme]'");
                } else if (custom_themes[lowname]) { // if it exists in the custom themes
                    debubg("theme exists as a custom theme!!"); // airport customs
                    var share = JSON.stringify(custom_themes[lowname]);
                    debubg(`exported theme: ${share}`);
                    copyclip(share);
                    displayAnim("\nexported theme copied to clipboard. import it again by using 'theme import [exported theme]'");
                } else {
                    debubg("theme does not exist");
                    displayAnim(`\ntheme '${nametm}' does not exist! check 'themelist' for a list of available themes.`, 7);
                }
                

            } else if (operation == "delete" || operation == "remove" || operation == "kill" || operation == "murder") {
                if (nametm == "" || nametm == undefined || nametm == null) {
                    displayAnim("\nplease enter a valid theme name!", 7)
                } else if (themes[lowname]) {   // if it exists in the default themes
                    displayAnim(`\n'${lowname}' is a default theme, and cannot be edited or deleted.`, 7);
                } else if (custom_themes[lowname]) { // if it exists in the custom themes
                    displayAnim(`\nare you sure you want to delete '${lowname}' forever? (a long time!)  (y/n)`, 7);
                    askInput(() => {
                        if (ask_return == "y") {
                            delete custom_themes[lowname];
                            localStorage.setItem("themes", JSON.stringify(custom_themes));
                            displayAnim(`\nthe theme '${lowname}' has been deleted.`, 7);
                        } else if (ask_return == "n") {
                            displayAnim(`\ntheme has not been deleted.`, 7);
                        }
                    });
                } else {
                    debubg("theme does not exist");
                    displayAnim(`\ntheme '${nametm}' does not exist! check 'themelist' for a list of available themes.`, 7);
                }
            } else if (operation == "clear") {
                
            } else {
                displayAnim("\ninvalid theme command! check 'man theme' for all possible theme commands", 7);
            }

        } else if (command == "stars" || command == "stars ") {
            stars();
        } else if (command == "asciigame") {            // thank you caffy, for this beautiful command
            displayAnim("\nyou know the rules", 13);
            setTimeout(() => {

                displayAnim("\nAND SO DO I", 20);
                
                }, 534);
            setTimeout(() => {

                window.open("https://www.youtube.com/watch?v=-AXetJvTfU0");
                
                }, 1000);  
        } else if (command == "caffy") {
            displayAnim(caffy, 0.5);
        } else if (command == "dog") {
            startDog();
        } else if (command == "manlist") {
            var manlist_tm = "\nALL EXISTING MANPAGES:";

            for (keys in man) {         // loop for every key entry in man
                manlist_tm += `\n${keys}`;  // add command name (tm)
            }

            displayAnim(manlist_tm, 0.25);
        } else if (command == "accounts") {
            // lists all the accounts
            
            var accounts = "\nBuilt-in accounts:\n";

            for (keys in default_accounts) {
                accounts += `\n${keys}`;
            }
            accounts += "\n\nYour accounts:\n";

            if (typeof accountsregistry == 'object') {
                for (keys in accountsregistry) {
                    accounts += `\n${keys}`;
                }
            } else if (typeof accountsregistry == 'string') {
                for (keys in JSON.parse(accountsregistry)) {
                    accounts += `\n${keys}`;
                }
            }
            

            displayAnim(accounts, 1);
    
        } else if (command == "colours" || command == "colors") {
            // list colours tm tm mtt mtm mtm mt mtmmt mt mtm ma,maafrajhfakl;ahfha;laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            var cons_col = [
                { "name": "element", "contents": [ "text", "background", "accent" ] },
                { "name": "current", "contents": [ `${textcolour}`, `${backcolour}`, `${accycolour}` ] },
                { "name": "default", "contents": [ `${def_textcolour}`, `${def_backcolour}`, `${def_accycolour}` ] } 
            ]
            var int_col = [
                { "name": "colour name", "contents": [] },
                { "name": "hex value", "contents": [] }
            ]
            for (key in internal_colours) {
                int_col[0]["contents"].push(key);                   // push colour name
                int_col[1]["contents"].push(internal_colours[key]); // push colour key
            }
            async function infotm() {   // async printing of colours tmtmtmtmmtmt mtm mt m
                await displayAnim("\nCONSOLE COLOUR INFO:\n\n", 4);
                await displayAnim(generateTable(cons_col), 0.5);
                await displayAnim("\n\nINTERNAL COLOUR INFO:\n(this means all colours you can use in place of any hex values, \nexample being the colour command; you can type 'colour text red' and\nit will set the text colour to red.)\n\n", 1)
                await displayAnim(generateTable(int_col), 0.5);
            }
            infotm();
        } else if (command == "adventures") {

            var adv_tab = [
                { "name": "internal name", "contents": [] },
                { "name": "name", "contents": [] },
                { "name": "author", "contents": [] },
                { "name": "description", "contents": [] }
            ]


            for (keys in adventures) {
                adv_tab[0]["contents"].push(`${keys}`);
                adv_tab[1]["contents"].push(`${adventures[keys]["name"]}`);
                adv_tab[2]["contents"].push(`${adventures[keys]["author"]}`);
                adv_tab[3]["contents"].push(`${adventures[keys]["description"]}`);
            }
            //console.log(adv_tab);

            
            displayAnim(`\n${generateTable(adv_tab)}`, 0.25);

        } else if (argCommand == "adventure") {

            var mmm = argComm(commandInit);

            var adventure = [...mmm];
            adventure.shift();
            adventure = adventure.join(" ");

            debubg(`adventure: '${adventure}'`);

            if (adventures[adventure]) {    // if it exists
                debubg("adventure does exists!!");
                adventure_lock = true;
                mainlock = false;
                cur_ta = `${adventure}`;
                eval(`adventure_exe = ta_${adventure}`);   // sets the function name
                clearScreen();
                eval(`ta_start_${adventure}();`);   // sets the function name
            } else {
                debubg("¡HOLA SOY DORA! ¿PUEDE ENCONTRAR MI VOLUNTAD DE USAR JAVASCRIPT?");
                displayAnim("\nsorry, but that adventure could not be found. use 'adventure list' to get a list of adventures!", 5);
            }
        
        } else if (argCommand == "encode") {
            
            var mmm = argComm(commandInit);

            var hehehaha = [...mmm];

            hehehaha.shift();

            hehehaha = accspace(hehehaha.join(" "));

            console.log(hehehaha);

            var result = "";

            if (ciphers[hehehaha]) {
                // it egg
                cur_cipher = hehehaha;
                displayAnim("\nwhat text would you like to encode?", 7);
                askInput(() => {
                    var res = crypt("en", ask_return.toLowerCase(), cur_cipher);
                    copyclip(res);
                    displayAnim("\nyour encodeed text has been copied to clipboard.", 7);
                });
                debubg(result);            
            } else {
                // no egg :'(
                displayAnim(`\ni'm sorry, the cipher '${hehehaha}' cannot be found. use 'ciphers' to get a list of ciphers`, 7);
            }

        } else if (argCommand == "decode") {
            
            var mmm = argComm(commandInit);

            var hehehaha = [...mmm];

            hehehaha.shift();

            hehehaha = hehehaha.join(" ");

            console.log(hehehaha);

            var result = "";

            if (ciphers[hehehaha]) {
                // it egg
                cur_cipher = hehehaha;
                displayAnim("\nwhat text would you like to decode?", 7);
                askInput(() => {
                    var res = crypt("de", ask_return, cur_cipher);
                    copyclip(res);
                    displayAnim("\nyour decodeed text has been copied to clipboard.", 7);
                });
                debubg(result);            
            } else {
                // no egg :'(
                displayAnim(`\ni'm sorry, the cipher '${hehehaha}' cannot be found. use 'ciphers' to get a list of ciphers`, 7);
            }

        } else if (command == "ciphers" || command == "cipher list") {
            var cip_tab = [
                { "name": "internal name", "contents": [] },
                { "name": "name", "contents": [] },
                { "name": "author", "contents": [] }
            ]
            for (key in ciphers) {
                cip_tab[0]["contents"].push(key);
                cip_tab[1]["contents"].push(ciphers[key]["name"]);
                cip_tab[2]["contents"].push(ciphers[key]["author"]);
            }
            async function infotm() {   // async printing of colours tmtmtmtmmtmt mtm mt m
                await displayAnim("\nCIPHERS:\n\n", 4);
                await displayAnim(generateTable(cip_tab), 0.5);
            }
            infotm();
        } else if (command == "queue") {

            var que_tab = [
                { "name": "place", "contents": [] },
                { "name": "name", "contents": [] },
                { "name": "artist", "contents": [] },
                { "name": "album", "contents": [] }
            ]

            if (music_queue[0]) {
                for (i in music_queue) {
                    var somg = music_queue[i];
                    que_tab[0]["contents"].push(i);
                    que_tab[1]["contents"].push(songs[somg]["name"]);
                    que_tab[2]["contents"].push(songs[somg]["artist"]);
                    que_tab[3]["contents"].push(songs[somg]["album"]);
                }
                async function infotm() {   // async printing of colours tmtmtmtmmtmt mtm mt m
                    await displayAnim("\nQUEUE:\n\n", 4);
                    await displayAnim(generateTable(que_tab), 0.5);
                }
                infotm();



            } else {
                displayAnim("\nsorry, there's no music in the queue! use 'queue add [song]' to add a song to the queue!", 7);
            }

            

        } else if (command == "queue add") {
            displayAnim("\nplease input a song to add to the queue!", 7);
        } else if (command == "queue remove") {
            displayAnim("\nplease input a place in the queue to remove!", 7);
        } else if (command == "queues") {
            // lis tqueues
            var que_tab = [
                { "name": "name", "contents": [] },
                { "name": "artist", "contents": [] }
            ]
            for (i in queues) {
                var que = queues[i];
                que_tab[0]["contents"].push(que["name"]);
                que_tab[1]["contents"].push(que["artist"]);
            }
            async function infotm() {   // async printing of colours tmtmtmtmmtmt mtm mt m
                await displayAnim("\nPRE-MADE QUEUES:\n\n", 4);
                await displayAnim(generateTable(que_tab), 0.5);
            }
            infotm();

        } else if (argCommand == "queue") {

            var mmm = argComm(commandInit);
            var eee = [...mmm];
            eee.shift();
            eee.shift();
            var input = eee.join(" ");

            var operation = mmm[1].toLowerCase();



            if (operation == "add") {  // adding song to queue
                debubg(`adding song '${input}' to queue`);

                if (songs[input]) { // if song exists
                    debubg("song exists!!");

                    music_queue.push(input);                

                    //in_queue = true;
                    displayAnim(`\nadded '${input}' to queue!`, 7);

                } else {
                    displayAnim("\nsorry, that song does not exist! please use 'songlist' to get a list of songs!", 7)
                }
            } else if (operation == "leave") {
                if (in_queue == true) {
                    in_queue = false;
                    music_queue = new Array();
                    displayAnim("\nleft queue!", 7);
                } else {
                    displayAnim("\nyou aren't in a queue", 7);
                }
                
            } else if (operation == "play") {
                parseCommand(`music play ${music_queue[0]}`);
                in_queue = true;
            } else if (operation == "join" ) {
                if (music_playing == true) {
                    if (in_queue == false) {
                        if (music_queue[0]) {   // if there's stuff i nthe queuye
                            in_queue = true;
                        } else {
                            displayAnim("\nthere's nothing in the queue!", 7);
                        }
                    } else {
                        displayAnim("\nyou're already in the queue!", 7);
                    }
                } else {
                    displayAnim("\nyou're not playing any music!", 7);
                }
                
                
            } else if (operation == "remove") {
                // remove music from queue
                var inny = parseInt(input);

                if (typeof inny == 'number') {  //valid number

                    if (music_queue[inny]) {    // valid spot
                        music_queue.splice(inny, 1);
                        displayAnim(`track in position ${inny} has been removed.`, 7);
                    } else {
                        displayAnim(`'${inny}' is not a valid spot in the queue!`, 7);
                    }
                } else {
                    displayAnim("\nplease enter a valid number!", 7)
                }
            } else if (operation == "clear") {
                in_queue = false;
                music_queue = new Array();
            } else if (operation == "use") {

                var intm = input.replaceAll("-", " ");
                if (queues[input]) {    // if the premade queue exists
                    music_queue = queues[intm]["contents"];
                    displayAnim(`\nqueue set to '${input}'`, 7);
                } else {
                    displayAnim(`\noops! the queue '${input}' doesn't exist! use 'queues' to get a list of all pre-made queues!`, 7);
                }
            }


            // this section here is for any empty notes commands, what it should say when it's empty, etc.
            /*

                stoof

            */



        } else if (command == "note") {                                                                                     // fancy notes command start page and list page

            async function fancyPage() {
                var texty = asciiText("slant", `notes!!`);
                await displayAnim("\n", 1);
                await displayAnim(texty, 0.25);
                await displayAnim(`\n\nwelcome to notes! you can write, save, and share notes within console!\n\nuse 'note create [title]' to create a new note,
    'notes' to list all notes,\n'note view [note]' to view a note, and so much more!\n\nuse 'man note' to see all commands! `, 1);
            }
            fancyPage();

        } else if (command == "note list" || command == "notelist" || command == "notes") {                                 // notes list page

            if (object_empty(notes) == true) {
                displayAnim("\nthere are no notes! use 'note create [name]' to create a note!", 7);
            } else {

                
                var note_table = [
                    {"name": "title", "contents": []},
                    {"name": "author", "contents": []},
                    {"name": "date created", "contents": []},
                    {"name": "date modified", "contents": []},
                ]

                for (i in notes) {
                    var noT = notes[i];
                    note_table[0]["contents"].push(noT["name"]);
                    note_table[1]["contents"].push(noT["author"]);
                    note_table[2]["contents"].push(`${noT["date created"].day} ${noT["date created"].month} ${noT["date created"].year}, ${noT["date created"].hour}:${noT["date created"].minute} ${noT["date created"].ampm}`);
                    note_table[3]["contents"].push(`${noT["date modified"].day} ${noT["date modified"].month} ${noT["date modified"].year}, ${noT["date modified"].hour}:${noT["date modified"].minute} ${noT["date modified"].ampm}`);
                }
                async function infotm() {   // async printing of colours tmtmtmtmmtmt mtm mt m
                    await displayAnim("\nNotes:\n\n", 4);
                    await displayAnim(generateTable(note_table), 0.5);
                }
                infotm();
            }
            
        } else if (command == "note add" || command == "note create") {                                                                    // add a note
            displayAnim("\nplease use a valid note title!", 7);
        } else if (command == "note remove" || command == "note kill" || command == "note murder" || command == "note delete") {         // remove a note
            displayAnim("\nplease use a valid note title! use 'notes' to get a list of notes!", 7);
        } else if (command == "note edit") {                                                                   // edit a note
            displayAnim("\nplease use a valid note title! use 'notes' to get a list of notes!", 7);
        } else if (command == "note rename") {                                                                   // rename a note
            displayAnim("\nplease use a valid note title! use 'notes' to get a list of notes!", 7);
        } else if (command == "note clear" || command == "note purge") {                                                                  // clear all notes
            displayAnim("\nare you sure you want to clear all notes? this cannot be undone!\n\n(y/n)");

            askInput(() => {
                if (yes_no(ask_return) == true) {   // yes
                    notes = new Object();
                    localStorage.setItem("notes", `${JSON.stringify(notes)}`);
                    displayAnim("\nall notes deleted.", 7);
                } else {
                    displayAnim("\noperation cancelled.", 7)
                }
            });
        } else if (command == "note export") {                                                                 // export a note
            displayAnim("\nplease use a valid note title! use 'notes' to get a list of notes!", 7);
        } else if (command == "note import") {                                                                 // import a note
            displayAnim("\nplease use a valid note title! use 'notes' to get a list of notes!", 7);
        } else if (command == "note view") {
            displayAnim("\nplease use a valid note title! use 'notes' to get a list of notes!", 7);
        } else if (argCommand == "note") {                                                                     // actual main notes command


            var mmm = argComm(commandInit);
            var eee = [...mmm];
            eee.shift();
            eee.shift();
            var input = eee.join(" ");
            eee.shift();
            var input2 = eee.join(" ");

            var operation = mmm[1].toLowerCase();
            var operation2 = mmm[2].toLowerCase();


            debubg(`command stuff:\noperation: '${operation}'\ninput: '${input}'\noperation2: '${operation2}'\ninput2: '${input2}'`);

            if (operation == "add" || operation == "create") {           // add a note

                // initially input a title with the command, and then it'll ask you for the contents of the note.

                debubg(`title: '${input}'`);

                if (notes[input]) {     // if that note already exists
                    displayAnim(`\nthe note '${input}' already exists! use 'note edit ${input}' to edit your already existing note, or use 'note create' with a different name!`, 7);
                } else {
                    // if it doesnt exist
                    note_name = input.toLowerCase();
                    var dAT = parse_date();
                    
                    note_to_add = {
                            "name": `${input}`,
                            "author": `${user}`,
                            "date created": dAT,
                            "date modified": dAT,
                            "contents": ""
                        }
                    }
                    console.log(note_to_add);
                    displayAnim("\nwhat would you like to write in your note?", 7);
                    askInput(() => {
                        // doing the thing
                        note_to_add["contents"] = ask_return;
                        notes[note_name] = note_to_add;
                        localStorage.setItem("notes", `${JSON.stringify(notes)}`);
                        displayAnim("\nadded note.", 7);
                    });


            } else if (operation == "remove" || operation == "kill" || operation == "murder" || operation == "delete") {

                note_name = input.toLowerCase();

                if (notes[note_name]) {     // if that note exists
                    displayAnim(`\nare you sure you want to delete '${input}' forever? (a long time!)\n(y/n)`);
                    askInput(() => {
                        // ask if theyre sure
                        if (yes_no(ask_return) == true) {   // yes

                            delete notes[note_name];
                            localStorage.setItem("notes", `${JSON.stringify(notes)}`);
                            displayAnim("\nnote deleted.", 7);

                        } else {
                            displayAnim("\noperation cancelled.", 7)
                        }
                    });



                } else {                    // if it doesn't exist
                    displayAnim("\nthat note doesn't exist! use 'notes' to get a list of all notes!", 7);
                }

            } else if (operation == "edit") {

                // fun idea: when you're editing a note, it will do shell.value = `${current_note_contents}` and then you can literally *edit* it!!! woo!! ideas!!
                note_name = input.toLowerCase();

                if (notes[note_name]) {     // if that note exists
                    
                    displayAnim(`${make_note_vis(note_name)}\n\nwhat would you like the note to be now?`, 0.5);     // show the whole note in its entirety™
                    setTimeout(() => {shell.value = notes[note_name]["contents"]}, 200);

                    askInput(() => {
                        if (ask_return != notes[note_name]["contents"]) {
                            notes[note_name]["contents"] = ask_return;
                            notes[note_name]["date modified"] = parse_date();
                            localStorage.setItem("notes", `${JSON.stringify(notes)}`);
                        }
                        displayAnim("\nnote saved.", 7)
                    });
                
                    

                
                } else {
                    displayAnim("\nthat note does not exist! use 'note create [name]' to create a note!", 7);
                }

                
            } else if (operation == "rename") {

                note_name = input.toLowerCase();

                if (notes[note_name]) {     // if that note exists

                    displayAnim(`${make_note_vis(note_name)}\n\nwhat would you like it to be renamed to?`, 0.5);     // show the whole note in its entirety™
                    setTimeout(() => {shell.value = notes[note_name]["name"]}, 200);

                    askInput(() => {
                        if (ask_return != notes[note_name]["name"]) {
                            notes[ask_return] = notes[note_name];
                            notes[ask_return]["name"] = ask_return;
                            notes[ask_return]["date modified"] = parse_date();
                            delete notes[note_name];
                            localStorage.setItem("notes", `${JSON.stringify(notes)}`);
                        }
                        displayAnim("\nnote saved.", 7)
                    });


                
                } else {
                    displayAnim("\nthat note does not exist! use 'note create [name]' to create a note!", 7);
                }

                //{"name":"test","author":"dev","date created":{"day":"26","month":"April","year":"2022","hour":"11","minute":"28","second":"21","ampm":"AM"},"date modified":{"day":"26","month":"April","year":"2022","hour":"11","minute":"28","second":"21","ampm":"AM"},"contents":"hehe!\\nhehe!"}
            } else if (operation == "import") {

                var in_note = "";

                var broken = false;

                try {
                    var in_ = JSON.parse(input);                            // big ol' chunk of code to check that al the inputted JSON works and is correct. future jesse please make this a function somehow
                    /*

                    the function could probably use a JSON input, like this

                    check_json(note_input, {
                        "name": true,
                        "author": true,
                        "date created": {
                            "day": true,
                            "month": true,
                            "year": true,
                            "hour": true,
                            "minute": true,
                            "second": true,
                            "ampm": true
                        },
                        "date modified": {
                            "day": true,
                            "month": true,
                            "year": true,
                            "hour": true,
                            "minute": true,
                            "second": true,
                            "ampm": true
                        },
                        "contents": true
                    })

                    
                    so it checks the first JSON to see if all keys in the second JSON exist in the first JSON.

                    hopefully

                    */
                    if (in_["name"] == undefined) {
                        broken = true;
                    } else if (in_["author"] == undefined) {
                        broken = true;
                    } else if (in_["date created"] == undefined) {
                        broken = true;
                    } else if (in_["date created"]["day"] == undefined) {
                        broken = true;
                    } else if (in_["date created"]["month"] == undefined) {
                        broken = true;
                    } else if (in_["date created"]["year"] == undefined) {
                        broken = true;
                    } else if (in_["date created"]["hour"] == undefined) {
                        broken = true;
                    } else if (in_["date created"]["minute"] == undefined) {
                        broken = true;
                    } else if (in_["date created"]["second"] == undefined) {
                        broken = true;
                    } else if (in_["date created"]["ampm"] == undefined) {
                        broken = true;
                    } else if (in_["date modified"] == undefined) {
                        broken = true;
                    } else if (in_["date modified"]["day"] == undefined) {
                        broken = true;
                    } else if (in_["date modified"]["month"] == undefined) {
                        broken = true;
                    } else if (in_["date modified"]["year"] == undefined) {
                        broken = true;
                    } else if (in_["date modified"]["hour"] == undefined) {
                        broken = true;
                    } else if (in_["date modified"]["minute"] == undefined) {
                        broken = true;
                    } else if (in_["date modified"]["second"] == undefined) {
                        broken = true;
                    } else if (in_["date modified"]["ampm"] == undefined) {
                        broken = true;
                    } else if (in_["contents"] == undefined) {
                        broken = true;
                    }

                    if (broken == true) {
                        throw new Error('aaaaaa!!!!!');
                    } else if (broken == false) {   // the rest of the import code
                        var note_in = JSON.parse(input);
                        var note_name = note_in["name"].toLowerCase();
                        if (notes[note_name]) {
                            // if that note already exists with that name

                            displayAnim(`\nuh oh! the note with the name '${note_name}' already exists! what would you like to name this note?`, 4);
                            askInput(() => {
                                // get new name
                                var nam = ask_return;
                                var nam_low = nam.toLowerCase();

                                if (notes[nam_low]) {
                                    displayAnim("\nthere is a note with that name also! please use 'notes' to get a list of all notes, and try again with a note name that is not taken!", 4);
                                    debubg("bruh this is the second time that you have chosen a note name that exists lmao try again nerd /lh");
                                } else {
                                    // chose a good boy name that isnt taken ™

                                    note_in["name"] = nam;  // sets the JSON name to the name you inputted
                                    notes[nam_low] = note_in;   // set the note
                                    localStorage.setItem("notes", `${JSON.stringify(notes)}`);  // save the notes to localStorage
                                    displayAnim("\nnote saved.", 7);
                                }
                                
                            });
                        } else {    // if it doesn't exist in the notes already
                            notes[note_name] = note_in;   // set the note
                            localStorage.setItem("notes", `${JSON.stringify(notes)}`);  // save the notes to localStorage
                            displayAnim("\nnote saved.", 7);
                        }
                    }
                    

                } catch (err) {
                    erry("A!!! the note JSON is invalid!!!");
                    displayAnim("\ninvalid note!", 7);
                }
                
            } else if (operation == "export") {

                note_name = input.toLowerCase();

                if (notes[note_name]) {

                    var noty = notes[note_name];

                    var export_tm = JSON.stringify(noty);

                    copyclip(export_tm);

                    displayAnim("\nexported note copied to clipboard.");

                } else {
                    displayAnim(`\nthat note doesn't exist! use 'notes' to list all notes`, 7);
                }


            } else if (operation == "view") {
                note_name = input.toLowerCase();
                if (notes[note_name]) {     // if that note exists
                    displayAnim(make_note_vis(note_name), 0.5);
                } else {
                    displayAnim("\nthat note doesn't exist! use 'note create' to create a note, or 'notes' to list all existing notes.", 7);
                }
            } else {
                displayAnim("\nthat operation doesn't exist!! use 'man note' for help!", 7);
            }

        } else if (argCommand == "debugvar-size") {

            var mmm = argComm(commandInit);
            var eee = [...mmm];
            eee.shift();
            var input = eee.join(" ");

            var number_test = /^[0-9]+$/i.test(input);      // i still hate regex

            if (number_test == true) {

                debugvar_size = input;
                var_debug_win.document.getElementById("size-pass").innerHTML = debugvar_size;
                localStorage.setItem("debug var size", debugvar_size);

                

            } else {
                displayAnim("\nplease enter a valid number!", 7);
            }
        } else if (command == "time" || command == "date") {

            var rand = getRandomInt(0,10);

            if (rand == 0) {    // time to get a watch
                displayAnim(getRandomFromArr(time_messages), 5);
            } else {

                var timmy = parse_date();
                displayAnim(`\n${timmy.day} ${timmy.month} ${timmy.year}, ${timmy.hour}:${timmy.minute} ${timmy.ampm}`, 7);
            }

        } else if (argCommand == "key") {
            
            var mmm = argComm(commandInit);
            var eee = [...mmm];
            eee.shift();
            var operation = mmm[1];
            eee.shift();
            var input = eee.join(" ");



            if (operation == "generate") {  // generate key

                var keytm = generateEncryptionKey();

                displayAnim("\nkey has been generated and copied to your clipboard. use 'key set [key]' to use your newly generated key.\n\nWARNING: put this key somewhere safe! after this, you cannot get this key again!", 4);
                
                copyclip(JSON.stringify(keytm));

            } else if (operation == "set") {

                displayAnim("\nplease paste your encryption key:", 7);
                askInput(() => {

                    try {
                        encryption_key = JSON.parse(ask_return);

                        var beat = JSON.stringify(encryption_key);

                        debubg(beat);

                        localStorage.setItem("encryptionkey", beat);

                        displayAnim("\nencryption key set.", 7);

                    } catch (err) {
                        displayAnim("\ninvalid key! please use 'key generate' to generate a key", 7);
                    }
                });

                

            } else {
                displayAnim("\ninvalid operation! use 'man key' for help!", 7)
            }

        } else if (argCommand == "encrypt") {
            if (encryption_key["a"]) {
                displayAnim("\nwhat text would you like to encrypt?", 7);
                askInput(() => {
                    var crypted = crypt_tm("en", ask_return, encryption_key);
                    copyclip(crypted);
                    displayAnim("\nencrypted text has been copied to your clipboard.", 7);
                });   
            } else {
                displayAnim("\nplease set an encryption key first! (check 'man key' for help)", 7);
            }
        } else if (argCommand == "decrypt") {
            if (encryption_key["a"]) {
                displayAnim("\nwhat text would you like to decrypt?", 7);
                askInput(() => {
                    var crypted = crypt_tm("de", ask_return, encryption_key);
                    copyclip(crypted);
                    displayAnim("\ndecrypted text has been copied to your clipboard.", 7);
                });   
            } else {
                displayAnim("\nplease set an encryption key first! (check 'man key' for help)", 7);
            }
        } else if (command == "err") {
            javascript.ha();    // purposefully throw an error with real information
        } else if (command == "delete sys32") {
            sys32.ha();         // sys32
        }


        else {      // new commands up here ^
            displayAnim(`\ncommand error: ${commandInit} is not an existing command.`, 7);
        }
        coopy = false;






    } catch (err) {
        console.log("so console broke...")
        bluescreen_page({"msg": err.message});
       
    }
}