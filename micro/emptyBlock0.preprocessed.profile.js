function runTest() {

  JAM.startProfile('load');
function f() {
    var v1 = typeof x;
    var v0 = v1 === "undefined";
    if(v0) {
    }else {
      x = 2
    }
    return
  }
  f();

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
