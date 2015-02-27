
JAM.startProfile('load');
var f = document;
var x = f.getElementById("ok")

JAM.log("Result: " + (typeof x === "undefined"));

JAM.stopProfile('load');
