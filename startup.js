var startup = false; // REMEMBER TO SET TO TRUE LATER


// ALSO A GOOD EXAMPLE OF LINEAR COMMANDS
async function startBoot() {

    inputlock = true;
    var booty = [
        "Booting Console...                    ",
        "Loading Commands...             "
    ];
    var booty2 = [
        "Loading Server...     ",
        "Loading Inputs...     ",
        "Loading Time...     ",
        "Loading Dogs...     ",
        "Loading Virtual Machine...     ",
        "Loading Technoblade...     ",
        "Loading AI...     ",
        "Loading ae394...     ",
        "Loading VirtualDoe™ Technology...     ",
        "Loading Tea...     "
    ];

    var booty3 = [
        "Loading Network Sliders...     ",
        "Loading Network...     ",
        "Loading Routers...     ",
        "Loading VM With Cheese...     ",
        "Loading What Da Dog Doin...     ",
        "Loading Jesus...     ",
        "Loading Startup Apache...     ",
        "Loading Cache...     ",
        "Loading Produce Section...     ",
        "Loading An Entire Grocery Store...     ",
        "Loading Apples...     ",
        "Loading Pears...     ",
        "Loading Botnet Computers...     ",
        "Loading President Obama...     ",
        "Loading Mint...     ",
        "Loading Linux...     ",
        "Loading Doors...     ",
        "Loading Macrophone...                                  "
    ];

    //for (let i = 0; i < 2; i++) {
    //    await newAnim("... ", 250);
    //    await clearScreen();
    //}
    await animArt(booty, 20);
    await animArt(booty2, 1);
    await animArt(booty3, 0.25);
    await clearScreen();
    await newAnim("Loading Complete.                  ", 20);
    inputlock = false;


}




if (startup == true) {
    startBoot();
}