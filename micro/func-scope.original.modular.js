function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var x = true;
  if (x) {
    var cnt = 0;
    function f() {
      if (cnt < 3) {
        cnt++;
        f();
      }
    }
    var g = function() {
      if (cnt < 6) {
        cnt++;
        g();
      }
    }
    f();
    g();
  }

  }

  return cnt === 6;
}
