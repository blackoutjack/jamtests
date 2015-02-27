
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var a = "ok";
a.innerHTML = 1

JAM.log("Result: " + (a.innerHTML === undefined));

}

JAM.stopProfile('load');
