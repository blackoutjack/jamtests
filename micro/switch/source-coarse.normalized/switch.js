introspect(JAM.policy.pFull) {
var v1 = Math.random();
var v0 = v1 * 4;
x = Math.floor(v0);
switch(x) {
  case 0:
    x++;
    break;
  case 1:
    x--;
    break;
  case 2:
    x++;
    break;
  case 3:
    x--;
    break;
  default:
    alert("ERROR");
}

JAM.log("Result: " + (x !== 2));

}
