function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var s = 'is " this " ok' + '?';
  x = 2;

  }

  return typeof x === "undefined" && s === "is \" this \" ok?";
}
