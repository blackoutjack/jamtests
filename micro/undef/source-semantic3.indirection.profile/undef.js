
JAM.startProfile('load');
introspect(JAM.policy.p1) {
  x = y;
}

JAM.log("Result: " + ("Expect an exception"));

JAM.stopProfile('load');
