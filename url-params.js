if (autocommand == true) {
    commang.push(`${pr_command}`);
    displayUser(`${pr_command}`, "auto");
    parseCommand(`${pr_command}`);
}
if (autodebugwin == true) {
    debugWindow(true);
}