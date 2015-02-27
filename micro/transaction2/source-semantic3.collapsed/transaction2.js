function f() {
  var v111 = 1;
  x = undefined;
  introspect(p.alert) {
    introspect(JAM.policy.p1) {
      x = 2;
    }
  }
  alert(x);
  return;
}
f()

JAM.log("Result: " + ("The Tx object should be alerted, followed by 'undefined'"));
