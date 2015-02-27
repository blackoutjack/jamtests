
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var a = document;
var b = a.cookie

JAM.log("Result: " + (b === undefined));

}

JAM.stopProfile('load');
