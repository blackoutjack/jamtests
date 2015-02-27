
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
x = 1;
var e = eval;
var v0 = ["x = 2"];
e.apply(null, v0);
alert(x)

JAM.log("Result: " + (x === 1));

}

JAM.stopProfile('load');
