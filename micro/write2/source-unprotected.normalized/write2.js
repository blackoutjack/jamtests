function runTest() {
  introspect(JAM.policy.pFull) {
    document.write("<script>x = 2;\x3c/script>");
  }

  return "RESULT NOT SPECIFIED";
}
