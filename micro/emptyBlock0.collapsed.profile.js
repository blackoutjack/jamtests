function runTest() {

  JAM.startProfile('load');
  function f() {
    if(typeof x === "undefined") {
    }else {
      introspect(JAM.policy.p6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2) {
        x = 2
      }
    }
    return
  }
  f();

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
