function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var a = document.getElementById("ok");
  a.innerHTML = 1;

  }

  return a.innerHTML === "THIS SHOULD REMAIN";
}
