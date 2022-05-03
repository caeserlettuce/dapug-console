// snake game


function snake_init() {
    // generate new variables n stuffs
    debubg(`[SNAKE]: new snake game shall be generating...`);
    snk_save = new Array();
    snk_limit = snk_set.size;
    mainlock = false;
    snakelock = true;
    document.getElementById("input-div").style.display = "none";
    clearScreen();
    snk_save = [[0,0]]; // set the beginning tm


    var he = new Array();
    var ha = new Array();
    for (let i = 0; i < snk_set.size; i++) {
        he.push(".");
    }
    for (let i = 0; i < snk_set.size; i++) {
        ha.push([...he]);
    }
    
    snk_extra.template_board = ha;


    snk_int = setInterval(snake_tick, snk_set.speed);
    debubg(`[SNAKE]: finished generating and started the snake tick thingy`);
}


function snake_end() {

    snakelock = false;
    mainlock = true;
    document.getElementById("input-div").style.display = "";
    shell.focus();
    clearInterval(snk_int);

}

function snake_display() {
    var le_obama = "";
    var la_obama = [...snk_extra.template_board];

    for (i in snk_save) {
        var cord = snk_save[i];
        debubg(`cord: ${cord}`);
        la_obama[cord[1]][cord[0]] = "#";
    }

    for (i in la_obama) {

        for (e in la_obama[i]) {
            le_obama += la_obama[i][e];
        }
        le_obama += "\n";
    }
    return le_obama;
}



function snake_tick() {
    // run every snake tick

    
    // check cord
    var snk_len = snk_save.length;
    var cur_cord = snk_save[snk_len - 1];
    var new_cord = [(cur_cord[0] + snk_dir[0]), (cur_cord[1] + snk_dir[1])];

    debubg(`\nold cords: ${cur_cord}\nnew cords: ${new_cord}`);

    if (new_cord[0] > -1 && new_cord[1] > -1 && new_cord[0] < snk_len && new_cord[1] < snk_len) {   // within the board

        snk_save.push(new_cord);

    }


    console.log(snk_save);
    setScreen(snake_display());
}
