function runTest() {
  function f(){}document.getElementById=f;var elt=JAM.call(document.getElementById,document,["ok"],JAM.policy.p1)

  return "RESULT NOT SPECIFIED";
}
