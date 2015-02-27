
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function a() {
  var z$$3 = 2;
  return z$$3;
}
var z = 3;
x = a()

JAM.log("Result: " + (typeof x === "undefined"));

}

JAM.stopProfile('load');
