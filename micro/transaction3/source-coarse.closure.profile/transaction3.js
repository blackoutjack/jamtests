
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
alert("0");
introspect(p) {
  alert("1");
}

JAM.log("Result: " + ("RESULT NOT SPECIFIED"));

}

JAM.stopProfile('load');
