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
            //debubg(`cord: ${cord}`);
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
        

        debubg(`\nold cords: ${cur_cord}\nnew cords: ${new_cord}\ndir: ${snk_dir}`);

        if (new_cord[0] == snk_food[0] && new_cord[1] == snk_food[1]) {

            debubg("food found!");
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
