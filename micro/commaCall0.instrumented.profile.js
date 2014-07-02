function runTest() {

  JAM.startProfile('load');
function g() {
    return 2
  }
  f = g;
  0;
  1;
  2;
  var v0 = eval;
  introspect(JAMScript.introspectors.process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2) {
    x = v0("f()")
  }
  ;

  JAM.stopProfile('load');

  return "Violation should be blocked";
}
