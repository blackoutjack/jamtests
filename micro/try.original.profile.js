function runTest() {

  JAM.startProfile('load');
  try {
      x = 1;
  } catch(e) {
      x = 2;
  }

  JAM.stopProfile('load');

  return x === 1;
}
