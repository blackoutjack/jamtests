function runTest() {

  JAM.startProfile('load');
  x = 3;
  y = 4;
  switch(y) {
    case x = 1:
      JAM.call(print, null, ["1st case"]);
      break;
    case introspect(JAM.policy.p1) {
      x = 2
    }
    :
      JAM.call(print, null, ["2nd case"]);
      break;
    case x = 3:
      JAM.call(print, null, ["3rd case"]);
      break;
    default:
      introspect(JAM.policy.p1) {
        x = 2
      }
  }
  var v0 = "x: " + x;
  JAM.call(print, null, [v0]);

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
