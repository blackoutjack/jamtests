function runTest() {

  JAM.startProfile('load');
  x=JAM.call(Math.floor,Math,[4*Math.random()])

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
