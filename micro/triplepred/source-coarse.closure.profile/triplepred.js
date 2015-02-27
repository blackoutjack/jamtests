
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
x = Math.random() * 3;
x = 4;
x = Math.random() * 3;
x = 5;
x = Math.random() * 3;
x = 6

JAM.log("Result: " + (x === 6));

}

JAM.stopProfile('load');
