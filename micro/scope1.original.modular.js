function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var z = 3;
  function a() {
  	var z = 2;
  	return z;
  }
  x = a();

  }

  return typeof x === "undefined";
}
