function runTest() {
introspect(JAMScript.introspectors.processAll) {  
    document.write("<script>x = 2;</script>");
  }

  return "RESULT NOT SPECIFIED";
}
