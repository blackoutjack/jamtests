
JAM.startProfile('load');
JAM.isEval(eval)?eval("introspect(JAM.policy.pFull) { var xxx = 5; }"):JAM.call(eval,null,["var xxx = 5;"]);alert(xxx)

JAM.log("Result: " + ("RESULT NOT SPECIFIED"));

JAM.stopProfile('load');
