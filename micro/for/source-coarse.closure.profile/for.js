
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var i = 0;
for (;i < 5;i = i + 1) {
  x = i;
}

JAM.log("Result: " + (x === 4));

}

JAM.stopProfile('load');
