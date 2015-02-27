introspect(JAM.policy.pFull) {
function f() {
  var y$$30 = x;
  eval("var x;");
  return y$$30;
}
x = 4;
var z = f()

JAM.log("Result: " + ("RESULT NOT SPECIFIED"));

}
