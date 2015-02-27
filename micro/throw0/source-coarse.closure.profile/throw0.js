
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
throw "exception!"

JAM.log("Result: " + ("Exception thrown"));

}

JAM.stopProfile('load');
