function runTest() {
introspect(JAMScript.introspectors.processAll) {  
    document.write("<script>document.write(");
    document.write("'BOY HOWDY'");
    document.write(");</script>");
    document.close();
  }

  return "'BOY HOWDY' should be written on the page";
}
