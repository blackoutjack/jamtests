function runTest() {

  JAM.startProfile('load');
var a="ok";JAMScript.set(a,"innerHTML",1,JAMScript.introspectors.processD4D25E04A23263FBD77B896710421141724AE95D);

  JAM.stopProfile('load');

  return a.innerHTML === undefined;
}
