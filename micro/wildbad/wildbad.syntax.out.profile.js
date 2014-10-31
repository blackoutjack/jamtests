function runTest() {

  JAM.startProfile('load');
  // wildbad.js
  var a = document.getElementById("ok");
  JAM.set(a, "innerHTML", 1, JAM.policy.p1)

  JAM.stopProfile('load');

  return a.innerHTML === "THIS SHOULD REMAIN";
}
