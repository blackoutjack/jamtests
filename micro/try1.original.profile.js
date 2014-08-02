function runTest() {

  JAM.startProfile('load');
  try {
    x = 2;
  } finally {
    x = 3;
  }

  JAM.stopProfile('load');

  return x === 3;
}
