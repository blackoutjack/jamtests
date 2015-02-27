
JAM.startProfile('load');
var f = document;
var x = f.getElementsByTagName("ok")

JAM.log("Result: " + (x instanceof HTMLCollection));

JAM.stopProfile('load');
