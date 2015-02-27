function f() {
  if (typeof x === "undefined") {
  } else {
    introspect(JAM.policy.p1) {
      x = 2;
    }
  }
  return;
}
f()

JAM.log("Result: " + (typeof x === "undefined"));
