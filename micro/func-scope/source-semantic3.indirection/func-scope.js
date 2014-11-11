function runTest() {
  function v1() {
    var v2 = cnt < 6;
    if (v2) {
      cnt++;
      g();
    }
    return;
  }
  function v0() {
    var v3 = cnt < 3;
    if (v3) {
      cnt++;
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
