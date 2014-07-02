function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function f() {
    x = 2;
  }
  setTimeout(f, 1000);

  }

  return setTimeout(function() { JAMScript.log(typeof x === "undefined"); }, 3000) && "State will be checked in a couple seconds";
}
