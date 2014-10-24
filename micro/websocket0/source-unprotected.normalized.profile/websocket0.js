function runTest() {

  JAM.startProfile('load');
  function f() {
    var w$$5 = WebSocket("ws://www.blackoutjack.com");
    return;
  }
  f()

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
