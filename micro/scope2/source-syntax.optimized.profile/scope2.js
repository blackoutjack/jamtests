
JAM.startProfile('load');
function runTest() {
  function f(p){alert(p)}function c(){this.m=f}var o=new c,a=JAM.call(o.m,o,["ok"])

  return a === undefined;
}

JAM.stopProfile('load');
