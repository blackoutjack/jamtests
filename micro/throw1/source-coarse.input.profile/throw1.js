
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function f() {
  throw "exception!";
}
f();

}

JAM.stopProfile('load');
