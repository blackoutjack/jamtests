function runTest() {
  // wildbad.js
  var a = document.getElementById("ok");
  JAM.set(a, "innerHTML", 1, JAM.policy.p1)

  return a.innerHTML === "THIS SHOULD REMAIN";
}
