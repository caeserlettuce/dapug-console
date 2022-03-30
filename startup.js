

// ALSO A GOOD EXAMPLE OF LINEAR COMMANDS
async function startBoot() {

    
    //for (let i = 0; i < 2; i++) {
    //    await newAnim("... ", 250);
    //    await clearScreen();
    //}
    await displayAnim(booty, 20);
    newLine();
    await displayAnim(booty2, 1);
    newLine();
    await displayAnim(booty3, 1);
    await clearScreen();
    await newAnim("Loading Complete.                  ", 20);
    inputlock = false;
    debubg("input lock false.");
    localStorage.setItem("startup", true);

}




if (startup == true) {
    startBoot();
}