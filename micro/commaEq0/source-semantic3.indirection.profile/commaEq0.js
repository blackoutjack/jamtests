
JAM.startProfile('load');
var a;
var b = [5, 6, 7, 8];
var c = [9, 10];
var d = 2;
var e = 1;
b = c[e];
var v0 = d + 1;
a = b[v0]

JAM.log("Result: " + (typeof a === "undefined" && b === 10));

JAM.stopProfile('load');
