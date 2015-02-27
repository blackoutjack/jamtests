
JAM.startProfile('load');
function f() {
  x = 2;
}
f();
x = 2

JAM.log("Result: " + (typeof x === "undefined"));

JAM.stopProfile('load');
