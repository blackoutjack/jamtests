function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function f() {
    x = 2;
  }
  setTimeout(f, 1000);

  }

  JAM.stopProfile('load');

  return setTimeout(function() { JAMScript.log(typeof x === "undefined"); }, 3000) && "State will be checked in a couple seconds";
}
