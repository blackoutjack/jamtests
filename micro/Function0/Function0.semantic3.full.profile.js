function runTest() {

  JAM.startProfile('load');
  // Function0.js
  var f = JAM.new(Function, ["var x = new XMLHttpRequest(); x.open('http://www.blackoutjack.com/home', true); x.send(null);"]);
  f()

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
