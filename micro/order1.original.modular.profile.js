function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  function f() {
    return { ok: "got it!" };
  }
  function g() {
    return "ok";
  }
  var v = f()[g()];

  }

  JAM.stopProfile('load');

  return v === "got it!";
}
