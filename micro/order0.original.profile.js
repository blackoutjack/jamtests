function runTest() {

  JAM.startProfile('load');
function f() {
    return 2;
  }
  function g() {
    return 1;
  }
  var v = 5;
  var a = v + (++v, f()) + g();

  JAM.stopProfile('load');

  return a === 8;
}
