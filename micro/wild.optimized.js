function runTest() {
  var a="ok";JAM.set(a,"innerHTML",1,JAM.policy.p1);

  return a.innerHTML === undefined;
}
