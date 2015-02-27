
JAM.startProfile('load');
var a = 0;
var b = 10;
var c = 20;
a = b = b + (c = c + 2);
alert("a: " + a + " b: " + b + " c: " + c)

JAM.log("Result: " + (a === 32 && b === 32 && c === 22));

JAM.stopProfile('load');
