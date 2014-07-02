function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function f() {
    return{ok:"got it!"}
  }
  function g() {
    return"ok"
  }
  var v = f()[g()];

  }

  return v === "got it!";
}
