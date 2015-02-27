
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function f() {
  return "exception!";
}
throw f()

JAM.log("Result: " + ("Exception thrown"));

}

JAM.stopProfile('load');
