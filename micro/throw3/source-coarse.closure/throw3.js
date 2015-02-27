introspect(JAM.policy.pFull) {
function f() {
  throw x = 2;
}
f()

JAM.log("Result: " + ("RESULT NOT SPECIFIED"));

}
