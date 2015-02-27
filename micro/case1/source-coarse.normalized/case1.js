introspect(JAM.policy.pFull) {
x = 1;
switch(x) {
  case 1:
    y = x;
    alert(x);
  default:
    var v0 = x + 1;
    alert(v0);
}

JAM.log("Result: " + (x === 1 && y === 1));

}
