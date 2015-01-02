
JAM.startProfile('load');
function runTest() {
  JAM.call(document.write,document,["<script>x = 2;\x3c/script>"])

  return "RESULT NOT SPECIFIED";
}

JAM.stopProfile('load');
