function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  x = 1;
  switch(x) {
    case 1:
      y = x;
      alert(x);
    default:
      alert(x + 1)
  }
  ;

  }

  JAM.stopProfile('load');

  return x === 1 && y === 1;
}
