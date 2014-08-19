function runTest() {

  JAM.startProfile('load');
  document.getElementsByTagName=document.getElementById;var elt=JAM.call(document.getElementsByTagName,document,["ok"],JAM.policy.p1);

  JAM.stopProfile('load');

  return "Expect an exception";
}
