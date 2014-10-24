function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function f() {
    return{ok:"got it!"};
  }
  function g() {
    return "ok";
  }
  var v0 = f();
  var v1 = g();
  var v = v0[v1]

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
