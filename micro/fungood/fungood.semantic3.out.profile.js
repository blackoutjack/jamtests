function runTest() {

  JAM.startProfile('load');
  // fungood.js
  function f() {
    return 4;
  }
  x = 3;
  x = f()

  JAM.stopProfile('load');

  return x === 4;
}
