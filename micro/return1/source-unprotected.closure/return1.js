function g() {
  try {
    if (x) {
      return;
    } else {
      x = 4;
    }
  } finally {
    x = 2;
  }
  x = 1;
}
x = 3;
g();
print(x)

JAM.log("Result: " + ("RESULT NOT SPECIFIED"));
