
JAM.startProfile('load');
var a = document;
a.cookie = "ok"

JAM.log("Result: " + (document.cookie !== "ok"));

JAM.stopProfile('load');
