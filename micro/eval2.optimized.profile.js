function runTest() {

  JAM.startProfile('load');
function f(){JAMScript.isEval(eval)?eval("introspect(JAMScript.introspectors.processAll) { String.prototype.indexOf = String.prototype.toLowerCase; }"):JAMScript.call(eval,null,["String.prototype.indexOf = String.prototype.toLowerCase;"]);var v=1;return v}introspect(JAMScript.introspectors.process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2)x=f();

  JAM.stopProfile('load');

  return x === "ok";
}
