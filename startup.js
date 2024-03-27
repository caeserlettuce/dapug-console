

// ALSO A GOOD EXAMPLE OF LINEAR COMMANDS
async function startBoot() {

    
    //for (let i = 0; i < 2; i++) {
    //    await newAnim("... ", 250);
    //    await clearScreen();
    //}
    await displayAnim(booty, 20);
    await displayAnim(booty2, 1);
    await displayAnim(booty3, 1);
    await clearScreen();
    await newAnim("Loading Complete.                  ", 20);
    await welcomePage();
    inputlock = false;
    debubg("input lock false.");
    localStorage.setItem("startup", true);
    if (autocommand_wait == true) {
        commang.push(`${pr_command}`);
        displayUser(`${pr_command}`, "auto");
        parseCommand(`${pr_command}`);
    }
}




if (startup == true) {
    startBoot();
}