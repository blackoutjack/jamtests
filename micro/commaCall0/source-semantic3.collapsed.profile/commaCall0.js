
JAM.startProfile('load');
function g() {
  return 2;
}
f = g;
0;
1;
2;
var v0 = eval;
var v1 = JAM.call(v0, null, ["f()"]);
introspect(JAM.policy.p1) {
  x = v1
}

JAM.log("Result: " + ("Violation should be blocked"));

JAM.stopProfile('load');
