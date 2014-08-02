function runTest() {

  JAM.startProfile('load');
  function f(){JAM.isEval(eval)?eval("introspect(JAM.policy.pFull) { String.prototype.indexOf = String.prototype.toLowerCase; }"):JAM.call(eval,null,["String.prototype.indexOf = String.prototype.toLowerCase;"]);var v=1;return v}x=f();

  JAM.stopProfile('load');

  return x === "ok";
}
