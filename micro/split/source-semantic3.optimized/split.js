function runTest() {
  var a=JAM.call(document.write,document,["ok"],JAM.policy.p2),b=JAM.call(document.createElement,document,["script"],JAM.policy.p1),c=JAM.call(document.write,document,["fine"],JAM.policy.p2)

  return "RESULT NOT SPECIFIED";
}
