function runTest() {

  JAM.startProfile('load');
function f(){}document.getElementById=f;var elt=JAMScript.call(document.getElementById,document,["ok"]);

  JAM.stopProfile('load');

  return elt === undefined;
}
