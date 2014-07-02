function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var a = {
    get ok() {
      return "ok";
    }
  }
  alert(a.ok);

  }

  return a.ok === "ok";
}
