
JAM.startProfile('load');
var f = new Function("var x = new XMLHttpRequest(); x.open('http://www.blackoutjack.com/home', true); x.send(null);");
f()

JAM.log("Result: " + (typeof x === "undefined"));

JAM.stopProfile('load');
