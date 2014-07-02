function runTest() {

  JAM.startProfile('load');
var a=new String;JAMScript.isEval(eval)?eval("introspect(JAMScript.introspectors.processAll) { String = Boolean }"):JAMScript.call(eval,null,["String = Boolean"]);var b=new String;

  JAM.stopProfile('load');

  return b instanceof Boolean && !(a instanceof Boolean);
}
