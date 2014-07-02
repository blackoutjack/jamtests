function runTest() {
introspect(JAMScript.introspectors.processAll) {
  x = 1;
  var elt = document.getElementById("test");
  elt.innerHTML = "<script>x = 2</script>";

  }

  return x === 1;
}
