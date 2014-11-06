function f() {

  JAM.startProfile('load');
  var w = WebSocket('ws://www.blackoutjack.com');

  JAM.stopProfile('load');

}
f();
