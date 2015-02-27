
JAM.startProfile('load');
var a=document;introspect(JAM.policy.p1)a.cookie="ok"

JAM.log("Result: " + (document.cookie !== "ok"));

JAM.stopProfile('load');
