function f() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  if (typeof x === "undefined") {
    //do nothing
  } else {
    x = 2;
  }

  }

  JAM.stopProfile('load');

}
f();
