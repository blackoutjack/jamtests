function f() {

  JAM.startProfile('load');
  this.setter = function() {
    x = 2;
  }
}
function g() {
  this.setter = function() {
    x = 2;

  JAM.stopProfile('load');

  }
}
