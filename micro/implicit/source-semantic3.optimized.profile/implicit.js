
JAM.startProfile('load');
function f(){x=3}f();introspect(JAM.policy.p1)x=2

JAM.log("Result: " + (x === 3));

JAM.stopProfile('load');
