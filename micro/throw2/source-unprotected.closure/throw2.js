function f() {
  return "exception!";
}
throw f()

JAM.log("Result: " + ("Exception thrown"));
