function runTest() {

  JAM.startProfile('load');
function f(){var v1=typeof x,v1="undefined"===v1;if(!v1)introspect(JAMScript.introspectors.process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2)x=2}f();

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
