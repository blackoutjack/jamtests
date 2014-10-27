function runTest() {
  var f=document,x=JAM.call(f.getElementsByTagName,f,["ok"],JAM.policy.p1)

  return x instanceof HTMLCollection;
}
