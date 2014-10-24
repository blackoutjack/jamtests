function runTest() {
  with(document)var elt=JAM.call(getElementById,null,["note"],JAM.policy.p1);JAM.set(elt,"innerHTML","ok")

  return "RESULT NOT SPECIFIED";
}
