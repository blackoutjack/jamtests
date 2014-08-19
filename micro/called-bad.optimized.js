function runTest() {
  var f=document,x=JAM.call(f.getElementById,f,["ok"],JAM.policy.p1);

  return typeof x === "undefined";
}
