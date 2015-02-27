
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function f() {
  return 4;
}
x = 3;
x = f()

JAM.log("Result: " + (x === 4));

}

JAM.stopProfile('load');
