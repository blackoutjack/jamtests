function g() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  return 2;
}

  }

  JAM.stopProfile('load');

f = g; // To avoid scoping issues with test framework.
x = (0, 1, 2, eval)('f()');
