
JAM.startProfile('load');
var a = document;
var b = a.cookie

JAM.log("Result: " + (b === undefined));

JAM.stopProfile('load');
