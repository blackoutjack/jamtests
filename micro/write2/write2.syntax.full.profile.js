function runTest() {

  JAM.startProfile('load');
  // write2.js
  JAM.call(document.write, document, ["<script>x = 2;\x3c/script>"])

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
