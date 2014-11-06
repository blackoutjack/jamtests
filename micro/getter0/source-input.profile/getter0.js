var a = {

  JAM.startProfile('load');
  get ok() {
    return "ok";
  }

  JAM.stopProfile('load');

}
alert(a.ok);
