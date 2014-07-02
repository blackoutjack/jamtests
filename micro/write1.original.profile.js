function runTest() {

  JAM.startProfile('load');
document.write("<script>alert('ok1');</script><p>MID</p><script>alert('ok2');</script>");
  document.close();

  JAM.stopProfile('load');

  return "'ok1' should be alerted, then 'MID' written to the page, then 'ok2' alerted";
}
