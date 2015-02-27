
JAM.startProfile('load');
var a = [4, 6, 8, 10, 12];
var b;
var i = 0;
b = a[i] = a[i] + (i = i + 1);
alert("a: " + a + " b: " + b + " i: " + i)

JAM.log("Result: " + (b === 5 && i === 1));

JAM.stopProfile('load');
