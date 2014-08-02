function runTest() {
  document.write("<script>alert('ok1');</script><p>MID</p><script>alert('ok2');</script>");
  document.close();

  return "'ok1' should be alerted, then 'MID' written to the page, then 'ok2' alerted";
}
