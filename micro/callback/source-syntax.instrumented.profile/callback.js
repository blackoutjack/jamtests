function runTest() {

  JAM.startProfile('load');
  function f() {
    introspect(JAM.policy.p1) {
      x = 2;
    }
    return;
  }
  setTimeout(f, 1E3)

  JAM.stopProfile('load');

  return setTimeout(function() { JAMScript.log(typeof x === "undefined"); }, 3000) && "State will be checked in a couple seconds";
}
