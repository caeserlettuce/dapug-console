// url params

paramsDebugMode(true);

var consoleParams = ["debug", "debugvar"];

addParameters(consoleParams);


var pr_debug = getParameters()[0];
var pr_debugvar = getParameters()[1];




if (pr_debug == "true") {
    debubg("debug true")
    parseCommand("debug"); // im lazy so im making it just run the debug command
}               // aaaaaand its not working