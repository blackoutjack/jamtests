
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function f() {
  e("x = 2");
}
x = 0;
var e = eval;
f()

JAM.log("Result: " + (x === 0));

}

JAM.stopProfile('load');
