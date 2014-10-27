function runTest() {

  JAM.startProfile('load');
  var a=document.getElementById("ok");JAM.set(a,"innerHTML",1,JAM.policy.p1)

  JAM.stopProfile('load');

  return a.innerHTML === "THIS SHOULD REMAIN";
}
