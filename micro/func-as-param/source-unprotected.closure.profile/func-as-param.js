
JAM.startProfile('load');
function f(g) {
  g();
}
f(function h$$4() {
  x = 2;
})

JAM.log("Result: " + (typeof x === "undefined"));

JAM.stopProfile('load');
