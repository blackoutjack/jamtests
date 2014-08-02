function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  eval("var x = 4;");
  function f() {
    var y = x;
    eval("var z;");
    return y;
  }
  z = f();
  alert(z);
  // |z| should be 4, not undefined, which would be the case if the
  // eval'd string is doubly unwrapped. It is safe to unwrap once though.

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
