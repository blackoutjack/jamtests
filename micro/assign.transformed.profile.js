function runTest() {

  JAM.startProfile('load');
var a = document;
  introspect(JAMScript.introspectors.process2D796209C6C7E991CECC5A098DDB71DC2DB55178) {
    a.cookie = "ok"
  }
  ;

  JAM.stopProfile('load');

  return document.cookie !== "ok";
}
