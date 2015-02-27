
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
x = 1;
var e = eval;
e.apply(null, ["x = 2"]);
alert(x)

JAM.log("Result: " + (x === 1));

}

JAM.stopProfile('load');
