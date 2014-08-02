function runTest() {

  JAM.startProfile('load');
  var z = 3;
  function a() {
  	var z = 2;
  	return z;
  }
  x = a();

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
