introspect(JAM.policy.pFull) {
function f() {
  throw "exception!";
}
f()

JAM.log("Result: " + ("Exception thrown"));

}
