
JAM.startProfile('load');
document.getElementsByTagName = document.getElementById;
introspect(JAM.policy.p1) {
  var elt = document.getElementsByTagName("ok")
}

JAM.log("Result: " + ("Expect an exception"));

JAM.stopProfile('load');
