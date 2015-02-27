
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var div = document.createElement("div");
introspect(JAM.process) {
  div.innerHTML = "<a href='#'></a>";
  var v0 = div.childNodes;
  var d = v0[0];
}
var v1 = "VALUE: " + d;
alert(v1)

JAM.log("Result: " + ("The URL (with # appended) should be alerted"));

}

JAM.stopProfile('load');
