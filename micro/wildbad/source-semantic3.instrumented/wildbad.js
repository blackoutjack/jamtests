function runTest() {
  var a = document.getElementById("ok");
  introspect(JAM.policy.p1) {
    a.innerHTML = 1;
  }

  return a.innerHTML === "THIS SHOULD REMAIN";
}
