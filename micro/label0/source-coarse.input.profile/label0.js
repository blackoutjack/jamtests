
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
x = 0;
lbl: for (var i=0; i<4; i++) {
  x++;
  if (i == 1) {
    break lbl;
  }
}

}

JAM.stopProfile('load');
