
JAM.startProfile('load');
var f = JAM.new(Function, ["var x = new XMLHttpRequest(); x.open('http://www.blackoutjack.com/home', true); x.send(null);"]);
f()

JAM.log("Result: " + " + respred ");

JAM.stopProfile('load');
