function runTest() {
function f(){}document.getElementById=f;var elt=JAMScript.call(document.getElementById,document,["ok"]);

  return elt === undefined;
}
