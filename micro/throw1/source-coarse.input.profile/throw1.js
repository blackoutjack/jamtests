function f() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  throw "exception!";

  }

  JAM.stopProfile('load');

}
f();
