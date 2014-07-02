function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  x = 3;
  
  function f() {
      return 4;
  }
  
  x = f(); 

  }

  JAM.stopProfile('load');

  return x === 4;
}
