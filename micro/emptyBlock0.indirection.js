function runTest() {
  function f() {
    var v1 = typeof x;
    var v0 = v1 === "undefined";
    if(v0) {
    }else {
      introspect(JAM.policy.p6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2) {
        x = 2
      }
    }
    return
  }
  f();

  return typeof x === "undefined";
}
