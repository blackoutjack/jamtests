function runTest() {

  JAM.startProfile('load');
  // eval1.js
  function f() {
    if (JAM.isEval(eval)) {
      eval("introspect(JAM.policy.pFull) { " + "x = 2" + " }");
    } else {
      JAM.call(eval, null, ["x = 2"]);
    }
    return;
  }
  introspect(JAM.policy.p1) {
    x = 0;
  }
  f()

  JAM.stopProfile('load');

  return x === 0;
}
