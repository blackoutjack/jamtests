function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var a = {
    get ok() {
      return "ok";
    }
  }
  alert(a.ok);

  }

  JAM.stopProfile('load');

  return a.ok === "ok";
}
