function runTest() {

  JAM.startProfile('load');
  function f() {
    x = 3
  }
  f();
  x = 2;

  JAM.stopProfile('load');

  return x === 3;
}
