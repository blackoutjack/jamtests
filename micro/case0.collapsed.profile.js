function runTest() {

  JAM.startProfile('load');
  x = 3;
  y = 4;
  switch(y) {
    case x = 1:
      JAM.call(print, null, ["1st case"]);
      break;
    case introspect(JAM.policy.p6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2) {
      x = 2
    }
    :
      JAM.call(print, null, ["2nd case"]);
      break;
    case x = 3:
      JAM.call(print, null, ["3rd case"]);
      break;
    default:
      introspect(JAM.policy.p6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2) {
        x = 2
      }
  }
  JAM.call(print, null, ["x: " + x]);

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
