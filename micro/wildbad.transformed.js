function runTest() {
var a = document.getElementById("ok");
  JAMScript.set(a, "innerHTML", 1, JAMScript.introspectors.processD4D25E04A23263FBD77B896710421141724AE95D);

  return a.innerHTML === "THIS SHOULD REMAIN";
}
