function runTest() {
  function f() {
    var v111 = 1;
    x = undefined;
    introspect(p.alert) {
      x = 2;
    }
    alert(x);
    return;
  }
  f()

  return "RESULT NOT SPECIFIED";
}
