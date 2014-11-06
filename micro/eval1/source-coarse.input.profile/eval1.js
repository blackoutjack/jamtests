x = 0;

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function f() {
  eval("x = 2");

  }

  JAM.stopProfile('load');

}
f();
