function runTest() {
  introspect(JAM.policy.pFull) {
  var elt = document.createElement("img");
  elt.setAttribute("src", " HTTP://www.blackoutjack.com/pics/TweekGhost.jpg");
  document.body.appendChild(elt);

  }

  return "RESULT NOT SPECIFIED";
}
