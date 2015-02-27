
JAM.startProfile('load');
function f(){throw"exception!";}f()

JAM.log("Result: " + ("Exception thrown"));

JAM.stopProfile('load');
