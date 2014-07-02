function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll)document.write("<script>x = 2;\x3c/script>");

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
