function runTest() {
  eval("eval(\"var xxx = 10;\");");
  alert(xxx);

  return "RESULT NOT SPECIFIED";
}
