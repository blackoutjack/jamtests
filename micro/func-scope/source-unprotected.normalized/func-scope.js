function runTest() {
  function v1() {
    var v2 = cnt < 6;
    if (v2) {
      cnt = cnt + 1;
      g();
    }
    return;
  }
  function v0() {
    var v3 = cnt < 3;
    if (v3) {
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

  return cnt === 6;
}
