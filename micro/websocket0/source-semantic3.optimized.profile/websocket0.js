function runTest() {

  JAM.startProfile('load');
  function f(){JAM.call(WebSocket,null,["ws://www.blackoutjack.com"],JAM.policy.p1)}f()

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
