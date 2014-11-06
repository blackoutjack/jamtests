function f() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  this.setter = function() {
    x = 2;
  }
}
function g() {
  this.setter = function() {
    x = 2;

  }

  JAM.stopProfile('load');

  }
}
