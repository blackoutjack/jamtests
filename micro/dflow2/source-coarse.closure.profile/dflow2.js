
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
z = 3;
y = z;
x = y

JAM.log("Result: " + (x === 3));

}

JAM.stopProfile('load');
