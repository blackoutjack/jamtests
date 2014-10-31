function runTest() {

  JAM.startProfile('load');
  // fun.js
  function f() {
    return 2;
  }
  x = 3;
  x = f()

  JAM.stopProfile('load');

  return x === 3;
}
