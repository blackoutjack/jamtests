function runTest() {
var a = document;
  a.cookie = "ok";

  return document.cookie !== "ok";
}
