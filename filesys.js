function toggleFileSys() {
    if (filesys == false) {
        filesys = true;
        mainsys = false;
    } else if (filesys == true) {
        filesys = false;
        mainsys = true;
    }
}


var hlepy = [
    "FILESYS HELP PAGE",
    "help | shows this page",
    "quit | quits out of the filesystem"
];



function filesysParse(command) {
    // thingy

    commandInit = command;
    command = command.toLowerCase();
    debubg(command);

    if (command == "help") {
        newLine();
        animArt(hlepy, 10);
    } else if (command == "sys") {
        newLine();
        newAnim("you are currently in FILESYS.", 20);
    } else if (command == "mainsys" || command == "quit") {
        toggleFileSys();
        newLine();
        var switchy = [
            "Switching to MAINSYS."
        ];
        animArt(switchy, 20);
    }




    else {
        newLine();
        newAnim(`command error: ${commandInit} is not an existing command.`, 20);
    }


}