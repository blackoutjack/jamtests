function runTest() {

  JAM.startProfile('load');
  // for1.js
  var i = 0;
  for (;;) {
    if (i > 5) {
      break;
    }
    i = i + 1;
  }

  JAM.stopProfile('load');

  return i === 6;
}
