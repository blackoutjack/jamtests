var a = {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  get ok() {
    return "ok";
  }

  }

  JAM.stopProfile('load');

}
alert(a.ok);
