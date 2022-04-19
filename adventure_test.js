async function adventure_welcome() {
    

    await displayAnim(asciiText("slant", "TEST ADVENTURE!!"), 0.25);
    await displayAnim("\n\nThis is an adventure that you use for testing!! use '-help' to get help, and '-quit' to quit!   \n\npress ENTER to start!", 5);
}


function ta_start_test() {
    // this function is run whenever you enter the game

    console.log(cur_ta);
    var save = textadventures_saves[cur_ta];    // set the save

    console.log(save);

    if (save) {                                         // if the savefile does exist
        console.log("save for test exists!");
    } else {                                            // if the savefile does not exist
        console.log("save for test does not exist! creating!");
        textadventures_saves[cur_ta] = {};              // set the save to be an empty JSON object
        save = textadventures_saves[cur_ta];    // set the save
        
        save.point = "asking for name";                               // set the variable "point" to "start" since because the savefile is empty, you're starting a game
    }

    console.log("current adventure save data:", save);  // debug purposes

/*
    note for setting/saving variables in the savefile:

    if you are just saving/setting a single variable, you can use:
    save.varname = "variable";  console.log(save.varname);

    if you want to use spaces in your variable name, you can use:
    save["var name"] = "variable";  console.log(save["var name"]);

    and for really any other more complicated JSON trees you should use []

    if this is confusing, ask me (tm)
*/
    adventure_welcome();

    save.start_screen = true;
    
    ta_save();                                          // saves the JSON save variable to local storage so that on page reload you don't lose your progress
}


function ta_test() {
    // this function is run whenever any key is pressed
    /*
        HOW TO USE:

        'save' is your save variable. put anything you want saved if you reload the page in that, and treat them like any sort of variable.

        EXAMPLE:

        save.pugs = 10;
        displayAnim(`pugs: ${save.pugs}`, 5);

        
        'ta_input' is whatever's inside the shell input when this function is called

        'ta_key' is whatever key was pressed when this function is called (to get the key name, use https://keycode.info/)


        put all your code you want to run when the enter key is pressed inside 'if (enterkey == true) {}'

        and ofcourse all the stuff you want to run when any other key is pressed into 'if (enterkey == false) {}'


        and put everything before ta_save();

        i think thats everything

    */
    var enterkey = false;
    if (ta_key == "Enter") {
        enterkey = true;
    }
    var save = textadventures_saves[cur_ta];    // set the save

    
    var ta_low = ta_input.toLowerCase();        // this is literally because probably most of your commands dont require capitalization and it gets tiring having to set each if statement to lowercase so this is just the input text but all lowecase for ease of coding™
    var just_started = false;
    var input = false;
    if (ta_input != "") {
        input = true;
    }

    debubg(`adventure: '${cur_ta}'\npoint: '${save.point}'\ninput: '${ta_input}'\nkey: '${ta_key}'`);


    
    if (enterkey == true) {

        if (save.start_screen == true) {    // if it's started, clear the screen and set the start screen status to false
            save.start_screen = false;
            just_started = true;
            clearScreen();
        }

        



        if (save.point == "asking for name" && input == false) {

            displayAnim("\nwhat is your name?");


        
        } else if ( (save.point == "asking for name" && input == true) || (save.point == "greeting wheatley") ) {
            save.point = "greeting wheatley";
            if (!save.name) {
                save.name = `${ta_input}`;
            }
            setShell();     // clear input box

            if (ta_low == "hello") {

                
                alert("hallo ig idk");


            } else {
                displayAnim(`\n[WHEATLEY]: Hello, ${save.name}!        \n\ntype 'hello' to respond!`, 5);
            }

            

            
            
        }



        ta_save();                      // save to localStorage
    } else if (enterkey == false) {


        // put code here


    }

}