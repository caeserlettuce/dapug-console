

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
    } else if (command.split(" ")[0] == "login") {
        if (commandInit.split(" ")[1] == "admin") {
            if (commandInit.split(" ")[2] == "password") {
                user = "admin";
                newLine();
                newAnim("password accepted.", 20);
            } else {
                newLine();
                newAnim("username / password incorrect.", 20);
            }
        } else if (command == "login" || command == "login "){
            user = "user";
            newLine();
            newAnim("invalid username / password", 20);
        } else {
            user = command.split(" ")[1];
            newLine();
            newAnim("password accepted.", 20);
        }
    } else if (command == "shutdown") {
        if (user == "admin") {
            window.close();
        } else {
            newLine();
            newAnim("you need to be logged in as admin to use that command.", 20);
        }
    } else if (commandInit == "oh") {
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
        user = "user";
    } else if (command == "what is the meaning of life?" || command == "what is the meaning of life" || command == "the meaning of life" || command == "meaning of life?" || command == "meaning of life") {
        newLine();
        newAnim("42.", 40);
    } else if (command == "fast-clear") {
        clearScreen();
    } else if (command == "ls") {
        newLine();
        animArt(listy, 5);
    } else if (command.split(" ")[0] == "color") {
        if (commandInit.split(" ")[1] == "text") {
            newLine();
            var colour = commandInit.split(" ")[2];
            debubg(`setting text colour to ${colour}`);
            var iffy = /^#[0-9A-F]{6}$/i.test(colour);
            if (iffy == true) {
                // text colour
                var r = hexToRgb(colour).r;
                var g = hexToRgb(colour).g;
                var b = hexToRgb(colour).b;
                debubg(`${r}${g}${b}`);
                // #7cfc00 GREEN
                document.getElementById("body").style.color = colour;
                document.getElementById("consoleinput").style.color = colour;
                document.getElementById("consoleinputstyle").style.color = colour;
                document.getElementById("scrollbar-colour").innerHTML = `::-webkit-scrollbar-thumb { background: rgba(${r}, ${g}, ${b}, 0.5); }`;
                newAnim(`setting text colour to ${colour}`, 15);
            } else if (iffy == false && colour.toLowerCase() == "reset") {
                document.getElementById("body").style.color = "#7cfc00";
                document.getElementById("consoleinput").style.color = "#7cfc00";
                document.getElementById("consoleinputstyle").style.color = "#7cfc00";
                document.getElementById("scrollbar-colour").innerHTML = `::-webkit-scrollbar-thumb { background: rgba(124, 252, 0, 0.5); }`;
                newAnim(`resetting text colour`, 15);
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
                // background colour
                var r = hexToRgb(colour).r;
                var g = hexToRgb(colour).g;
                var b = hexToRgb(colour).b;
                debubg(`${r}${g}${b}`);
                // #7cfc00 GREEN
                document.getElementById("body").style.background = colour;
                document.getElementById("scrollbar-back").innerHTML = `::-webkit-scrollbar-track { background: ${colour}; } ::-webkit-scrollbar-corner { background: ${colour} }`;
                newAnim(`setting background colour to ${colour}`, 15);
            } else if (iffy == false && colour.toLowerCase() == "reset") {
                document.getElementById("body").style.background = "#000000";
                document.getElementById("scrollbar-back").innerHTML = `::-webkit-scrollbar-track { background: #000000; } ::-webkit-scrollbar-corner { background: #000000; }`;
                newAnim(`resetting background colour`, 15);
            }
            else {
                newAnim("invalid colour code.", 20);
            }
        } else if (command == "color" || command == "color "){
            newLine();
            newAnim("invalid colour. check the help page", 20);
        }
    
    
    } else if (command.split(" ")[0] == "colour") {
        if (commandInit.split(" ")[1] == "text") {
            newLine();
            var colour = commandInit.split(" ")[2];
            debubg(`setting text colour to ${colour}`);
            var iffy = /^#[0-9A-F]{6}$/i.test(colour);
            if (iffy == true) {
                // text colour
                var r = hexToRgb(colour).r;
                var g = hexToRgb(colour).g;
                var b = hexToRgb(colour).b;
                debubg(`${r}${g}${b}`);
                // #7cfc00 GREEN
                document.getElementById("body").style.color = colour;
                document.getElementById("consoleinput").style.color = colour;
                document.getElementById("consoleinputstyle").style.color = colour;
                document.getElementById("scrollbar-colour").innerHTML = `::-webkit-scrollbar-thumb { background: rgba(${r}, ${g}, ${b}, 0.5); }`;
                document.getElementById("link-styles").innerHTML = `.link {color: ${r}, ${g}, ${b}, 0.5; font-family: COURIERPRIME; } .link:hover { color: ${r}, ${g}, ${b}, 0.5; font-family: COURIERPRIME; } .link:visited color: ${r}, ${g}, ${b}, 0.5; font-family: COURIERPRIME; }`;
                newAnim(`setting text colour to ${colour}`, 15);
            } else if (iffy == false && colour.toLowerCase() == "reset") {
                document.getElementById("body").style.color = "#7cfc00";
                document.getElementById("consoleinput").style.color = "#7cfc00";
                document.getElementById("consoleinputstyle").style.color = "#7cfc00";
                document.getElementById("scrollbar-colour").innerHTML = `::-webkit-scrollbar-thumb { background: rgba(124, 252, 0, 0.5); }`;
                document.getElementById("link-styles").innerHTML = ".link {color: #7cfc00; font-family: COURIERPRIME; } .link:hover { color: #7cfc00; font-family: COURIERPRIME; } .link:visited color: #7cfc00; font-family: COURIERPRIME; }";
                newAnim(`resetting text colour`, 15);
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
                // background colour
                var r = hexToRgb(colour).r;
                var g = hexToRgb(colour).g;
                var b = hexToRgb(colour).b;
                debubg(`${r}${g}${b}`);
                // #7cfc00 GREEN
                document.getElementById("body").style.background = colour;
                document.getElementById("scrollbar-back").innerHTML = `::-webkit-scrollbar-track { background: ${colour} }`;
                newAnim(`setting background colour to ${colour}`, 15);
            } else if (iffy == false && colour.toLowerCase() == "reset") {
                document.getElementById("body").style.background = "#000000";
                document.getElementById("scrollbar-back").innerHTML = `::-webkit-scrollbar-track { background: #000000; }`;
                newAnim(`resetting background colour`, 15);
            }
            else {
                newAnim("invalid colour code.", 20);
            }
        } else if (command == "colour" || command == "colour "){
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
        var asciifinal = asciiText(fonty, `${tata}`, 9);
        animArt(asciifinal, 0.1);

        coopyIf(asciifinal);

        coopy = false;
        
    } else if (command == "history") {
        //debubg(commang);
        newLine();
        var YAYA = commang.slice(0);
        YAYA.unshift("COMMAND HISTORY:");
        animArt(YAYA, 5);
        //debubg(commang);
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
    
    
    
    } else if (argCommand == "convert-old") {

        // HOW TO ADD MORE MEASURMENTS FOR FUTURE JESSE:
        // MAKE A NEW VAR AT THE END OF THE CONVERSIONS BLOCK, imma stop being in all caps
        // add a new var at the end of that, and the value has to be how many centimeters would 1 of that unit be
        // then go and copy and else if from the end of the first convert block, change the unt to the correct one
        // and do the same for the second if block
        // then boom
        var mmm = argComm(commandInit);
        // convert 10 cm in
        var unittype = mmm[1];
        var amount = mmm[2];
        var fromunit = mmm[3];
        var tounit = mmm[4];
        var baseCM = 0;
        var baseG = 0;
        var output = "something is broken and it did not output any conversion";
        var error = false;
        var OUTY = "a";
        // ALL CONVERSIONS FROM CM
        var cv_mm = 0.1;
        var cv_cm = 1;
        var cv_m = 100;
        var cv_km = 100000;
        var cv_in = 2.54; // screw you javascript for not letting me keep in consistent by not letting me use var in. im not mad. just dissapointed.
        var cv_ft = 30.48;
        var cv_yd = 91.44;
        var cv_mi = 160934.4;
        var cv_hm = 10.16;

        // ALL CONVERSIONS FROM G

        var cv_mg = 0.001
        var cv_g = 1;
        var cv_kg = 1000;
        var cv_lb = 453.592;
        var cv_oz = 28.3495;




        debubg(`converting ${unittype} ${amount} ${fromunit} to ${tounit}...`);
        amount = parseInt(amount);
        if (unittype == "-l") {
            // CONVERT INPUT UNIT TO BASEE CM SO THEN THOSE CAN BE CONVERTED TO OUTPUT UNIT TO MAKE THINGS EASIER
            if (fromunit == "mm") {
                debubg(`from mm`);
                baseCM = amount * cv_mm;
            } else if (fromunit == "cm") {
                debubg(`from cm`);
                baseCM = amount * cv_cm;
            } else if (fromunit == "m") {
                debubg(`from m`);
                baseCM = amount * cv_m;
            } else if (fromunit == "km") {
                debubg(`from km`);
                baseCM = amount * cv_km;
            } else if (fromunit == "in") {
                debubg(`from inc`);
                baseCM = amount * cv_in;
            } else if (fromunit == "ft") {
                debubg(`from ft`);
                baseCM = amount * cv_ft;
            } else if (fromunit == "yd") {
                debubg(`from yd`);
                baseCM = amount * cv_yd;
            } else if (fromunit == "mi") {
                debubg(`from mi`);
                baseCM = amount * cv_mi;
            } else if (fromunit == "hm") {
                debubg(`from hm`);
                baseCM = amount * cv_hm;
            } else {
                error = true;
            }
            if (error == true) {
                output = 'from unit does not exist in system or is the incorrect unit type. use "convert -list" to list all units."';
            } else {

                debubg(`current base cm: ${baseCM}`);

                if (tounit == "mm") {
                    debubg(`to mm`);
                    OUTY = baseCM / cv_mm;
                } else if (tounit == "cm") {
                    debubg(`to cm`);
                    OUTY = baseCM / cv_cm;
                } else if (tounit == "m") {
                    debubg(`to m`);
                    OUTY = baseCM / cv_m;
                } else if (tounit == "km") {
                    debubg(`to km`);
                    OUTY = baseCM / cv_km;
                } else if (tounit == "in") {
                    debubg(`to in`);
                    OUTY = baseCM / cv_in;
                } else if (tounit == "ft") {
                    debubg(`to ft`);
                    OUTY = baseCM / cv_ft;
                } else if (tounit == "yd") {
                    debubg(`to yd`);
                    OUTY = baseCM / cv_yd;
                } else if (tounit == "mi") {
                    debubg(`to mi`);
                    OUTY = baseCM / cv_mi;
                } else if (tounit == "hm") {
                    debubg(`to hm`);
                    OUTY = baseCM / cv_hm;
                } else {
                    error = true;
                }
                if (error == true) {
                    output = 'to unit does not exist in system or is the incorrect unit type. use "convert -list" to list all units."';
                } else {
                    output = `${OUTY}`;
                }
            }



            
        } else if (unittype == "-m") {
            // CONVERT INPUT UNIT TO BASEE CM SO THEN THOSE CAN BE CONVERTED TO OUTPUT UNIT TO MAKE THINGS EASIER
            if (fromunit == "mg") {
                debubg(`from mg`);
                baseG = amount * cv_mg; // change to thing
            } else if (fromunit == "g") {
                debubg(`from g`);
                baseG = amount * cv_g; // change to thing
            } else if (fromunit == "kg") {
                debubg(`from kg`);
                baseG = amount * cv_kg; // change to thing
            } else if (fromunit == "lb") {
                debubg(`from lb`);
                baseG = amount * cv_lb; // change to thing
            } else if (fromunit == "oz") {
                debubg(`from oz`);
                baseG = amount * cv_oz; // change to thing
            } else {
                error = true;
            }
            if (error == true) {
                output = 'from unit does not exist in system or is the incorrect unit type. use "convert -list" to list all units."';
            } else {

                debubg(`current base grams: ${baseG}`);

                if (tounit == "mg") {
                    debubg(`to mg`);
                    OUTY = baseG / cv_mg;
                } else if (tounit == "g") {
                    debubg(`to g`);
                    OUTY = baseG / cv_g;       // work on all the weight conversions AND DONT FORGET TO UPDATE THE LIST IN UI.JS!!!!!!!!!!!!!
                } else if (tounit == "kg") {
                    debubg(`to kg`);
                    OUTY = baseG / cv_kg;
                } else if (tounit == "lb") {
                    debubg(`to lb`);
                    OUTY = baseG / cv_lb;
                } else if (tounit == "oz") {
                    debubg(`to oz`);
                    debubg(`${baseG} / ${cv_oz}`);      // i am an idiot, i've been trying to figure out why it's spitting out 1 even though everything should be correct and the reason is:::: it's still reading the from unit..... yeah im dum
                    OUTY = baseG / cv_oz;
                }
                else {
                    error = true;
                }
                if (error == true) {
                    output = 'to unit does not exist in system or is the incorrect unit type. use "convert -list" to list all units."';
                } else {
                    output = `${OUTY}`;
                }
            }

        } else {
            output = "invalid unit type. check 'convert -list' for a list of unit type";
        }

        newLine();
        newAnim(output, 5);
        coopyIf(output);
    
    
    } else if (command == "pebblebrain" || command == "pebble brain") {
        if (existent == true) {
            debubg("command is in man registry.");
            eval(`haha = ${manvar}`);
        } else {
            debubg("command is not in man registry.")
            haha = "there is no current man page for this command.";
        }

    
    
    
    
    
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
    }
    else {
        newLine();
        newAnim(`command error: ${commandInit} is not an existing command.`, 10);
    }
    coopy = false;
}