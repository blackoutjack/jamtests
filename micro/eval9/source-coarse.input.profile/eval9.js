x = 4;

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function f() {
  var y = x;
  eval("var x;");
  return y;
}
var z = f();

  }

  JAM.stopProfile('load');

// |z| should be 4, not undefined, which would be the case if the
// eval'd string is simply unwrapped.
