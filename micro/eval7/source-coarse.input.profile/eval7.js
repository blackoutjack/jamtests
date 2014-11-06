function transformed() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  xxx = undefined;
  xxx = 5;
}

  }

  JAM.stopProfile('load');

transformed();
alert(xxx);
