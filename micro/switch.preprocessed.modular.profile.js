function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var v1 = Math.random();
  var v0 = v1 * 4;
  x = Math.floor(v0);
  switch(x) {
    case 0:
      x = x + 1;
      break;
    case 1:
      x = x - 1;
      break;
    case 2:
      x = x + 1;
      break;
    case 3:
      x = x - 1;
      break;
    default:
      alert("ERROR")
  }
  ;
  }

  JAM.stopProfile('load');

  return x !== 2;
}
