function f() {
  var v111 = 1;
  x = undefined;
  introspect(p.alert) {
    x = 2;
  }
  alert(x);
}
f()

JAM.log("Result: " + ("The Tx object should be alerted, followed by 'undefined'"));
