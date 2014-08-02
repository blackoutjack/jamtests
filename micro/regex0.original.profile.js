function runTest() {

  JAM.startProfile('load');
  var elt = document.createElement("img");
  elt.setAttribute("src", " HTTP://www.blackoutjack.com/pics/TweekGhost.jpg");
  document.body.appendChild(elt);

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
