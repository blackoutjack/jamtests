function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  try {
    x = 2
  }finally {
    x = 3
  }
  ;

  }

  JAM.stopProfile('load');

  return x === 3;
}
