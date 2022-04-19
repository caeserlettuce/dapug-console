
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
        
        save.point = "first start";                               // set the variable "point" to "start" since because the savefile is empty, you're starting a game
        save.stopoff = "first start";
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

    save.start_screen = true;
    async function welcomeScreen() {
        /*
            if you want to run multiple functions in a row, but linearly (the next function runs after the first one finishes)
            you can define a function inside of the adventure function, and it will only be accessible inside of said function
            (ex. this welcomeScreen() function can only be run from inside of the function ta_start_test(), since it was defined
            inside of ta_start_test)

            and to make it run things linearly, just add 'async' in front of 'function', and then put 'await' before any function you want it to wait for.
            (example below)

            just remember to call the defined function after its defined for it to actually run

        */

       await displayAnim(asciiText("slant", "TEST ADVENTURE!!"), 0.25);
       await displayAnim("\n\nThis is an adventure that you use for testing!! use '-help' to get help, and '-quit' to quit!", 5);
       await setTimeout(() => {displayAnim("\n\npress ENTER to start!"), 5}, 500)

    }

    welcomeScreen();

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

    debubg(`adventure: '${cur_ta}'\npoint: '${save.point}'\nprev point: '${save.prev_point}'\ninput: '${ta_input}'\nkey: '${ta_key}'`);

    var ta_low = ta_input.toLowerCase();        // this is literally because probably most of your commands dont require capitalization and it gets tiring having to set each if statement to lowercase so this is just the input text but all lowecase for ease of coding™

    var input = false;
    if (ta_input != "") {
        input == true ;
    }


    
    if (enterkey == true) {

        if (save.start_screen == true) {    // if it's started, clear the screen and set the start screen status to false
            save.start_screen = false;
            save.pg_loaded = true;
            clearScreen();
        }

        //if ( ( save.point == "first start" ) || ( save.point == "asking for name" && save.pg_loaded == true) ) {  // if it's your first start of the game

        if ( save.point == "first start" || save.stopoff == "asking for name" ) {  // if the save point was at first start or if the last save you stopped off at is asking for name
            save.point = "asking for name";
            save.stopoff = "asking for name";
            displayAnim("\nwhat is your name");
        
        
        } else if (save.point == "asking for name" || save.stopoff == "greeting wheatley") {        // probably make them else statements so that it wont go through the hoards of other if statements
            if (input == true) {                // if theres something in the text field
                save.name = `${ta_input}`;
                save.point = "greeting wheatley";
                save.stopoff = "greeting wheatley";

                displayAnim(`[WHEATLEY]: Hello, ${save.name}!        \n\ntype 'hello' to respond!`, 5);

            }
            
        }



        save.pg_loaded = true;          // if it was loaded from file instead of loaded from brand new
        ta_save();                      // save to localStorage
    } else if (enterkey == false) {


        // put code here


    }

}