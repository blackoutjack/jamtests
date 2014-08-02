function runTest() {
  try {
      x = 1;
  } catch(e) {
      x = 2;
  }

  return x === 1;
}
