function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  introspect(JAM.policy.pFull) {  
    document.write("<script>x = 2;</script>");
  }

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
