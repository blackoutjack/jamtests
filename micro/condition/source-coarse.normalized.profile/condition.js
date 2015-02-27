
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var P = false;
if (P) {
  x = 2;
}

JAM.log("Result: " + (typeof x === "undefined"));

}

JAM.stopProfile('load');
