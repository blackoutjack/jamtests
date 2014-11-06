function f() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  return "exception!";

  }

  JAM.stopProfile('load');

}
throw f();
