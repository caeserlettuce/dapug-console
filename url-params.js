if (autocommand == true) {
    
    if (startup == true) {
        autocommand_wait = true;
    } else {
        commang.push(`${pr_command}`);
        displayUser(`${pr_command}`, "auto");
        parseCommand(`${pr_command}`);
    }
}
if (autodebugwin == true) {
    debugWindow(true);
}