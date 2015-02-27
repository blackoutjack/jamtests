function f() {
  e("x = 2");
}
x = 0;
var e = eval;
f()

JAM.log("Result: " + (x === 0));
