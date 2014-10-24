function runTest() {
  function f(){}document.getElementById=f;var elt=JAM.call(document.getElementById,document,["ok"])

  return "RESULT NOT SPECIFIED";
}
