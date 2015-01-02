
JAM.startProfile('load');
x = 3;
introspect(JAM.policy.p1) {
  x = 2;
}
x = 6;
introspect(JAM.policy.p2) {
  x = 5;
}

JAM.log("Result: " + " + respred ");

JAM.stopProfile('load');
