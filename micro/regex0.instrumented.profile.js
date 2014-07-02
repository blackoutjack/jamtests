function runTest() {

  JAM.startProfile('load');
var elt = document.createElement("img");
  introspect(JAMScript.introspectors.process893C21256E1ACD70D57A0BEE1B36844C20B1C751) {
    elt.setAttribute("src", " HTTP://www.blackoutjack.com/pics/TweekGhost.jpg")
  }
  var v0 = document.body;
  v0.appendChild(elt);

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
