function runTest() {
x = 0;
  var i = 0;
  lbl:for(;i < 4;i++) {
    x++;
    if(i == 1) {
      break lbl
    }
  }
  ;

  return x === 1;
}
