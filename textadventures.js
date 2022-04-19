// FOR DOING TEXT ADVENTURES!!!
var adventures = {
    "test": {
        "name": "Test",
        
    }
}


function ta_start_test() {
    // this function is run whenever you enter the game
}

function ta_test() {
    // this function is run whenever any key is pressed
    /*
        HOW TO USE:

        'save' is your save variable. put anything you want saved if you reload the page in that, and treat them like any sort of variable.

        EXAMPLE:

        save.pugs = 10;
        displayAnim(`pugs: ${save.pugs}`, 5);

        
        'ta_input' is whatever's inside the shell input when the function is called

        'ta_key' is whatever key was pressed when the function is called


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

    debubg(`adventure: '${cur_ta}'\ninput: '${ta_input}'\nkey: '${ta_key}'`);



    if (enterkey == true) {

        // put code here


        ta_save();
    } else if (enterkey == false) {


        // put code here


    }

}