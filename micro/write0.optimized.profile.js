function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll)document.write("<script>document.write("),document.write("'BOY HOWDY'"),document.write(");\x3c/script>"),document.close();

  JAM.stopProfile('load');

  return "'BOY HOWDY' should be written on the page";
}
