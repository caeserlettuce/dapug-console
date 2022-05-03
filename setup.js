var display_textsize = [0, 0];  // the width and height in pixels of a single character in console
var display_charsize = [0, 0];  // how many characters can be along the x and y axis of the console until its filled up

/*
function inVertiViewport($el) {
    var elH = $el.outerHeight(),
        H   = $(window).height(),
        r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));
}

function inHorizViewport($el) {
    var elH = $el.outerWidth(),
        H   = $(window).width(),
        r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));
}

var vis_consywidth = inHorizViewport($('#consy'));
var vis_consyheight = inVertiViewport($('#consy'));
*/

var vis_consywidth = 20;
var vis_consyheight = 20;


display_textsize[0] = document.getElementById("regtext").clientWidth;
display_textsize[1] = document.getElementById("regtext").clientHeight;

display_charsize[0] = Math.floor( vis_consywidth / display_textsize[0]);
display_charsize[1] = Math.floor( vis_consyheight / display_textsize[1]);




var song_err = false;
var user = "user";
var version = "0.6.5";