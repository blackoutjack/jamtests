function runTest() {
  var a = "ok";
  a.innerHTML = 1;

  return a.innerHTML === undefined;
}
