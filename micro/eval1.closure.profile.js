function runTest() {

  JAM.startProfile('load');
function f() {
    eval("x = 2")
  }
  x = 0;
  f();

  JAM.stopProfile('load');

  return x === 0;
}
