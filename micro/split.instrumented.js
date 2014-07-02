function runTest() {
introspect(JAMScript.introspectors.process2AC16C3A7F558F03B7589B0B341CC13E0A9FCA1E) {
    var a = document.write("ok")
  }
  introspect(JAMScript.introspectors.process4E61D3C9E799EB3A777EE89D7018CA08390F879C) {
    var b = document.createElement("script")
  }
  introspect(JAMScript.introspectors.process2AC16C3A7F558F03B7589B0B341CC13E0A9FCA1E) {
    var c = document.write("fine")
  }
  ;

  return "Expect an exception";
}
