
JAM.startProfile('load');
document.getElementById = document.getElementsByTagName;
var elt = document.getElementById("ok")

JAM.log("Result: " + (elt instanceof HTMLCollection));

JAM.stopProfile('load');
