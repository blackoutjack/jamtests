var a=new String;JAM.isEval(eval)?eval("introspect(JAM.policy.pFull) { String = Boolean }"):JAM.call(eval,null,["String = Boolean"]);var b=new String

JAM.log("Result: " + (b instanceof Boolean && !(a instanceof Boolean)));
