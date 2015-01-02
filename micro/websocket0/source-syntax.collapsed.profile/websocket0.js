
JAM.startProfile('load');
function runTest() {
  function f() {
    var w$$5 = JAM.call(WebSocket, null, ["ws://www.blackoutjack.com"], JAM.policy.p1);
    return;
  }
  f()

  return "RESULT NOT SPECIFIED";
}

JAM.stopProfile('load');
