x = 2;

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  x = 3;

  }

  JAM.stopProfile('load');

x = 2;
x = 4;
