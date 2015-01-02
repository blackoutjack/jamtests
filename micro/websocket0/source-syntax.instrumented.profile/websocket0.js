
JAM.startProfile('load');
function runTest() {
  function f() {
    introspect(JAM.policy.p1) {
      var w$$5 = WebSocket("ws://www.blackoutjack.com")
    }
    return;
  }
  f()

  return "RESULT NOT SPECIFIED";
}

JAM.stopProfile('load');
