
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
document.write("<script>alert('ok1');\x3c/script><p>MID</p><script>alert('ok2');\x3c/script>");
document.close()

JAM.log("Result: " + ("'ok1' should be alerted, then 'MID' written to the page, then 'ok2' alerted"));

}

JAM.stopProfile('load');
