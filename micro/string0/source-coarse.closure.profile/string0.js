
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var s = 'is " this " ok' + "?";
x = 2

JAM.log("Result: " + (typeof x === "undefined" && s === "is \" this \" ok?"));

}

JAM.stopProfile('load');
