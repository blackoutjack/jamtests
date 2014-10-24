function runTest() {
  var x = XMLHttpRequest();
  JAM.call(x.open, x, ["GET", "http://www.blackoutjack.com?secret=1"], JAM.policy.p1)

  return "RESULT NOT SPECIFIED";
}
