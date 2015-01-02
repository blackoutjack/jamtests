
JAM.startProfile('load');
with (document) {
  var elt = getElementById("note");
}
elt.innerHTML = "ok";

JAM.stopProfile('load');
