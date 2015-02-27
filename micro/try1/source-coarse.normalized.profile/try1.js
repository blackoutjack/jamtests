
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
try {
  x = 2;
} finally {
  x = 3;
}

JAM.log("Result: " + (x === 3));

}

JAM.stopProfile('load');
