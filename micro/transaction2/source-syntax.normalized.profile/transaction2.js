function runTest() {

  JAM.startProfile('load');
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

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
