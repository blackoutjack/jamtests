
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

JAM.log("Result: " + " + respred ");

JAM.stopProfile('load');
