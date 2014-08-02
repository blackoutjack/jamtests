function runTest() {
  introspect(JAM.policy.pFull) {
  x = Math.floor(Math.random() * 4);
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
      alert("ERROR")
  }
  ;

  }

  return x !== 2;
}
