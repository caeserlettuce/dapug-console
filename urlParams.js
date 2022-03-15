// CODE BY CAESERLETTUCE ON GITHUB

// this is a library/function thing that makes it easy to set up url parameters ( https://yoursite.com/app?debugmode=true )
// like that

// CHECK README.md FOR ALL INFORMATION ABOUT THIS LIBRARY

// variables setup
var urlParamsList = [];        // the actual names of the parameters in the url
// use params.push() to append
var THEdebug = true;
var glob = false;   // global variable setting is false by default

function yayaDEBUG(message) {
    if (THEdebug == true) {
        debubg(`[URLPARAMS]: ${message}`);
    }
}

// global variable settinng-ness is SCREWING things up in my script

function globalVars(boo) {
    glob = boo;
}

function paramsDebugMode(value) {
    if (value == true) {
        THEdebug = true
    } else if (value == false) {
        THEdebug = false
    } else {
        alert("please use boolean true or false for debug mode.");
        console.log("please use boolean true or false for debug mode.");
    }
}



// set up the linky thing
const queryString = window.location.search;
const urlParameters = new URLSearchParams(queryString);


function addParameter(param) {
    // adds a parameter to what it will listen to
    yayaDEBUG(`adding parameter ${param}`);
    urlParamsList.push(param);
    yayaDEBUG(`URL PARAMS: ${urlParamsList}`);
}

function addParameters(params) {
    // adds parameters to what it will listen to from a list
    for (let i = 0; i < params.length; i++ ) {
        yayaDEBUG(`adding parameter ${params[i]}`);
        urlParamsList.push(params[i]);
        yayaDEBUG(`URL PARAMS: ${urlParamsList}`);


    }
}



function getParameters() {
    // will return a list of all parameters
    yayaDEBUG("getting parameters...");
    var final = [];


    for (let i = 0; i < urlParamsList.length; i++ ) {
        yayaDEBUG(i);
        yayaDEBUG(`getting parameter ${urlParamsList[i]}`);
        paramOutput = urlParameters.get(urlParamsList[i]);
        yayaDEBUG(`param output: ${paramOutput}`);
        if (glob == true) {
            eval(`window.${urlParamsList[i]} = '${paramOutput}'`);
        }
        final.push(paramOutput)
    }
    return final;

}