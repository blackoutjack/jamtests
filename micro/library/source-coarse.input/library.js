function f() {
  introspect(JAM.policy.pFull) {
  this.setter = function() {
    x = 2;
  }
}
function g() {
  this.setter = function() {
    x = 2;

  }

  }
}
