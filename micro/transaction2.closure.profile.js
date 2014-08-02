function runTest() {

  JAM.startProfile('load');
  function f() {
    var v111 = 1;
    x = undefined;
    introspect(alert) {
      x = 2
    }
    alert(x)
  }
  f();

  JAM.stopProfile('load');

  return "The Tx object should be alerted, followed by 'undefined'";
}
