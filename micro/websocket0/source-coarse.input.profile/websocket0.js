
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function f() {
  var w = WebSocket('ws://www.blackoutjack.com');
}
f();

}

JAM.stopProfile('load');
