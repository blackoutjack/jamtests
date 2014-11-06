document.write("<script>alert('ok1');</script><p>MID</p><script>alert('ok2');</script>");

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  

  }

  JAM.stopProfile('load');

document.write("<script>alert('ok1');</script><p>MID</p><script>alert('ok2');</script>");
document.close();
