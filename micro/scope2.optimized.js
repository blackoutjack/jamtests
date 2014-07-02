function runTest() {
function f(p){alert(p)}function c(){this.m=f}var o=new c,a=JAMScript.call(o.m,o,["ok"]);

  return a === undefined;
}
