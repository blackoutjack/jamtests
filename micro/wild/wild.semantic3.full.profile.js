function runTest() {

  JAM.startProfile('load');
  // wild.js
  var a = "ok";
  JAM.set(a, "innerHTML", 1, JAM.policy.p1)

  JAM.stopProfile('load');

  return a.innerHTML === undefined;
}
