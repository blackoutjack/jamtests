introspect(JAM.policy.pFull) {
introspect(JAM.policy.pFull) {
  document.write("<script>document.write(");
  document.write("'BOY HOWDY'");
  document.write(");\x3c/script>");
  document.close();
}

JAM.log("Result: " + ("'BOY HOWDY' should be written on the page"));

}
