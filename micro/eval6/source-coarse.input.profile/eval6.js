
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
eval("var xxx = 5;");
alert(xxx);

}

JAM.stopProfile('load');
