function g() {

  JAM.startProfile('load');
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
  return
}
x = 3;

  JAM.stopProfile('load');

g();
print(x);
