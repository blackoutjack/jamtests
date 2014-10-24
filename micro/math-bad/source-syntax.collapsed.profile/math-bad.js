function runTest() {

  JAM.startProfile('load');
  x = JAM.call(Math.floor, Math, [Math.random() * 4])

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
