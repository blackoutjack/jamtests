x = 0;

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  lbl: for (var i=0; i<4; i++) {
  x++;
  if (i == 1) {
    break lbl;

  }

  JAM.stopProfile('load');

  }
}
