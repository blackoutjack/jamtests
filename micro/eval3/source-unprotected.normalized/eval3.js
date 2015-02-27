var a = new String;
eval("String = Boolean");
var b = new String

JAM.log("Result: " + (b instanceof Boolean && !(a instanceof Boolean)));
