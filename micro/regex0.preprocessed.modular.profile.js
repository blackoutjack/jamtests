function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var elt = document.createElement("img");
  elt.setAttribute("src", " HTTP://www.blackoutjack.com/pics/TweekGhost.jpg");
  var v0 = document.body;
  v0.appendChild(elt);

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
