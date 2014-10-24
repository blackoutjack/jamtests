function runTest() {

  JAM.startProfile('load');
  function f(){}document.getElementById=f;var elt=JAM.call(document.getElementById,document,["ok"])

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
