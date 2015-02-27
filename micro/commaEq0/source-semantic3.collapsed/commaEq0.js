var a;
var b = [5, 6, 7, 8];
var c = [9, 10];
var d = 2;
var e = 1;
b = c[e];
a = b[d + 1]

JAM.log("Result: " + (typeof a === "undefined" && b === 10));
