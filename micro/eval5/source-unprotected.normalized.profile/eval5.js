function runTest() {

  JAM.startProfile('load');
  function f1(a) {
    var i$$1 = 0;
    var v1 = i$$1 < 2;
    for (;v1;) {
      var v0 = i$$1 * 2;
      a[i$$1] = letters[v0];
      i$$1 = i$$1 + 1;
      v1 = i$$1 < 2;
    }
    return;
  }
  function f2(a$$1) {
    var i$$2 = 0;
    var v3 = i$$2 < 2;
    for (;v3;) {
      var v2 = i$$2 + 2;
      var v5 = i$$2 * 2;
      var v4 = v5 + 1;
      a$$1[v2] = letters[v4];
      i$$2 = i$$2 + 1;
      v3 = i$$2 < 2;
    }
    return;
  }
  var letters = ["e", "a", "v", "l"];
  var name = [];
  f1(name);
  f2(name);
  name = name.join("");
  var f3 = this[name];
  var code = "String.prototype.indexOf = String.prototype.toLowerCase";
  f3(code);
  var result = "YOU'VE BEEN EVAL'D".indexOf("V")

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
