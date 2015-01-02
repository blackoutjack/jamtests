
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
x = 1;
var e = eval;
e.apply(null, ["x = 2"]);
alert(x)

JAM.log("Result: " + " + respred ");

}

JAM.stopProfile('load');
