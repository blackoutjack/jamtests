function f() {
  eval("x = 2");
  return;
}
x = 0;
f()

JAM.log("Result: " + (x === 0));
