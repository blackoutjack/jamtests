function runTest() {

  JAM.startProfile('load');
  function v1() {
    if (cnt < 6) {
      cnt = cnt + 1;
      g();
    }
    return;
  }
  function v0() {
    if (cnt < 3) {
      cnt = cnt + 1;
      f();
    }
    return;
  }
  var x = true;
  if (x) {
    var f = v0;
    var cnt = 0;
    var g = v1;
    f();
    g();
  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
