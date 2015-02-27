
JAM.startProfile('load');
var a = "ok";
var b = "k";
var c = JAM.call(a.indexOf, a, [b], JAM.policy.p1);
alert(c)

JAM.log("Result: " + ("RESULT NOT SPECIFIED"));

JAM.stopProfile('load');
