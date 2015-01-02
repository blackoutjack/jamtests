
JAM.startProfile('load');
var s = "ok";
if (!s.indexOf("k")) {
  introspect(JAM.policy.p1) {
    x = 2;
  }
}

JAM.log("Result: " + " + respred ");

JAM.stopProfile('load');
