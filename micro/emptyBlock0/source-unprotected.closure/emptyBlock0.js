function f() {
  if (typeof x === "undefined") {
  } else {
    x = 2;
  }
}
f()

JAM.log("Result: " + (typeof x === "undefined"));
