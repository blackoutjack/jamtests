
JAM.startProfile('load');
function runTest() {
  function f() {
    return this.indexOf("k");
  }
  var g = f.bind("ok");
  var v = g()

  return v === 1;
}

JAM.stopProfile('load');
