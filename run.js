

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
        var ooo = argComm(commandInit);

        var rawaccountregistry = `{${localStorage.getItem("accounts")}}`;

        //debubg(rawaccountregistry);

        var inusername = mmm[1];
        ooo.splice(0,2);

        var accountregistry = JSON.parse(rawaccountregistry);

        //debubg(accountregistry);

        debubg(`attempting to log in using username '${inusername}' and password '${ooo}'.`);

        var locked_accounts = [
            "dev",
            "caeserlettuce",
            "18gallons"
        ]

        if (locked_accounts.indexOf(inusername) > -1) {
            displayAnim("\nsorry, that account cannot be logged into.", 10);
        } else if (accountregistry[inusername] != undefined) {    // if account name exists in registry
            debubg("username found in registry. continuing.");

            var realpassword = accountregistry[inusername];
            //debubg(`password to account is ${realpassword}`);

            if (ooo == realpassword) {
                // password success
                debubg("password succesful password tm tm");
                displayAnim(`\nlogged into ${inusername}.`, 10);
                setUser(inusername);
            } else {
                debubg("hah you tried but the password was incorrect lmao")
                displayAnim("\npassword incorrect.", 10);
            }

        } else {
            displayAnim("\ninvalid username. use 'signup' to sign up with a new account.", 10);
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
            displayAnim("\nuser already exists in registry.", 10);
        } else if (inusername == undefined || inusername == "" || inusername == null ) {

            displayAnim("\nplease select a username!");

        } else {
            // yes
            debubg("user does not exist in registry!!!! making!!!! tm!!!!");
            let newRegistry = `${rawaccountregistry}, "${inusername}": "${ooo}"`;
            localStorage.setItem("accounts", newRegistry);
            setUser(inusername);
            displayAnim(`\ncreated new account '${inusername}'.`);

        }
    }
    
    
    else if (commandInit == "oh") {
        displayAnim("\noh...", 20);
    } else if (commandInit == "OH") {
        displayAnim("\noH.............................................................................................................................................................................................................................................................", 20);
    } else if (command == "hack") {
        displayAnim("\nhack hack beep boop 011010101010011000001101010010101", 20);
        user = "hacker"
    } else if (command == "secret") {
        displayAnim("\nthere are no secrets.", 20);
    } else if (command == "aperture") {
        displayAnim(`\n${apertureLogo}`, 1);                                                                                
    } else if (command == "secrets") {
        displayAnim("\nthere is not a secret.js file.", 20);
    } else if (command == "cake") {
        displayAnim(`${cake}`, 1);
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
    } else if (command.split(" ")[0] == "color" || command.split(" ")[0] == "colour") {
        if (commandInit.split(" ")[1] == "text") {
            var colour = commandInit.split(" ")[2];
            debubg(`\nsetting text colour to ${colour}`);
            var iffy = /^#[0-9A-F]{6}$/i.test(colour);
            if (iffy == true) {
                setColour(colour, true, null, true, null, true);
                displayAnim(`\nsetting text colour to ${colour}`, 15);
            } else if (iffy == false && colour.toLowerCase() == "reset") {
                setColour("#7cfc00", true, "#000000", true, "#1e1e1e", true);
                displayAnim(`\nresetting text colour`, 15);
            } else if (iffy == false) {
                displayAnim("\ninvalid colour code.", 10);
            }
            else {
                displayAnim("\ninvalid colour code.", 20);
            }
        } else if (commandInit.split(" ")[1] == "accent") {
            var colour = commandInit.split(" ")[2];
            debubg(`setting accent colour to ${colour}`);
            var iffy = /^#[0-9A-F]{6}$/i.test(colour);
            if (iffy == true) {
                setColour(null, true, null, true, colour, true);
                displayAnim(`\nsetting accent colour to ${colour}`, 15);
            } else if (iffy == false && colour.toLowerCase() == "reset") {
                setColour(null, true, null, true, "#1e1e1e", true);
                displayAnim(`\nresetting accent colour`, 15);
            } else if (iffy == false) {
                displayAnim("\ninvalid colour code.", 10);
            }
            else {
                displayAnim("invalid colour code.", 20);
            }
        } else if (commandInit.split(" ")[1] == "background") {
            var colour = commandInit.split(" ")[2];
            debubg(`\nsetting text colour to ${colour}`);
            var iffy = /^#[0-9A-F]{6}$/i.test(colour);
            if (iffy == true) {
                setColour(null, true, colour, true, null, true);
                displayAnim(`\nsetting background colour to ${colour}`, 15);
            } else if (iffy == false && colour.toLowerCase() == "reset") {
                setColour(null, true, "#000000", true, null, true);
                displayAnim(`\nresetting background colour`, 15);
            } else if (iffy == false) {
                displayAnim("\ninvalid colour code.", 5);
            }
            else {
                displayAnim("\ninvalid colour code.", 20);
            }
        } else if (commandInit.split(" ")[1] == "reset") {

            //setTextColour("#7cfc00");
            //setBackColour("#000000");
            //setAccyColour("#1e1e1e");
            setColour("#7cfc00", true, "#000000", true, "#1e1e1e", true);
            displayAnim("\ncolours have been reset", 5);

        } else if (command == "color" || command == "color " || command == "colour" || command == "colour "){
            displayAnim("\ninvalid colour. check the help page", 20);
        } else {
            displayAnim("\ninvalid argument. use either 'text', 'background', 'accent', or check the manpage.", 7);
        }
    
    } else if (command == "sus" || command == "among us" || command == "amogus" || command == "amongus" || command == "amon gus" || command == "sussy") {
        displayAnim(amogus, 1);
    } else if (command == "lovejoy") {
        displayAnim(`\n${lovejoy}`, 1);
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
    } else if (argCommand == "comment") {
        displayNewline();
        if (command == "comment" || command == "comment ") {
            displayAnim("please enter a valid argument.", 20);
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

                displayAnim(`comment "${tata}" from user ${user} has been added.`, 15);
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

                displayAnim(allComments, 5);

                // list comments
                //displayAnim(comments, 5);
            } else if (mmm[1].toLowerCase() == "-clear") {

                if (confirm("WARNING: clearing comments will remove ALL comments. Are you sure?")) {
                    localStorage.setItem("comments", '{ "why": "yes" }')
                    debubg("comments cleared");
                    displayAnim("comments cleared.", 20);
                } else {
                    displayNewline();
                    displayAnim("comments have not been cleared.", 20);
                    debubg("user thought about their decisions and did not clear the comments"); // i know i just copy pasted this from clear cache shoosh
                }
                
            } else {
                displayAnim("please enter a valid argument.", 20);
            }
        }
  



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
        if (debugvar == false ) {
            debugvar = true;
            document.getElementById("debubvar").style.display = "";
        } else {
            debugvar = false;
            document.getElementById("debubvar").style.display = "none";
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


        debubg(`[MAN] queueing command ${incommand}.`);
        
        // the internet tells me to never use eval() but i don't care because this is not running on a full on web server so crime war
        // haha im not using eval anymore get #trolled

        var haha;

        if (man[incommand]) {   // if it exists
            debubg("command is in man registry.");
            haha = man[incommand];
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
                resumeLyrics();
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
                pauseLyrics();
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
            skipLyrics();
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

        if (mmm[1] == "play") {                                             // you wanna play a song? hm? you wanna? wanna play a song???? try it??!?? bet you can't!! HM!!!
            var songname = eee.join(' ');
            songname = songname.toLowerCase();
            var songname = `${songname}`.replaceAll('"', "");
            
            debubg(`[SONG™] queueing song ${songname}.`);
            
            debubg(songname);

            var existent = false;
            paused_lyrics = false;

            if (songs[songname]) {
                existent = true;
            }
            
            if (existent == true) {     // song is in the system!!! yay!!!!11!1!11!
                if (music_playing == true) {
                    skipLyrics();
                }


                displayAnim("\n");
                var song_lyrics = songs[songname]["lyrics"];
                setSongInfo(`${songname}`);
                document.getElementById("songinfo").style.display = "";
                
                
                playMusic(songname);
                if (song_err == true) {
                    debubg("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa");
                }
                
                lyr_disp = song_lyrics; // set the current lyrics

            } else {                    // hello gordon
                displayAnim(`\nsong is not in registry. please use 'songlist' to get the list of songs supported.`, 10);
            }


        } else if (mmm[1] == "volume") {
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
            displayAnim("\nplease enter a valid number or check the man page!", 7);
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

        nametm = nametm.replaceAll("-", "");
    
        var lowname = nametm.toLowerCase();

        debubg(`theme command has been called. parsed: operation: ${operation}, name: ${nametm}`);

        if (operation == "use") {
            if (custom_themes[lowname]) { // if it exists in the custom themes
                debubg("theme exists as a customs theme!!");
                // custom themes is first so that way if someone has a custom theme named, say, 'rose', and then we make a theme called rose, they can still access their theme
                var tem = custom_themes[lowname]; // HOI IM TEMMIE!!!!!!!
                setColour(tem["text colour"], true, tem["back colour"], true, tem["accy colour"], true);
                displayAnim(`\nusing theme '${lowname}'!`, 7);

            } else if (themes[lowname]) {   // if it exists in the default themes
                debubg("theme exists as a default theme!!");
                var tem = themes[lowname]; // HOI IM TEMMIE!!!!!!!
                setColour(tem["text colour"], true, tem["back colour"], true, tem["accy colour"], true);
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
                var teem = actualname.split("-");

                console.log(teem);
                if (teem.length == 5) {
                    var nam = teem[0];
                    var aut = teem[1];
                    var txt = teem[2];
                    var bac = teem[3];
                    var acc = teem[4];

                    function check(naaa) {
                        var lowname = naaa.toLowerCase();
                        if (themes[lowname]) {
                            displayAnim("\nthere's already a default theme with that name! what would you like the theme to be named?", 5);
                            askInput(() => {
                                check(ask_return);
                            });
                        } else if (custom_themes[lowname]) {
                            displayAnim(`\nthe theme '${lowname}' already exists. would you like to overwrite this theme? (y/n)`, 7);
                            askInput(() => {
                                if (ask_return == "y") {
                                    rawSaveTheme(naaa, aut, txt, bac, acc);
                                    displayAnim(`\nthe theme '${naaa}' has been saved. use 'theme use ${lowname}' to use the theme!`, 7);
                                } else if (ask_return == "n") {
                                    displayAnim(`\nplease replace the text before the first '-' with a new name and try again!`, 7);
                                }
                            });
                        } else {
                            rawSaveTheme(naaa, aut, txt, bac, acc);
                            displayAnim(`\nthe theme '${naaa}' has been saved. use 'theme use ${lowname}' to use the theme!`, 7);
                            listening_input = false;
                        }
                    }

                 
                    check(nam);

                } else {
                    displayAnim("invalid theme!", 7);
                }


            } else { // if it is bad
                displayAnim("\nplease enter a valid theme! use 'theme export [theme name]' to export a theme!", 7);
            }


        } else if (operation == "export" || operation == "share") {
            // time to export theme
            if (nametm == "" || nametm == undefined || nametm == null) {
                displayAnim("\nplease enter a valid theme name!", 7)
            } else if (themes[lowname]) {   // if it exists in the default themes
                debubg("theme exists as a default theme!!");
                var share = `${themes[nametm]["name"]}-${themes[nametm]["author"]}-${themes[nametm]["text colour"]}-${themes[nametm]["back colour"]}-${themes[nametm]["accy colour"]}`;
                debubg(`exported theme: ${share}`);
                copyclip(share);
                displayAnim("\nexported theme copied to clipboard. import it again by using 'theme import [exported theme]'");
            } else if (custom_themes[lowname]) { // if it exists in the custom themes
                debubg("theme exists as a custom theme!!"); // airport customs
                var share = `${custom_themes[nametm]["name"]}-${custom_themes[nametm]["author"]}-${custom_themes[nametm]["text colour"]}-${custom_themes[nametm]["back colour"]}-${custom_themes[nametm]["accy colour"]}`;
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
    }

    else {
        displayAnim(`\ncommand error: ${commandInit} is not an existing command.`, 10);
    }
    coopy = false;
} 