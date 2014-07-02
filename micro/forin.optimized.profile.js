function runTest() {

  JAM.startProfile('load');
o={y:2,z:3};for(var i in o)introspect(JAMScript.introspectors.process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2)x=o[i];

  JAM.stopProfile('load');

  return x === 3;
}
