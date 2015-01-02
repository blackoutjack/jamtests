
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
  document.write("<script>x = 2;\x3c/script>");
}

JAM.log("Result: " + " + respred ");

JAM.stopProfile('load');
