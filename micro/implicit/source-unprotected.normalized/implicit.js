function f() {
  x = 3;
  return;
}
f();
x = 2

JAM.log("Result: " + (x === 3));
