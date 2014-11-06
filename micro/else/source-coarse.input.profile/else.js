x = 4; 

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  if (x == 4) {
  x = 3;
} else {

  }

  JAM.stopProfile('load');

  x = 2;
}
