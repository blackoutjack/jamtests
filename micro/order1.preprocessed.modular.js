function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function f() {
    return{ok:"got it!"}
  }
  function g() {
    return"ok"
  }
  var v0 = f();
  var v1 = g();
  var v = v0[v1];

  }

  return v === "got it!";
}
