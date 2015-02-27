
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function f() {
  x = 2;
}
f();
x = 2

JAM.log("Result: " + (typeof x === "undefined"));

}

JAM.stopProfile('load');
