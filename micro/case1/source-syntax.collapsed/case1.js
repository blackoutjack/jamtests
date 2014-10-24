function runTest() {
  introspect(JAM.policy.p1) {
    x = 1;
  }
  switch(x) {
    case 1:
      y = x;
      alert(x);
    default:
      alert(x + 1);
  }

  return "RESULT NOT SPECIFIED";
}
