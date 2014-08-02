function runTest() {
  i = 3;
  for(;i < 5;) {
    x = i;
    i++
  }
  ;

  return x === 4;
}
