function runTest() {
  try {
    x = 2;
  } finally {
    x = 3;
  }

  return "RESULT NOT SPECIFIED";
}
