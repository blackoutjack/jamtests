function runTest() {

  JAM.startProfile('load');
  x = 3;
  function f() {
    return 2;
  }
  x = f()

  JAM.stopProfile('load');

  return x === 3;
}
