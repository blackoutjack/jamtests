
JAM.startProfile('load');
var x = XMLHttpRequest();
introspect(JAM.policy.p1) {
  x.open("GET", "http://www.blackoutjack.com?secret=1");
}

JAM.log("Result: " + ("RESULT NOT SPECIFIED"));

JAM.stopProfile('load');
