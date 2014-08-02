function runTest() {
  function f() {
    if(typeof x === "undefined") {
    }else {
      x = 2
    }
  }
  f();

  return typeof x === "undefined";
}
