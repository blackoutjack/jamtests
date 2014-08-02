function runTest() {

  JAM.startProfile('load');
  var a=JAM.call(document.write,document,["ok"],JAM.policy.p2AC16C3A7F558F03B7589B0B341CC13E0A9FCA1E),b=JAM.call(document.createElement,document,["script"],JAM.policy.p4E61D3C9E799EB3A777EE89D7018CA08390F879C),c=JAM.call(document.write,document,["fine"],JAM.policy.p2AC16C3A7F558F03B7589B0B341CC13E0A9FCA1E);

  JAM.stopProfile('load');

  return "Expect an exception";
}
