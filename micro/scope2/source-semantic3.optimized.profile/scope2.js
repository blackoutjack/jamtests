function runTest() {

  JAM.startProfile('load');
  function f(p){alert(p)}function c(){this.m=f}var o=new c,a=JAM.call(o.m,o,["ok"])

  JAM.stopProfile('load');

  return a === undefined;
}
