function runTest() {

  JAM.startProfile('load');
  var x = XMLHttpRequest();
  x.open("GET", "http://www.blackoutjack.com?secret=1")

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
