function runTest() {

  JAM.startProfile('load');
function f(p) {
    alert(p);
    return
  }
  function c() {
    this.m = f;
    return
  }
  var o = new c;
  var a = JAMScript.call(o.m, o, ["ok"]);

  JAM.stopProfile('load');

  return a === undefined;
}
