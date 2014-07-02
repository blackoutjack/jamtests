function runTest() {
function g(){return 2}f=g;var v0=eval;introspect(JAMScript.introspectors.processAll)x=v0("f()");

  return "Violation should be blocked";
}
