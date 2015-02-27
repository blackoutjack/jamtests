
JAM.startProfile('load');
function g() {
  return 2;
}
f = g;
x = (0, 1, 2, eval)("f()")

JAM.log("Result: " + ("Violation should be blocked"));

JAM.stopProfile('load');
