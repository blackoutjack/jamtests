try {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  x = 1;
} catch(e) {

  }

  JAM.stopProfile('load');

    x = 2;
}
