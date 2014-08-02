function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.p2AC16C3A7F558F03B7589B0B341CC13E0A9FCA1E) {
    var a = document.write("ok")
  }
  introspect(JAM.policy.p4E61D3C9E799EB3A777EE89D7018CA08390F879C) {
    var b = document.createElement("script")
  }
  introspect(JAM.policy.p2AC16C3A7F558F03B7589B0B341CC13E0A9FCA1E) {
    var c = document.write("fine")
  }
  ;

  JAM.stopProfile('load');

  return "Expect an exception";
}
