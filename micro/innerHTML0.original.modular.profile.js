function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  x = 1;
  var elt = document.getElementById("test");
  elt.innerHTML = "<script>x = 2</script>";

  }

  JAM.stopProfile('load');

  return x === 1;
}
