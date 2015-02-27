
JAM.startProfile('load');
document.getElementsByTagName = document.getElementById;
var elt = document.getElementsByTagName("ok")

JAM.log("Result: " + ("Expect an exception"));

JAM.stopProfile('load');
