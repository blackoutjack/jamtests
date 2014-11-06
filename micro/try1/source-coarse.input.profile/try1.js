try {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  x = 2;
} finally {
  x = 3;

  }

  JAM.stopProfile('load');

}

