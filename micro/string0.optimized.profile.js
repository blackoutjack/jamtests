function runTest() {

  JAM.startProfile('load');
var s='is " this " ok?';introspect(JAMScript.introspectors.process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2)x=2;

  JAM.stopProfile('load');

  return typeof x === "undefined" && s === "is \" this \" ok?";
}
