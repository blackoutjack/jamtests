function runTest() {
  function f() {
    introspect(JAM.policy.p1) {
      x = 2
    }
    return
  }
  JAM.call(setTimeout, null, [f, 1E3]);

  return setTimeout(function() { JAMScript.log(typeof x === "undefined"); }, 3000) && "State will be checked in a couple seconds";
}
