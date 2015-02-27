
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function f() {
  x = 3;
}
f();
x = 2

JAM.log("Result: " + (x === 3));

}

JAM.stopProfile('load');
