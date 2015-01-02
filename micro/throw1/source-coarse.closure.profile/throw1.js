
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function f() {
  throw "exception!";
}
f()

JAM.log("Result: " + " + respred ");

}

JAM.stopProfile('load');
