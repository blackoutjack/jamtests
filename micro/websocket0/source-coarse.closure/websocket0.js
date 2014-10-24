function runTest() {
  introspect(JAM.policy.pFull) {
  function f() {
    var w$$5 = WebSocket("ws://www.blackoutjack.com");
  }
  f()

  }

  return "RESULT NOT SPECIFIED";
}
