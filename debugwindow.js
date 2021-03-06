// Make the DIV element draggable:
//dragElement(document.getElementById("debub"));
//dragElement(document.getElementById("debubvar"));
dragElement(document.getElementById("songinfo"));
dragElement(document.getElementById("p1cred"));
dragElement(document.getElementById("p2cred"));
dragElement(document.getElementById("p1ascii"));

function dragElement(elmnt) {
  

  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "mouse")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "mouse").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    //document.getElementById("debub").style.zIndex = 100;
    //document.getElementById("debubvar").style.zIndex = 100;
    document.getElementById("songinfo").style.zIndex = 100;
    document.getElementById("p1cred").style.zIndex = 100;
    document.getElementById("p2cred").style.zIndex = 100;
    document.getElementById("p1ascii").style.zIndex = 100;
    elmnt.style.zIndex = 150;
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}