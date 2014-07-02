function runTest() {

  JAM.startProfile('load');
function f() {
    x = 2;
    return
  }
  f();
  x = 2;

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
