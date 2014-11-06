function f() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  x = 3;
}

  }

  JAM.stopProfile('load');

f();
x = 2;
