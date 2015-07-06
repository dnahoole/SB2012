// Melting image section
var idx = 0;
var sectList = [];

var sect1 = null;
var sect3 = null;
var sect4 = null;

function init() {
    sect1 = document.getElementById('sect1');
    sect3 = document.getElementById('sect3');
    sect4 = document.getElementById('sect4');
    
    window.setInterval("meltImage()", 3000); // animate
    sectList = document.getElementById("sect1").getElementsByTagName("img");
}

function meltImage() {
    var node = sectList[idx % sectList.length];
    node.setAttribute("style", "opacity: 0");
    var node = sectList[++idx % sectList.length];
    node.setAttribute("style", "opacity: 1");
}

window.addEventListener("load", init, false);