
JAM.startProfile('load');
function runTest() {
  JAM.call(document.write,document,["<script>alert('ok1');\x3c/script><p>MID</p><script>alert('ok2');\x3c/script>"]);document.close()

  return "'ok1' should be alerted, then 'MID' written to the page, then 'ok2' alerted";
}

JAM.stopProfile('load');
