introspect(JAM.policy.pFull) {  

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  document.write("<script>document.write(");
  document.write("'BOY HOWDY'");
  document.write(");</script>");

  }

  JAM.stopProfile('load');

  document.close();
}
