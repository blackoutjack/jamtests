function runTest() {

  JAM.startProfile('load');
var a=JAMScript.callIntrospect(document.write,document,["ok"],JAMScript.introspectors.process2AC16C3A7F558F03B7589B0B341CC13E0A9FCA1E),b=JAMScript.callIntrospect(document.createElement,document,["script"],JAMScript.introspectors.process4E61D3C9E799EB3A777EE89D7018CA08390F879C),c=JAMScript.callIntrospect(document.write,document,["fine"],JAMScript.introspectors.process2AC16C3A7F558F03B7589B0B341CC13E0A9FCA1E);

  JAM.stopProfile('load');

  return "Expect an exception";
}
