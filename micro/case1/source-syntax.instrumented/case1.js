function runTest() {
  introspect(JAM.policy.p1) {
    x = 1;
  }
  switch(x) {
    case 1:
      y = x;
      alert(x);
    default:
      var v0 = x + 1;
      alert(v0);
  }

  return "RESULT NOT SPECIFIED";
}
