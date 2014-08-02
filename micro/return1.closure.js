function runTest() {
  function g() {
    try {
      if(x) {
        return
      }else {
        x = 4
      }
    }finally {
      x = 2
    }
    x = 1
  }
  x = 3;
  g();
  print(x);

  return "RESULT NOT SPECIFIED";
}
