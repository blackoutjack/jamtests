function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  document.write("<script>alert('ok1');\x3c/script><p>MID</p><script>alert('ok2');\x3c/script>");
  document.close()

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
