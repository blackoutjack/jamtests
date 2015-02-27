
JAM.startProfile('load');
function f() {
  x = 3;
}
f();
x = 2

JAM.log("Result: " + (x === 3));

JAM.stopProfile('load');
