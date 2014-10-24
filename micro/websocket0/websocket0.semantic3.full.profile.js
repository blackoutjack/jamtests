function runTest() {

  JAM.startProfile('load');
  // websocket0.js
  function f() {
    var w$$5 = JAM.call(WebSocket, null, ["ws://www.blackoutjack.com"], JAM.policy.p1);
    return;
  }
  f()

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
