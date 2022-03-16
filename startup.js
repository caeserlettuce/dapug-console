

// ALSO A GOOD EXAMPLE OF LINEAR COMMANDS
async function startBoot() {

    
    //for (let i = 0; i < 2; i++) {
    //    await newAnim("... ", 250);
    //    await clearScreen();
    //}
    await animArt(booty, 20);
    newLine();
    await animArt(booty2, 1);
    newLine();
    await animArt(booty3, 0.25);
    await clearScreen();
    await newAnim("Loading Complete.                  ", 20);
    inputlock = false;
    debubg("input lock false.");
    localStorage.setItem("startup", true);

}




if (startup == true) {
    startBoot();
}