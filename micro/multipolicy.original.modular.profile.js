function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var a = document.getElementById("ok");
  var b = document.cookie;
  document.cookie = "other";
  var c = document.createElement("img");
  c.src = b;
  document.write(b);

  }

  JAM.stopProfile('load');

  return a === null && b instanceof HTMLElement;
}
