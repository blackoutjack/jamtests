function runTest() {

  JAM.startProfile('load');
function g(){return 2}f=g;var v0=eval;introspect(JAMScript.introspectors.processAll)x=v0("f()");

  JAM.stopProfile('load');

  return "Violation should be blocked";
}
