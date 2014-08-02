function runTest() {

  JAM.startProfile('load');
  var a = document.getElementById("ok");
  introspect(JAM.policy.pD4D25E04A23263FBD77B896710421141724AE95D) {
    a.innerHTML = 1
  }
  ;

  JAM.stopProfile('load');

  return a.innerHTML === "THIS SHOULD REMAIN";
}
