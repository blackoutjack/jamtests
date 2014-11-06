var z = 3;

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function a() {
	var z = 2;
	return z;

  }

  JAM.stopProfile('load');

}
x = a();
