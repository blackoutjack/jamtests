function f() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var v111 = 1;
  x = undefined;
  introspect(p.alert) {
    x = 2
  }
  alert(x);

  }

  JAM.stopProfile('load');

}
f();
