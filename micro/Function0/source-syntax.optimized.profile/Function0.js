
JAM.startProfile('load');
function runTest() {
  var f=JAM.new(Function,["var x = new XMLHttpRequest(); x.open('http://www.blackoutjack.com/home', true); x.send(null);"]);f()

  return typeof x === "undefined";
}

JAM.stopProfile('load');
