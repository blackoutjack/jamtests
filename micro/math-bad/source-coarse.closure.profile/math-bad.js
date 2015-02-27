
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
x = Math.floor(Math.random() * 4)

JAM.log("Result: " + (typeof x === "undefined" || x !== 2));

}

JAM.stopProfile('load');
