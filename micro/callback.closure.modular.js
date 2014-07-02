function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function f() {
    x = 2
  }
  setTimeout(f, 1E3);

  }

  return setTimeout(function() { JAMScript.log(typeof x === "undefined"); }, 3000) && "State will be checked in a couple seconds";
}
