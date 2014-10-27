function runTest() {
  var a=JAM.call(document.write,document,["ok"],JAM.policy.p2),b=JAM.call(document.createElement,document,["script"],JAM.policy.p2),c=JAM.call(document.write,document,["fine"],JAM.policy.p2)

  return "Expect an exception";
}
