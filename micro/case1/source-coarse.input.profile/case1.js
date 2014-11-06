x = 1;

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  switch (x) {
  case 1:
    y = x;
    alert(x);
  default:
    alert(x + 1);

  }

  JAM.stopProfile('load');


}
