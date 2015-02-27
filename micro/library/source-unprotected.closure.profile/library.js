
JAM.startProfile('load');
function f() {
  this.setter = function() {
    x = 2;
  };
}
function g() {
  this.setter = function() {
    x = 2;
  };
}

JAM.log("Result: " + ("No state to inspect"));

JAM.stopProfile('load');
