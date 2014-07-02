function runTest() {

  JAM.startProfile('load');
JAMScript.isEval(eval)?eval("introspect(JAMScript.introspectors.processAll) { var xxx = 5; }"):JAMScript.call(eval,null,["var xxx = 5;"]);alert(xxx);

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
