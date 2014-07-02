function runTest() {

  JAM.startProfile('load');
var v1=Math.random(),v0=4*v1;introspect(JAMScript.introspectors.process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2)x=Math.floor(v0);

  JAM.stopProfile('load');

  return typeof x === "undefined" || x !== 2;
}
